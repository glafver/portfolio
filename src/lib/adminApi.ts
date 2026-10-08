import { supabase } from './supabase';

export type ProjectInput = {
    title: string;
    description: string;
    tech: string[];
    images: string[];
    link: string;
    important: string | null;
    sort_order: number;
};

export async function createProject(input: ProjectInput): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('projects').insert(input);
    if (error) throw error;
}

export async function updateProject(id: string, input: ProjectInput): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('projects').update(input).eq('id', id);
    if (error) throw error;
}

export async function deleteProject(id: string): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) throw error;
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

export async function saveSiteContent(entries: Record<string, string>): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const rows = Object.entries(entries).map(([key, value]) => ({ key, value }));
    const { error } = await supabase
        .from('site_content')
        .upsert(rows, { onConflict: 'key' });
    if (error) throw error;
}
