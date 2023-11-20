import React from 'react';
import ProjectCard from './ProjectCard';
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import project_3 from '../assets/project_3.png';
import project_4 from '../assets/project_4.png';
import abstr_1 from "../assets/abstr_1.png";
import abstr_2 from "../assets/abstr_2.png";

const ProjectsSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description for Project 1',
            imageUrl: project_1,
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description for Project 2',
            imageUrl: project_2,
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Description for Project 3',
            imageUrl: project_3,
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'Description for Project 4',
            imageUrl: project_4,
        },
    ];

    return (
        <div id='projects' className="bg-white p-12 my-12 py-28 relative">
            <div className='relative z-10'>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-7xl mx-auto px-4 pb-36 flex flex-col lg:flex-row-reverse items-center justify-between">
                        <div className="lg:w-1/2 text-right">
                            <h2 className="text-6xl font-bold text-gray-800 pb-32">Look at my
                                <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                                    projects
                                </span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-2xl font-forum">
                                Take a peek at some of my standout projects below. It's where creativity meets functionality! Dive into this showcase of my work, crafted with passion and precision.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-32">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
            <img
                src={abstr_1}
                alt=""
                className="absolute h-auto w-1/2 z-0 top-48 left-72 opacity-20"
            />
            <img
                src={abstr_2}
                alt=""
                className="absolute rotate-90 h-auto w-1/2 z-0 top-4 left-24 opacity-20"
            />
        </div>
    );
};

export default ProjectsSection;
