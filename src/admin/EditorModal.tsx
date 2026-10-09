import { lazy, Suspense } from 'react';
import { IoMdClose } from 'react-icons/io';
import type { EditorTarget } from './types';

const ProjectForm = lazy(() => import('./ProjectForm'));
const ContentSectionEditor = lazy(() => import('./ContentSectionEditor'));
const ExperienceManager = lazy(() => import('./ExperienceManager'));
const TechLogosManager = lazy(() => import('./TechLogosManager'));

const EditorLoading = () => (
    <div className="p-8 text-neutral-500">Loading…</div>
);

interface EditorModalProps {
    target: EditorTarget | null;
    onClose: () => void;
}

const EditorModal: React.FC<EditorModalProps> = ({ target, onClose }) => {
    if (!target) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <IoMdClose
                    onClick={onClose}
                    className="text-xl cursor-pointer absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition z-10"
                    aria-label="Close"
                />
                <Suspense fallback={<EditorLoading />}>
                    {target.kind === 'project' ? (
                        <ProjectForm initial={target.project} onCancel={onClose} onSaved={onClose} />
                    ) : target.kind === 'content' ? (
                        <ContentSectionEditor section={target.section} onClose={onClose} />
                    ) : target.kind === 'experience' ? (
                        <ExperienceManager />
                    ) : (
                        <TechLogosManager />
                    )}
                </Suspense>
            </div>
        </div>
    );
};

export default EditorModal;
