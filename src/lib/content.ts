import { supabase } from './supabase';
import { fallbackProjects, fallbackContent } from '../helpers/fallbackData';
import type { Project, TimelineEntry, Certificate, TechLogo } from '../types';

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

export async function fetchTimeline(): Promise<TimelineEntry[] | null> {
    if (!supabase) return null;
    const { data, error } = await supabase
        .from('timeline')
        .select('*')
        .order('sort_order', { ascending: true });
    if (error) {
        console.error('Failed to fetch timeline:', error);
        return null;
    }
    return data as TimelineEntry[];
}

export async function fetchTechLogos(): Promise<TechLogo[] | null> {
    if (!supabase) return null;
    const { data, error } = await supabase
        .from('tech_logos')
        .select('*')
        .order('sort_order', { ascending: true });
    if (error) {
        console.error('Failed to fetch tech logos:', error);
        return null;
    }
    return data as TechLogo[];
}

export async function fetchCertificates(): Promise<Certificate[] | null> {
    if (!supabase) return null;
    const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('sort_order', { ascending: true });
    if (error) {
        console.error('Failed to fetch certificates:', error);
        return null;
    }
    return data as Certificate[];
}

export { fallbackProjects, fallbackContent };
