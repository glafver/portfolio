import { useEffect, useState } from 'react';
import { fetchSiteContent } from '../lib/content';
import { fallbackContent } from '../helpers/fallbackData';
import { CONTENT_CHANGED_EVENT } from '../lib/refresh';

export function useSiteContent(): Record<string, string> {
    const [content, setContent] = useState<Record<string, string>>(fallbackContent);

    useEffect(() => {
        let cancelled = false;

        const load = () => {
            fetchSiteContent().then((data) => {
                if (!cancelled && data) {
                    setContent((prev) => ({ ...prev, ...data }));
                }
            });
        };

        load();
        window.addEventListener(CONTENT_CHANGED_EVENT, load);

        return () => {
            cancelled = true;
            window.removeEventListener(CONTENT_CHANGED_EVENT, load);
        };
    }, []);

    return content;
}
