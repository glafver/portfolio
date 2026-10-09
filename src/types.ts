export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    images: string[];
    link: string;
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

export interface TimelineEntry {
    id: string;
    title: string;
    period: string;
    description: string;
    sort_order: number;
    created_at?: string;
}
