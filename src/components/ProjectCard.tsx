import React, { useState } from 'react';
import icon_code from '../assets/icon_code.png';
import icon_web from '../assets/icon_web.png';
import icon_down from '../assets/icon_down.png';
import icon_up from '../assets/icon_up.png';
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

    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className="bg-neutral-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border">
            <ImageGallery showThumbnails={false} showFullscreenButton={true} showPlayButton={false} items={galleryItems} />
            <div className="px-6 py-4">
                <div className="font-bold mb-3 lg:mb-5 flex flex-col">
                    <div className='mb-3 lg:mb-5 text-xl lg:text-2xl'>{project.title}</div>
                    <div className='flex items-center'>
                        <a target="_blank" href={project.link}><img className='h-5 w-5' src={icon_web} /></a>
                        <a target="_blank" href={project.code}><img className='h-5 w-5 ml-3' src={icon_code} /></a>
                        <img
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className='lg:hidden h-7 w-7 ml-auto cursor-pointer rounded-full p-1 hover:bg-neutral-300 transition duration-300'
                            src={openDropdown ? icon_up : icon_down} />
                    </div>
                </div>
                <p className={`text-lg lg:text-xl mb-3 lg:mb-5 transition duration-300 lg:block ${openDropdown ? `block` : `hidden`}`}>
                    {project.description}
                </p>
                <div className="">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="inline-block border border-neutral-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
