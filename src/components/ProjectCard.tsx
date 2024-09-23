import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { Project } from '../helpers/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const galleryItems = project.imageUrls.map(url => ({
        original: url,
        thumbnail: url,
    }));

    const [openDropdown, setOpenDropdown] = useState(false);

    const renderMainImage = (item: ReactImageGalleryItem) => (
        <a target="_blank" href={project.link} >
            <img src={item.original} alt={item.description} className='aspect-[1.95]' />
        </a>
    );

    return (
        <div className="bg-neutral-200 rounded-md shadow-md hover:shadow-xl transition duration-300 overflow-hidden border flex flex-col">
            <Fade delay={30}>
                <ImageGallery
                    items={galleryItems}
                    showThumbnails={true}
                    showFullscreenButton={false}
                    showPlayButton={false}

                    renderItem={renderMainImage}
                />
            </Fade>
            <div className="px-6 pt-4">
                <div className="font-bold mb-3 lg:mb-5 flex items-center justify-between gap-3">
                    <a target="_blank" href={project.link} className='text-xl lg:text-2xl  hover:text-red-500 transition duration-300'>{project.title}</a>
                </div>
                <p className={`text-lg lg:text-xl mb-3 lg:mb-5 transition duration-300 lg:block`}>
                    {project.description}
                </p>
                {project.important ?
                    <p className={`font-bold text-md lg:text-md mb-3 lg:mb-5 transition duration-300 lg:block`}>
                        Important: {project.important}
                    </p>
                    : null}

            </div>
            <div
                onClick={() => setOpenDropdown(!openDropdown)}
                className='lg:hidden h-7 w-7 mr-4 ml-auto cursor-pointer rounded-full p-1 hover:bg-neutral-300 transition duration-300'
            >
                {openDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className="px-6 mt-auto mb-3" >
                {project.tech.map((tech, index) => (
                    <span key={index} className={`border border-neutral-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${openDropdown ? `inline-block` : `hidden`} lg:inline-block `}>#{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;