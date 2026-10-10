export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    images: string[];
    link: string;
    github?: string;
    important: string | null;
    sort_order: number;
    visible?: boolean;
    video?: string;
    created_at?: string;
}

export interface Certificate {
    id: string;
    image_url: string;
    title: string;
    sort_order: number;
    created_at?: string;
}

export interface TechLogo {
    id: string;
    image_url: string;
    sort_order: number;
    created_at?: string;
}

export interface TimelineEntry {
    id: string;
    type: string;
    title: string;
    place: string;
    link: string;
    period: string;
    description: string;
    sort_order: number;
    created_at?: string;
}
