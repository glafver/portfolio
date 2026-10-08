import { supabase } from './supabase';
import { fallbackProjects, fallbackContent } from '../helpers/fallbackData';
import type { Project } from '../types';

export async function fetchProjects(): Promise<Project[] | null> {
    if (!supabase) return null;
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });
    if (error) {
        console.error('Failed to fetch projects:', error);
        return null;
    }
    return data as Project[];
}

export async function fetchSiteContent(): Promise<Record<string, string> | null> {
    if (!supabase) return null;
    const { data, error } = await supabase
        .from('site_content')
        .select('key, value');
    if (error) {
        console.error('Failed to fetch site content:', error);
        return null;
    }
    const map: Record<string, string> = {};
    for (const row of data) {
        map[row.key] = row.value;
    }
    return map;
}

export { fallbackProjects, fallbackContent };
