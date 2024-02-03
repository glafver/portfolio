import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../helpers/projects.ts';

const ProjectsSection: React.FC = () => {

    return (
        <div id='projects' className="bg-white px-8 lg:px-12 py-16 lg:py-28 relative">
            <div className='relative z-10'>
                <div className="max-w-7xl mx-auto lg:px-4">
                    <div className="mx-auto pb-16 lg:pb-28 flex flex-col lg:flex-row-reverse items-end lg:items-center justify-between">
                        <div className="lg:w-1/2 text-right">
                            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-800 lg:pl-24">Have a look at my
                                <span className="block sm:inline h-20  ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                                    projects
                                </span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-lg lg:text-xl ">
                                Take a peek at some of my standout projects below. It's where creativity meets functionality! Dive into this showcase of my work, crafted with passion and precision.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 lg:gap-28">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
