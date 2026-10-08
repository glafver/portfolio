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
        <div id='projects' className="bg-white px-8 lg:px-12 py-16 lg:py-28 relative">
            {isAdmin && <EditButton onClick={() => openContentEditor('projects')} className="absolute top-4 right-4 z-20" />}
            <div className='relative z-10'>
                <div className="max-w-7xl mx-auto lg:px-4">
                    <div className="mx-auto pb-16 lg:pb-28 flex flex-col lg:flex-row-reverse items-end lg:items-center justify-between">
                        <div className="lg:w-1/2 text-right">
                            <h2 className="text-3xl lg:text-5xl font-bold lg:pl-24">{heading}
                                <span className="block sm:inline h-20  ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                                    {highlight}
                                </span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-lg lg:text-xl ">
                                {content['projects.subtitle']}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 lg:gap-28">
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
            </div>
        </div>
    );
};

export default ProjectsSection;
