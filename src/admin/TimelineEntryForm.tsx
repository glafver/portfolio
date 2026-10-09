import { useState } from 'react';
import type { TimelineEntry } from '../types';
import { createTimelineEntry, updateTimelineEntry, type TimelineInput } from '../lib/adminApi';

interface TimelineEntryFormProps {
    initial: TimelineEntry | null;
    onCancel: () => void;
    onSaved: () => void;
}

const TimelineEntryForm: React.FC<TimelineEntryFormProps> = ({ initial, onCancel, onSaved }) => {
    const [title, setTitle] = useState(initial?.title ?? '');
    const [period, setPeriod] = useState(initial?.period ?? '');
    const [description, setDescription] = useState(initial?.description ?? '');
    const [sortOrder, setSortOrder] = useState(initial?.sort_order ?? 0);

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const inputClass =
        'w-full border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition';
    const labelClass = 'block text-sm font-medium text-neutral-700 mb-1.5';

    const handleSubmit = async () => {
        setError('');
        if (!title.trim()) {
            setError('Title is required.');
            return;
        }
        setSaving(true);
        try {
            const input: TimelineInput = {
                title: title.trim(),
                period: period.trim(),
                description: description.trim(),
                sort_order: Number(sortOrder) || 0,
            };
            if (initial) {
                await updateTimelineEntry(initial.id, input);
            } else {
                await createTimelineEntry(input);
            }
            onSaved();
        } catch (e) {
            console.error(e);
            setError('Failed to save.');
            setSaving(false);
        }
    };

    return (
        <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-1">
                {initial ? 'Edit stage' : 'New stage'}
            </h2>
            <p className="text-sm text-neutral-500 mb-6">A stage on your timeline.</p>

            <div className="space-y-5">
                <div>
                    <label className={labelClass}>Title</label>
                    <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Fullstack Developer" />
                </div>
                <div>
                    <label className={labelClass}>Period</label>
                    <input className={inputClass} value={period} onChange={(e) => setPeriod(e.target.value)} placeholder="2023 – present" />
                </div>
                <div>
                    <label className={labelClass}>Description</label>
                    <textarea className={inputClass} rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label className={labelClass}>Sort order</label>
                    <input className={inputClass} type="number" value={sortOrder} onChange={(e) => setSortOrder(Number(e.target.value))} />
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <div className="flex gap-3 pt-2">
                    <button onClick={handleSubmit} disabled={saving} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-lg disabled:opacity-50 transition">
                        {saving ? 'Saving…' : 'Save'}
                    </button>
                    <button onClick={onCancel} className="border border-neutral-300 px-5 py-2 rounded-lg hover:bg-neutral-100 transition">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimelineEntryForm;
