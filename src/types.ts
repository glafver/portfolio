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
