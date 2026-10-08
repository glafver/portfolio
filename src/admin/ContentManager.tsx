import { useEffect, useState } from 'react';
import { fetchSiteContent, fallbackContent } from '../lib/content';
import { saveSiteContent } from '../lib/adminApi';

interface ContentField {
    key: string;
    label: string;
    multiline: boolean;
}

const CONTENT_FIELDS: ContentField[] = [
    { key: 'hero.name', label: 'Hero — name', multiline: false },
    { key: 'hero.role', label: 'Hero — role', multiline: false },
    { key: 'hero.subtitle', label: 'Hero — subtitle', multiline: true },

    { key: 'projects.title', label: 'Projects — heading', multiline: false },
    { key: 'projects.subtitle', label: 'Projects — subtitle', multiline: true },

    { key: 'technologies.title', label: 'Technologies — heading', multiline: false },

    { key: 'about.p1', label: 'About — paragraph 1', multiline: true },
    { key: 'about.p2', label: 'About — paragraph 2', multiline: true },
    { key: 'about.p3', label: 'About — paragraph 3', multiline: true },
    { key: 'about.p4', label: 'About — paragraph 4', multiline: true },
    { key: 'about.p5', label: 'About — paragraph 5', multiline: true },

    { key: 'contact.title', label: 'Contact — heading', multiline: false },
    { key: 'contact.email', label: 'Contact — email', multiline: false },
];

const ContentManager: React.FC = () => {
    const [values, setValues] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        let active = true;
        fetchSiteContent().then((data) => {
            if (!active) return;
            setValues({ ...fallbackContent, ...data });
            setLoading(false);
        });
        return () => {
            active = false;
        };
    }, []);

    const setField = (key: string, value: string) => {
        setValues((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            await saveSiteContent(values);
            setMessage('Saved successfully.');
        } catch (e) {
            console.error(e);
            setMessage('Failed to save.');
        } finally {
            setSaving(false);
        }
    };

    const inputClass =
        'w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500';

    if (loading) {
        return <p className="text-neutral-500">Loading…</p>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold">Site content</h2>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-neutral-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-neutral-700 disabled:opacity-50 transition"
                >
                    {saving ? 'Saving…' : 'Save changes'}
                </button>
            </div>

            {message && <p className="text-sm mb-3 text-neutral-600">{message}</p>}

            <div className="bg-white rounded-lg shadow p-6 space-y-5">
                {CONTENT_FIELDS.map((field) => (
                    <div key={field.key}>
                        <label className="block text-sm font-medium mb-1">{field.label}</label>
                        {field.multiline ? (
                            <textarea
                                className={inputClass}
                                rows={3}
                                value={values[field.key] ?? ''}
                                onChange={(e) => setField(field.key, e.target.value)}
                            />
                        ) : (
                            <input
                                className={inputClass}
                                value={values[field.key] ?? ''}
                                onChange={(e) => setField(field.key, e.target.value)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentManager;
