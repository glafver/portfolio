import { useEffect, useState } from 'react';
import { fetchTechLogos } from '../lib/content';
import { CONTENT_CHANGED_EVENT } from '../lib/refresh';
import type { TechLogo } from '../types';

export function useTechLogos(): TechLogo[] {
    const [logos, setLogos] = useState<TechLogo[]>([]);

    useEffect(() => {
        let cancelled = false;

        const load = () => {
            fetchTechLogos().then((data) => {
                if (!cancelled && data) setLogos(data);
            });
        };

        load();
        window.addEventListener(CONTENT_CHANGED_EVENT, load);

        return () => {
            cancelled = true;
            window.removeEventListener(CONTENT_CHANGED_EVENT, load);
        };
    }, []);

    return logos;
}
