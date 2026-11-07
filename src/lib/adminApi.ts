import { request } from './api';
import { notifyContentChanged } from './refresh';
import { optimizeImage, optimizeVideo } from './optimize';
import type { Project, TimelineEntry } from '../types';

export type ProjectInput = {
    title: string;
    description: string;
    tech: string[];
    images: string[];
    link: string;
    github?: string;
    important: string | null;
    sort_order: number;
    video?: string;
};

export async function createProject(input: ProjectInput): Promise<void> {
    await request('/projects', { method: 'POST', body: input, auth: true });
    notifyContentChanged();
}

export async function updateProject(id: string, input: ProjectInput): Promise<void> {
    await request(`/projects/${id}`, { method: 'PUT', body: input, auth: true });
    notifyContentChanged();
}

export async function deleteProject(id: string): Promise<void> {
    await request(`/projects/${id}`, { method: 'DELETE', auth: true });
    notifyContentChanged();
}

export async function setProjectVisibility(id: string, visible: boolean): Promise<void> {
    await request(`/projects/${id}/visible`, { method: 'POST', body: { visible }, auth: true });
    notifyContentChanged();
}

export async function reorderProjects(ordered: Project[]): Promise<void> {
    await request('/reorder-projects', { method: 'POST', body: ordered, auth: true });
    notifyContentChanged();
}

function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(blob);
    });
}

async function uploadToStorage(blob: Blob, name: string, contentType: string): Promise<string> {
    const data = await blobToBase64(blob);
    const { url } = await request<{ url: string }>('/upload', {
        method: 'POST',
        body: { name, contentType, data },
        auth: true,
    });
    return url;
}

export async function uploadImage(file: File): Promise<string> {
    const optimized = await optimizeImage(file);
    const name = `${Date.now()}-${Math.random().toString(36).slice(2)}.webp`;
    return uploadToStorage(optimized, name, 'image/webp');
}

export async function uploadVideo(file: File, onProgress?: (ratio: number) => void): Promise<string> {
    const optimized = await optimizeVideo(file, onProgress);
    const name = `${Date.now()}-${Math.random().toString(36).slice(2)}.mp4`;
    return uploadToStorage(optimized, name, 'video/mp4');
}

export async function uploadFile(file: File): Promise<string> {
    return uploadToStorage(file, file.name, file.type || 'application/octet-stream');
}

export async function saveSiteContent(entries: Record<string, string>): Promise<void> {
    await request('/content', { method: 'PUT', body: entries, auth: true });
    notifyContentChanged();
}

export type TimelineInput = {
    type: string;
    title: string;
    place: string;
    link: string;
    period: string;
    description: string;
};

export async function createTimelineEntry(input: TimelineInput): Promise<void> {
    await request('/timeline', { method: 'POST', body: input, auth: true });
    notifyContentChanged();
}

export async function updateTimelineEntry(id: string, input: TimelineInput): Promise<void> {
    await request(`/timeline/${id}`, { method: 'PUT', body: input, auth: true });
    notifyContentChanged();
}

export async function reorderTimeline(ordered: TimelineEntry[]): Promise<void> {
    await request('/reorder-timeline', { method: 'POST', body: ordered, auth: true });
    notifyContentChanged();
}

export async function deleteTimelineEntry(id: string): Promise<void> {
    await request(`/timeline/${id}`, { method: 'DELETE', auth: true });
    notifyContentChanged();
}

export async function createTechLogo(image_url: string): Promise<void> {
    await request('/tech-logos', { method: 'POST', body: { image_url }, auth: true });
    notifyContentChanged();
}

export async function deleteTechLogo(id: string): Promise<void> {
    await request(`/tech-logos/${id}`, { method: 'DELETE', auth: true });
    notifyContentChanged();
}

export async function createCertificate(image_url: string, title: string): Promise<void> {
    await request('/certificates', { method: 'POST', body: { image_url, title }, auth: true });
    notifyContentChanged();
}

export async function deleteCertificate(id: string): Promise<void> {
    await request(`/certificates/${id}`, { method: 'DELETE', auth: true });
    notifyContentChanged();
}
