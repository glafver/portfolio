import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaChevronDown, FaChevronUp, FaEdit, FaTrash, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { Project } from '../types';
import { useAdmin } from '../admin/AdminContext';
import { deleteProject } from '../lib/adminApi';

interface ProjectCardProps {
    project: Project;
    index: number;
    total: number;
    onMove: (direction: 'up' | 'down') => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total, onMove }) => {
    const galleryItems = project.images.map(url => ({
        original: url,
        thumbnail: url,
    }));

    const [openDropdown, setOpenDropdown] = useState(false);
    const { isAdmin, openProjectEditor } = useAdmin();

    const handleDelete = async () => {
        if (!window.confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
        try {
            await deleteProject(project.id);
        } catch (e) {
            console.error(e);
        }
    };

    const renderMainImage = (item: ReactImageGalleryItem) => (
        <a target="_blank" rel="noopener noreferrer" href={project.link}>
            <img
                src={item.original}
                alt={`${project.title} screenshot`}
                className='aspect-[1.95]'
                loading="lazy"
                decoding="async"
            />
        </a>
    );

    return (
        <div className="relative bg-neutral-200 rounded-md shadow-md hover:shadow-xl transition duration-300 overflow-hidden border flex flex-col">
            {isAdmin && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                    <button
                        onClick={() => onMove('up')}
                        disabled={index === 0}
                        className="flex items-center justify-center bg-white text-neutral-700 border border-neutral-200 rounded-full w-8 h-8 shadow hover:bg-neutral-50 transition disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Move up"
                        title="Move up"
                    >
                        <FaArrowUp size={12} />
                    </button>
                    <button
                        onClick={() => onMove('down')}
                        disabled={index === total - 1}
                        className="flex items-center justify-center bg-white text-neutral-700 border border-neutral-200 rounded-full w-8 h-8 shadow hover:bg-neutral-50 transition disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Move down"
                        title="Move down"
                    >
                        <FaArrowDown size={12} />
                    </button>
                    <button
                        onClick={() => openProjectEditor(project)}
                        className="flex items-center gap-1.5 bg-white text-neutral-700 border border-neutral-200 rounded-full px-3 py-1.5 text-xs font-medium shadow hover:bg-neutral-50 transition"
                    >
                        <FaEdit /> Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex items-center justify-center bg-white text-red-600 border border-neutral-200 rounded-full w-8 h-8 shadow hover:bg-red-50 transition"
                        aria-label="Delete"
                        title="Delete"
                    >
                        <FaTrash size={13} />
                    </button>
                </div>
            )}
            <Fade delay={30}>
                <ImageGallery
                    items={galleryItems}
                    showThumbnails={true}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    lazyLoad={true}
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
                    <span key={index} className={`border border-neutral-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${openDropdown ? `inline-block` : `hidden`} lg:inline-block `}>{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;