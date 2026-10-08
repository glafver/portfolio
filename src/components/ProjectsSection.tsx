import React from 'react';
import ProjectCard from './ProjectCard';
import { useProjects } from '../hooks/useProjects';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';
import { reorderProjects } from '../lib/adminApi';

const ProjectsSection: React.FC = () => {
    const projects = useProjects();
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    const displayedProjects = isAdmin ? projects : projects.filter((p) => p.visible !== false);

    const title = (content['projects.title'] ?? '').trim();
    const titleParts = title.split(' ');
    const highlight = titleParts.pop() ?? '';
    const heading = titleParts.join(' ');

    const handleMove = async (index: number, direction: 'up' | 'down') => {
        const target = direction === 'up' ? index - 1 : index + 1;
        if (target < 0 || target >= displayedProjects.length) return;
        const next = [...displayedProjects];
        [next[index], next[target]] = [next[target], next[index]];
        try {
            await reorderProjects(next);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section id="projects" className="relative bg-neutral-50 dark:bg-neutral-900 px-6 lg:px-8 py-20 lg:py-28">
            {isAdmin && <EditButton onClick={() => openContentEditor('projects')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-6xl mx-auto">
                <div className="mb-14 lg:mb-20">
                    <span className="font-display text-accent dark:text-accent-light text-sm uppercase tracking-[0.2em]">01</span>
                    <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-6xl leading-[0.95] tracking-tight text-neutral-900 dark:text-white mt-2">
                        {heading}{' '}
                        <span className="text-accent dark:text-accent-light">{highlight}</span>
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                        {content['projects.subtitle']}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            total={displayedProjects.length}
                            onMove={(direction) => handleMove(index, direction)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
