import { useState, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import type { EditorTarget } from './types';
import { AdminContext, type AdminContextValue } from './AdminContext';
import EditorModal from './EditorModal';
import AdminBar from './AdminBar';

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { session, loading } = useAuth();
    const [editor, setEditor] = useState<EditorTarget | null>(null);

    const value: AdminContextValue = {
        isAdmin: Boolean(session),
        loading,
        openProjectEditor: (project) => setEditor({ kind: 'project', project }),
        openContentEditor: (section) => setEditor({ kind: 'content', section }),
        openExperienceEditor: () => setEditor({ kind: 'experience' }),
        closeEditor: () => setEditor(null),
    };

    return (
        <AdminContext.Provider value={value}>
            {children}
            <AdminBar />
            <EditorModal target={editor} onClose={() => setEditor(null)} />
        </AdminContext.Provider>
    );
};
