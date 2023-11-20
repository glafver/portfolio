import React from 'react';
import icon_code from '../assets/icon_code.png';
import icon_web from '../assets/icon_web.png';
import ImageGallery from 'react-image-gallery';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrls: string[];
    tech: string[];
    link: string;
    code: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const galleryItems = project.imageUrls.map(url => ({
        original: url,
        thumbnail: url,
    }));
    return (
        <div className="bg-neutral-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border">
            <ImageGallery showThumbnails={false} showFullscreenButton={false} showPlayButton={false} items={galleryItems} />
            <div className="px-6 py-4 text-xl">
                <div className="font-bold mb-2">
                    {project.title}
                    <a target="_blank" href={project.link}><img className='w-5 ml-5 inline' src={icon_web} /></a>
                    <a target="_blank" href={project.code}><img className='w-5 ml-5 inline' src={icon_code} /></a>
                </div>
                <p className="font-forum">
                    {project.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {project.tech.map((tech, index) => (
                    <span key={index} className="inline-block border border-neutral-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
