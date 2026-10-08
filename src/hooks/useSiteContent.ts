import { useEffect, useState } from 'react';
import { fetchSiteContent } from '../lib/content';
import { fallbackContent } from '../helpers/fallbackData';

export function useSiteContent(): Record<string, string> {
    const [content, setContent] = useState<Record<string, string>>(fallbackContent);

    useEffect(() => {
        let cancelled = false;
        fetchSiteContent().then((data) => {
            if (!cancelled && data) {
                setContent((prev) => ({ ...prev, ...data }));
            }
        });
        return () => {
            cancelled = true;
        };
    }, []);

    return content;
}
