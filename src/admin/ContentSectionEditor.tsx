import { useEffect, useState } from 'react';
import { fetchSiteContent, fallbackContent } from '../lib/content';
import { saveSiteContent, uploadFile } from '../lib/adminApi';
import { CONTENT_SECTIONS, type ContentSectionKey } from './contentFields';

interface ContentSectionEditorProps {
    section: ContentSectionKey;
    onClose: () => void;
}

const ContentSectionEditor: React.FC<ContentSectionEditorProps> = ({ section, onClose }) => {
    const { label, fields } = CONTENT_SECTIONS[section];
    const [values, setValues] = useState<Record<string, string>>({});
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        let active = true;
        fetchSiteContent().then((data) => {
            if (!active) return;
            const merged = { ...fallbackContent, ...data };
            const initial: Record<string, string> = {};
            for (const field of fields) {
                initial[field.key] = merged[field.key] ?? '';
            }
            setValues(initial);
        });
        return () => {
            active = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [section]);

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            await saveSiteContent(values);
            onClose();
        } catch (e) {
            console.error(e);
            setMessage('Failed to save.');
            setSaving(false);
        }
    };

    const handleFileUpload = async (key: string, file: File) => {
        setUploading(true);
        setMessage('');
        try {
            const url = await uploadFile(file);
            setValues((prev) => ({ ...prev, [key]: url }));
        } catch (e) {
            console.error(e);
            setMessage('Failed to upload file.');
        } finally {
            setUploading(false);
        }
    };

    const inputClass =
        'w-full border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition';

    return (
        <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-1">Edit {label}</h2>
            <p className="text-sm text-neutral-500 mb-6">Changes are saved to your live site.</p>

            <div className="space-y-5">
                {fields.map((field) => (
                    <div key={field.key}>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">{field.label}</label>

                        {field.type === 'file' ? (
                            <div>
                                {values[field.key] && (
                                    <div className="text-xs text-neutral-500 mb-2 break-all">
                                        Current: {values[field.key]}
                                    </div>
                                )}
                                <label className="inline-flex items-center gap-2 border border-dashed border-neutral-400 rounded-lg px-4 py-2.5 text-sm cursor-pointer hover:bg-neutral-50 transition">
                                    {uploading ? 'Uploading…' : 'Upload file'}
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        className="hidden"
                                        disabled={uploading}
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) handleFileUpload(field.key, file);
                                            e.target.value = '';
                                        }}
                                    />
                                </label>
                            </div>
                        ) : field.multiline ? (
                            <textarea
                                className={inputClass}
                                rows={3}
                                value={values[field.key] ?? ''}
                                onChange={(e) => setValues((prev) => ({ ...prev, [field.key]: e.target.value }))}
                            />
                        ) : (
                            <input
                                className={inputClass}
                                value={values[field.key] ?? ''}
                                onChange={(e) => setValues((prev) => ({ ...prev, [field.key]: e.target.value }))}
                            />
                        )}
                    </div>
                ))}
            </div>

            {message && <p className="text-red-600 text-sm mt-4">{message}</p>}

            <div className="flex gap-3 pt-6">
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-gradient-to-r from-purple-500 via-red-500 to-orange-500 text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
                >
                    {saving ? 'Saving…' : 'Save'}
                </button>
                <button
                    onClick={onClose}
                    className="border border-neutral-300 px-5 py-2 rounded-lg hover:bg-neutral-100 transition"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ContentSectionEditor;
