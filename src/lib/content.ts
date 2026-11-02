import { isApiConfigured, request } from './api';
import { fallbackProjects, fallbackContent } from '../helpers/fallbackData';
import type { Project, TimelineEntry, Certificate, TechLogo } from '../types';

export async function fetchProjects(): Promise<Project[] | null> {
    if (!isApiConfigured) return null;
    try {
        return await request<Project[]>('/projects');
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return null;
    }
}

export async function fetchSiteContent(): Promise<Record<string, string> | null> {
    if (!isApiConfigured) return null;
    try {
        return await request<Record<string, string>>('/content');
    } catch (error) {
        console.error('Failed to fetch site content:', error);
        return null;
    }
}

export async function fetchTimeline(): Promise<TimelineEntry[] | null> {
    if (!isApiConfigured) return null;
    try {
        return await request<TimelineEntry[]>('/timeline');
    } catch (error) {
        console.error('Failed to fetch timeline:', error);
        return null;
    }
}

export async function fetchTechLogos(): Promise<TechLogo[] | null> {
    if (!isApiConfigured) return null;
    try {
        return await request<TechLogo[]>('/tech-logos');
    } catch (error) {
        console.error('Failed to fetch tech logos:', error);
        return null;
    }
}

export async function fetchCertificates(): Promise<Certificate[] | null> {
    if (!isApiConfigured) return null;
    try {
        return await request<Certificate[]>('/certificates');
    } catch (error) {
        console.error('Failed to fetch certificates:', error);
        return null;
    }
}

export { fallbackProjects, fallbackContent };
