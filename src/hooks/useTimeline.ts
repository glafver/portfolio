import { useEffect, useState } from 'react';
import { fetchTimeline } from '../lib/content';
import { CONTENT_CHANGED_EVENT } from '../lib/refresh';
import type { TimelineEntry } from '../types';

export function useTimeline(): TimelineEntry[] {
    const [entries, setEntries] = useState<TimelineEntry[]>([]);

    useEffect(() => {
        let cancelled = false;

        const load = () => {
            fetchTimeline().then((data) => {
                if (!cancelled && data) setEntries(data);
            });
        };

        load();
        window.addEventListener(CONTENT_CHANGED_EVENT, load);

        return () => {
            cancelled = true;
            window.removeEventListener(CONTENT_CHANGED_EVENT, load);
        };
    }, []);

    return entries;
}
