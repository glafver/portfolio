import { useState } from 'react';
import type { Project } from '../types';
import { uploadImage, createProject, updateProject, type ProjectInput } from '../lib/adminApi';

interface ProjectFormProps {
    initial: Project | null;
    onCancel: () => void;
    onSaved: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ initial, onCancel, onSaved }) => {
    const [title, setTitle] = useState(initial?.title ?? '');
    const [description, setDescription] = useState(initial?.description ?? '');
    const [link, setLink] = useState(initial?.link ?? '');
    const [important, setImportant] = useState(initial?.important ?? '');
    const [tech, setTech] = useState((initial?.tech ?? []).join(', '));
    const [images, setImages] = useState<string[]>(initial?.images ?? []);
    const [sortOrder, setSortOrder] = useState(initial?.sort_order ?? 0);

    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const handleUpload = async (file: File) => {
        setUploading(true);
        setError('');
        try {
            const url = await uploadImage(file);
            setImages((prev) => [...prev, url]);
        } catch (e) {
            console.error(e);
            setError('Failed to upload image.');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async () => {
        setError('');
        if (!title.trim()) {
            setError('Title is required.');
            return;
        }
        setSaving(true);
        try {
            const input: ProjectInput = {
                title: title.trim(),
                description: description.trim(),
                link: link.trim(),
                important: important.trim() || null,
                tech: tech.split(',').map((t) => t.trim()).filter(Boolean),
                images,
                sort_order: Number(sortOrder) || 0,
            };
            if (initial) {
                await updateProject(initial.id, input);
            } else {
                await createProject(input);
            }
            onSaved();
        } catch (e) {
            console.error(e);
            setError('Failed to save project.');
            setSaving(false);
        }
    };

    const inputClass =
        'w-full border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition';
    const labelClass = 'block text-sm font-medium text-neutral-700 mb-1.5';

    return (
        <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-1">
                {initial ? 'Edit project' : 'New project'}
            </h2>
            <p className="text-sm text-neutral-500 mb-6">Changes are saved to your live site.</p>

            <div className="space-y-5">
                <div>
                    <label className={labelClass}>Title</label>
                    <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <label className={labelClass}>Description</label>
                    <textarea
                        className={inputClass}
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div>
                    <label className={labelClass}>Link</label>
                    <input className={inputClass} value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://…" />
                </div>

                <div>
                    <label className={labelClass}>Important note (optional)</label>
                    <textarea
                        className={inputClass}
                        rows={2}
                        value={important}
                        onChange={(e) => setImportant(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                        <label className={labelClass}>Technologies (comma separated)</label>
                        <input className={inputClass} value={tech} onChange={(e) => setTech(e.target.value)} placeholder="React, TypeScript, Tailwind" />
                    </div>
                    <div>
                        <label className={labelClass}>Sort order</label>
                        <input
                            className={inputClass}
                            type="number"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div>
                    <label className={labelClass}>Images</label>
                    <div className="flex flex-wrap gap-3 mb-3">
                        {images.map((url, index) => (
                            <div key={index} className="relative w-24 h-24">
                                <img src={url} alt="" className="w-24 h-24 object-cover rounded-lg border" />
                                <button
                                    type="button"
                                    onClick={() => setImages((prev) => prev.filter((_, i) => i !== index))}
                                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs leading-none hover:bg-red-500 transition"
                                    aria-label="Remove image"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                    <label className="inline-flex items-center gap-2 border border-dashed border-neutral-400 rounded-lg px-4 py-2.5 text-sm cursor-pointer hover:bg-neutral-50 transition">
                        {uploading ? 'Uploading…' : 'Upload image'}
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

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <div className="flex gap-3 pt-2">
                    <button
                        onClick={handleSubmit}
                        disabled={saving}
                        className="bg-gradient-to-r from-purple-500 via-red-500 to-orange-500 text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
                    >
                        {saving ? 'Saving…' : 'Save'}
                    </button>
                    <button
                        onClick={onCancel}
                        className="border border-neutral-300 px-5 py-2 rounded-lg hover:bg-neutral-100 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectForm;
