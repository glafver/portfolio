import { useEffect, useState } from 'react';
import { fetchCertificates } from '../lib/content';
import { CONTENT_CHANGED_EVENT } from '../lib/refresh';
import type { Certificate } from '../types';

export function useCertificates(): Certificate[] {
    const [certificates, setCertificates] = useState<Certificate[]>([]);

    useEffect(() => {
        let cancelled = false;

        const load = () => {
            fetchCertificates().then((data) => {
                if (!cancelled && data) setCertificates(data);
            });
        };

        load();
        window.addEventListener(CONTENT_CHANGED_EVENT, load);

        return () => {
            cancelled = true;
            window.removeEventListener(CONTENT_CHANGED_EVENT, load);
        };
    }, []);

    return certificates;
}
