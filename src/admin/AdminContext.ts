import { createContext, useContext } from 'react';
import type { Project } from '../types';
import type { ContentSectionKey } from './contentFields';

export interface AdminContextValue {
    isAdmin: boolean;
    loading: boolean;
    openProjectEditor: (project: Project | null) => void;
    openContentEditor: (section: ContentSectionKey) => void;
    openExperienceEditor: () => void;
    closeEditor: () => void;
}

export const AdminContext = createContext<AdminContextValue | null>(null);

export function useAdmin(): AdminContextValue {
    const ctx = useContext(AdminContext);
    if (!ctx) {
        throw new Error('useAdmin must be used within AdminProvider');
    }
    return ctx;
}
