export interface ContentField {
    key: string;
    label: string;
    multiline: boolean;
    type?: 'text' | 'file';
}

export interface ContentSection {
    label: string;
    fields: ContentField[];
}

export const CONTENT_SECTIONS: Record<string, ContentSection> = {
    hero: {
        label: 'Hero',
        fields: [
            { key: 'hero.name', label: 'Name', multiline: false },
            { key: 'hero.role', label: 'Role', multiline: false },
            { key: 'hero.subtitle', label: 'Subtitle', multiline: true },
        ],
    },
    projects: {
        label: 'Projects',
        fields: [
            { key: 'projects.title', label: 'Heading', multiline: false },
            { key: 'projects.subtitle', label: 'Subtitle', multiline: true },
        ],
    },
    technologies: {
        label: 'Technologies',
        fields: [{ key: 'technologies.title', label: 'Heading', multiline: false }],
    },
    about: {
        label: 'About',
        fields: [
            { key: 'about.p1', label: 'Paragraph 1', multiline: true },
            { key: 'about.p2', label: 'Paragraph 2', multiline: true },
            { key: 'about.p3', label: 'Paragraph 3', multiline: true },
            { key: 'about.p4', label: 'Paragraph 4', multiline: true },
            { key: 'about.p5', label: 'Paragraph 5', multiline: true },
        ],
    },
    experience: {
        label: 'Experience & Education',
        fields: [
            { key: 'experience.title', label: 'Heading', multiline: false },
            { key: 'experience.subtitle', label: 'Subtitle', multiline: true },
        ],
    },
    contact: {
        label: 'Contact',
        fields: [
            { key: 'contact.title', label: 'Heading', multiline: false },
            { key: 'contact.email', label: 'Email', multiline: false },
            { key: 'social.linkedin', label: 'LinkedIn URL', multiline: false },
            { key: 'social.facebook', label: 'Facebook URL', multiline: false },
            { key: 'social.github', label: 'GitHub URL', multiline: false },
            { key: 'social.instagram', label: 'Instagram URL', multiline: false },
        ],
    },
    settings: {
        label: 'Settings',
        fields: [{ key: 'cv.url', label: 'CV (PDF)', multiline: false, type: 'file' }],
    },
};

export type ContentSectionKey = keyof typeof CONTENT_SECTIONS;
