export function downloadFile(url: string, filename: string): void {
    fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error('Failed to fetch');
            return response.blob();
        })
        .then((blob) => {
            const objectUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = objectUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(objectUrl);
        })
        .catch((e) => {
            console.error('Download failed:', e);
            window.open(url, '_blank');
        });
}
