import { FFmpeg, FFFSType } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

/**
 * Resize an image client-side (down to a max width) and re-encode it as WebP.
 * Returns a Blob ready to upload.
 */
export async function optimizeImage(file: File, maxWidth = 1600, quality = 0.85): Promise<Blob> {
    const bitmap = await createImageBitmap(file);
    try {
        const scale = Math.min(1, maxWidth / bitmap.width);
        const w = Math.max(1, Math.round(bitmap.width * scale));
        const h = Math.max(1, Math.round(bitmap.height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas 2D context unavailable');
        ctx.drawImage(bitmap, 0, 0, w, h);
        return await new Promise<Blob>((resolve, reject) => {
            canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Image encode failed'))), 'image/webp', quality);
        });
    } finally {
        bitmap.close();
    }
}

let ffmpegInstance: FFmpeg | null = null;
let ffmpegLoading: Promise<FFmpeg> | null = null;

async function getFFmpeg(): Promise<FFmpeg> {
    if (ffmpegInstance) return ffmpegInstance;
    if (!ffmpegLoading) {
        ffmpegLoading = (async () => {
            const ffmpeg = new FFmpeg();
            const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.10/dist/esm';
            await ffmpeg.load({
                coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
            });
            ffmpegInstance = ffmpeg;
            return ffmpeg;
        })().catch((e) => {
            ffmpegLoading = null;
            throw e;
        });
    }
    return ffmpegLoading;
}

/**
 * Compress a video client-side with ffmpeg.wasm (scale to 1280x800, VP9, no audio).
 * Returns a WebM Blob ready to upload.
 */
export async function optimizeVideo(file: File, onProgress?: (ratio: number) => void): Promise<Blob> {
    const ffmpeg = await getFFmpeg();
    const ext = (file.name.split('.').pop() || 'mp4').toLowerCase();
    const inputName = `input.${ext}`;
    const outputName = 'output.webm';
    const renamedFile = new File([file], inputName, { type: file.type });

    const onProgressEvent = ({ progress }: { progress: number }) => {
        if (onProgress) onProgress(Math.max(0, Math.min(1, progress)));
    };
    ffmpeg.on('progress', onProgressEvent);

    try {
        // Mount the input directly (WORKERFS) instead of copying it into wasm
        // memory — avoids "memory access out of bounds" for large files.
        await ffmpeg.mount(FFFSType.WORKERFS, { files: [renamedFile] }, '/work');
        await ffmpeg.exec([
            '-i', `/work/${inputName}`,
            '-vf', 'scale=1280:800',
            '-c:v', 'libvpx-vp9',
            '-crf', '28',
            '-b:v', '0',
            '-deadline', 'good',
            '-cpu-used', '4',
            '-an',
            outputName,
        ]);
        const data = await ffmpeg.readFile(outputName);
        return new Blob([data as BlobPart], { type: 'video/webm' });
    } finally {
        ffmpeg.off('progress', onProgressEvent);
        await ffmpeg.unmount('/work').catch(() => {});
        await ffmpeg.deleteFile(outputName).catch(() => {});
    }
}
