import { useState } from 'react';
import { useTimeline } from '../hooks/useTimeline';
import { useCertificates } from '../hooks/useCertificates';
import { deleteTimelineEntry, deleteCertificate, createCertificate, uploadImage } from '../lib/adminApi';
import TimelineEntryForm from './TimelineEntryForm';
import type { TimelineEntry } from '../types';

const ExperienceManager: React.FC = () => {
    const [tab, setTab] = useState<'timeline' | 'certificates'>('timeline');
    const timeline = useTimeline();
    const certificates = useCertificates();
    const [editing, setEditing] = useState<TimelineEntry | null>(null);
    const [creating, setCreating] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const handleDeleteEntry = async (entry: TimelineEntry) => {
        if (!window.confirm(`Delete "${entry.title}"?`)) return;
        try {
            await deleteTimelineEntry(entry.id);
        } catch (e) {
            console.error(e);
        }
    };

    const handleUploadCert = async (file: File) => {
        setUploading(true);
        setError('');
        try {
            const url = await uploadImage(file);
            await createCertificate(url, '');
        } catch (e) {
            console.error(e);
            setError('Failed to upload certificate.');
        } finally {
            setUploading(false);
        }
    };

    const handleDeleteCert = async (id: string) => {
        if (!window.confirm('Delete this certificate?')) return;
        try {
            await deleteCertificate(id);
        } catch (e) {
            console.error(e);
        }
    };

    if (creating || editing) {
        return (
            <TimelineEntryForm
                initial={editing}
                onCancel={() => {
                    setEditing(null);
                    setCreating(false);
                }}
                onSaved={() => {
                    setEditing(null);
                    setCreating(false);
                }}
            />
        );
    }

    const tabClass = (active: boolean) =>
        `px-4 py-2 rounded-lg text-sm font-medium transition ${active ? 'bg-accent text-white' : 'border border-neutral-300 text-neutral-700 hover:bg-neutral-100'}`;

    return (
        <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-1">Experience & Education</h2>
            <p className="text-sm text-neutral-500 mb-5">Manage your timeline and certificates.</p>

            <div className="flex gap-2 mb-6">
                <button onClick={() => setTab('timeline')} className={tabClass(tab === 'timeline')}>Timeline</button>
                <button onClick={() => setTab('certificates')} className={tabClass(tab === 'certificates')}>Certificates</button>
            </div>

            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

            {tab === 'timeline' ? (
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-neutral-500">{timeline.length} stages</span>
                        <button onClick={() => setCreating(true)} className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-lg transition">
                            + Add stage
                        </button>
                    </div>
                    <ul className="space-y-2">
                        {timeline.map((entry) => (
                            <li key={entry.id} className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="font-semibold truncate">{entry.title}</div>
                                    <div className="text-xs text-neutral-500 truncate">{entry.period}</div>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <button onClick={() => setEditing(entry)} className="border border-neutral-300 px-3 py-1 rounded-md text-sm hover:bg-neutral-100 transition">Edit</button>
                                    <button onClick={() => handleDeleteEntry(entry)} className="border border-red-300 text-red-600 px-3 py-1 rounded-md text-sm hover:bg-red-50 transition">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        {certificates.map((cert) => (
                            <div key={cert.id} className="relative">
                                <img src={cert.image_url} alt={cert.title} className="w-28 h-20 object-cover rounded-lg border" />
                                <button
                                    onClick={() => handleDeleteCert(cert.id)}
                                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs leading-none hover:bg-red-500 transition"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                    <label className="inline-flex items-center gap-2 border border-dashed border-neutral-400 rounded-lg px-4 py-2.5 text-sm cursor-pointer hover:bg-neutral-50 transition">
                        {uploading ? 'Uploading…' : 'Upload certificate'}
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            disabled={uploading}
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleUploadCert(file);
                                e.target.value = '';
                            }}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default ExperienceManager;
