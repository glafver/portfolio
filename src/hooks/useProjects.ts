import { useEffect, useState } from 'react';
import { fetchProjects } from '../lib/content';
import { fallbackProjects } from '../helpers/fallbackData';
import type { Project } from '../types';

export function useProjects(): Project[] {
    const [projects, setProjects] = useState<Project[]>(fallbackProjects);

    useEffect(() => {
        let cancelled = false;
        fetchProjects().then((data) => {
            if (!cancelled && data && data.length > 0) {
                setProjects(data);
            }
        });
        return () => {
            cancelled = true;
        };
    }, []);

    return projects;
}
