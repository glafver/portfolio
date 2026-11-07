import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

// ---------------------------------------------------------------------------
// Images — resize down to fit a 1600×1000 box and re-encode as WebP (quality 85).
// ---------------------------------------------------------------------------
export interface OptimizeImageOptions {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
}

export async function optimizeImage(file: File, options: OptimizeImageOptions = {}): Promise<Blob> {
    const { maxWidth = 1600, maxHeight = 1000, quality = 0.85 } = options;

    const bitmap = await createImageBitmap(file);
    try {
        const scale = Math.min(1, maxWidth / bitmap.width, maxHeight / bitmap.height);
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

// ---------------------------------------------------------------------------
// Video — transcode client-side with ffmpeg.wasm (single-threaded core).
// Input is mounted via WORKERFS so the (potentially large) recording is read
// straight from the File object instead of being copied into WASM memory —
// this is what fixes the previous "memory access out of bounds" crash.
// ---------------------------------------------------------------------------
const CORE_VERSION = '0.12.6';
const CORE_BASE = `https://cdn.jsdelivr.net/npm/@ffmpeg/core@${CORE_VERSION}/dist/esm`;

let ffmpegInstance: FFmpeg | null = null;
let ffmpegLoading: Promise<FFmpeg> | null = null;

function getFFmpeg(): Promise<FFmpeg> {
    if (ffmpegInstance) return Promise.resolve(ffmpegInstance);
    if (!ffmpegLoading) {
        ffmpegLoading = (async () => {
            const ffmpeg = new FFmpeg();
            await ffmpeg.load({
                coreURL: await toBlobURL(`${CORE_BASE}/ffmpeg-core.js`, 'text/javascript'),
                wasmURL: await toBlobURL(`${CORE_BASE}/ffmpeg-core.wasm`, 'application/wasm'),
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

/** Warm up the encoder (downloads the WASM core) — call it when the admin UI opens. */
export async function preloadFFmpeg(): Promise<void> {
    await getFFmpeg();
}

export async function optimizeVideo(file: File, onProgress?: (ratio: number) => void): Promise<Blob> {
    const ffmpeg = await getFFmpeg();

    const ext = (file.name.split('.').pop() || 'mp4').toLowerCase();
    const inputName = `input.${ext}`;
    const outputName = 'output.mp4';

    const onProgressEvent = ({ progress }: { progress: number }) => {
        onProgress?.(Math.max(0, Math.min(1, progress)));
    };
    ffmpeg.on('progress', onProgressEvent);

    try {
        // WORKERFS mount: the input is read lazily from the File, not copied.
        await ffmpeg.createDir('/work').catch(() => {});
        await ffmpeg.mount(
            'WORKERFS' as never,
            { files: [new File([file], inputName, { type: file.type })] },
            '/work',
        );

        onProgress?.(0);

        const ret = await ffmpeg.exec([
            '-i', `/work/${inputName}`,
            '-vf', 'scale=1600:1000:force_original_aspect_ratio=decrease:force_divisible_by=2',
            '-c:v', 'libx264',
            '-crf', '20',
            '-preset', 'medium',
            '-pix_fmt', 'yuv420p',
            '-an',
            '-movflags', '+faststart',
            outputName,
        ]);

        if (ret !== 0) throw new Error(`ffmpeg exited with code ${ret}`);

        const data = await ffmpeg.readFile(outputName);
        const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
        return new Blob([bytes], { type: 'video/mp4' });
    } finally {
        ffmpeg.off('progress', onProgressEvent);
        await ffmpeg.unmount('/work').catch(() => {});
        await ffmpeg.deleteFile(outputName).catch(() => {});
    }
}
