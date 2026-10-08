import { useEffect, useState } from 'react';
import { fetchProjects } from '../lib/content';
import { fallbackProjects } from '../helpers/fallbackData';
import { CONTENT_CHANGED_EVENT } from '../lib/refresh';
import type { Project } from '../types';

export function useProjects(): Project[] {
    const [projects, setProjects] = useState<Project[]>(fallbackProjects);

    useEffect(() => {
        let cancelled = false;

        const load = () => {
            fetchProjects().then((data) => {
                if (!cancelled && data && data.length > 0) {
                    setProjects(data);
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

    return projects;
}
