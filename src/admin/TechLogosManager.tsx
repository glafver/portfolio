import { useState } from 'react';
import { useTechLogos } from '../hooks/useTechLogos';
import { createTechLogo, deleteTechLogo, uploadImage } from '../lib/adminApi';

const TechLogosManager: React.FC = () => {
    const logos = useTechLogos();
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const handleUpload = async (file: File) => {
        setUploading(true);
        setError('');
        try {
            const url = await uploadImage(file);
            await createTechLogo(url);
        } catch (e) {
            console.error(e);
            setError('Failed to upload logo.');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Delete this logo?')) return;
        try {
            await deleteTechLogo(id);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-1">Tech Stack logos</h2>
            <p className="text-sm text-neutral-500 mb-6">Upload and remove technology logos.</p>

            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

            <div className="flex flex-wrap gap-4 mb-6">
                {logos.map((logo) => (
                    <div
                        key={logo.id}
                        className="relative bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 flex items-center"
                    >
                        <img src={logo.image_url} alt="" className="h-8 w-auto" />
                        <button
                            onClick={() => handleDelete(logo.id)}
                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs leading-none hover:bg-red-500 transition"
                            aria-label="Remove"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            <label className="inline-flex items-center gap-2 border border-dashed border-neutral-400 rounded-lg px-4 py-2.5 text-sm cursor-pointer hover:bg-neutral-50 transition">
                {uploading ? 'Uploading…' : 'Upload logo'}
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploading}
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleUpload(file);
                        e.target.value = '';
                    }}
                />
            </label>
        </div>
    );
};

export default TechLogosManager;
