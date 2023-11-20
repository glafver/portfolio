import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-neutral-200 rounded-lg shadow-md overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover" />
            <div className="px-6 py-4 text-xl">
                <div className="font-bold mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 font-forum">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block border border-black text-black rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            </div>
        </div>
    );
};

export default ProjectCard;
