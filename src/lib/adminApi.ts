import { supabase } from './supabase';
import { notifyContentChanged } from './refresh';
import type { Project } from '../types';

export type ProjectInput = {
    title: string;
    description: string;
    tech: string[];
    images: string[];
    link: string;
    important: string | null;
    sort_order: number;
    video?: string;
};

export async function createProject(input: ProjectInput): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('projects').insert(input);
    if (error) throw error;
    notifyContentChanged();
}

export async function updateProject(id: string, input: ProjectInput): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('projects').update(input).eq('id', id);
    if (error) throw error;
    notifyContentChanged();
}

export async function deleteProject(id: string): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) throw error;
    notifyContentChanged();
}

export async function setProjectVisibility(id: string, visible: boolean): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('projects').update({ visible }).eq('id', id);
    if (error) throw error;
    notifyContentChanged();
}

export async function reorderProjects(ordered: Project[]): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    for (let i = 0; i < ordered.length; i++) {
        const { error } = await supabase
            .from('projects')
            .update({ sort_order: i + 1 })
            .eq('id', ordered[i].id);
        if (error) throw error;
    }
    notifyContentChanged();
}

export async function uploadImage(file: File): Promise<string> {
    if (!supabase) throw new Error('Supabase is not configured');
    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage
        .from('project-images')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
    if (error) throw error;
    const { data } = supabase.storage.from('project-images').getPublicUrl(fileName);
    return data.publicUrl;
}

export async function uploadFile(file: File): Promise<string> {
    if (!supabase) throw new Error('Supabase is not configured');
    const ext = (file.name.split('.').pop() || 'pdf').toLowerCase();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage
        .from('files')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
    if (error) throw error;
    const { data } = supabase.storage.from('files').getPublicUrl(fileName);
    return data.publicUrl;
}

export async function saveSiteContent(entries: Record<string, string>): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const rows = Object.entries(entries).map(([key, value]) => ({ key, value }));
    const { error } = await supabase
        .from('site_content')
        .upsert(rows, { onConflict: 'key' });
    if (error) throw error;
    notifyContentChanged();
}

export type TimelineInput = {
    type: string;
    title: string;
    place: string;
    link: string;
    period: string;
    description: string;
    sort_order: number;
};

export async function createTimelineEntry(input: TimelineInput): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('timeline').insert(input);
    if (error) throw error;
    notifyContentChanged();
}

export async function updateTimelineEntry(id: string, input: TimelineInput): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('timeline').update(input).eq('id', id);
    if (error) throw error;
    notifyContentChanged();
}

export async function deleteTimelineEntry(id: string): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('timeline').delete().eq('id', id);
    if (error) throw error;
    notifyContentChanged();
}

export async function createCertificate(image_url: string, title: string): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase
        .from('certificates')
        .insert({ image_url, title, sort_order: 0 });
    if (error) throw error;
    notifyContentChanged();
}

export async function deleteCertificate(id: string): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('certificates').delete().eq('id', id);
    if (error) throw error;
    notifyContentChanged();
}
