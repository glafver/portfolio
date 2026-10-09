import React, { useState } from 'react';
import Reveal from './Reveal';
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
    const [showAll, setShowAll] = useState(false);

    const displayedProjects = isAdmin ? projects : projects.filter((p) => p.visible !== false);
    const visibleProjects = isAdmin || showAll ? displayedProjects : displayedProjects.slice(0, 4);

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
        <section id="projects" className="relative px-6 lg:px-8 py-20 lg:py-28">
            {isAdmin && <EditButton onClick={() => openContentEditor('projects')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <div className="mb-14 lg:mb-20">
                        <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-6xl leading-[0.95] tracking-tight text-neutral-900 dark:text-white">
                            {heading}{' '}
                            <span className="text-accent dark:text-accent-light">{highlight}</span>
                        </h2>
                        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                            {content['projects.subtitle']}
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {visibleProjects.map((project, index) => (
                        <Reveal key={project.id} delay={index * 80} className="h-full">
                            <ProjectCard
                                project={project}
                                index={index}
                                total={visibleProjects.length}
                                onMove={(direction) => handleMove(index, direction)}
                            />
                        </Reveal>
                    ))}
                </div>

                {!isAdmin && displayedProjects.length > 4 && (
                    <div className="mt-10 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold px-8 py-3 rounded-full hover:border-accent hover:text-accent dark:hover:text-accent-light transition"
                        >
                            {showAll ? 'Show less' : 'Show more projects'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
