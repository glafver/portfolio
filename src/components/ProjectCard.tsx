import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaChevronDown, FaChevronUp, FaEdit, FaTrash, FaArrowUp, FaArrowDown, FaEye, FaEyeSlash } from 'react-icons/fa';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { Project } from '../types';
import { useAdmin } from '../admin/AdminContext';
import { deleteProject, setProjectVisibility } from '../lib/adminApi';

interface ProjectCardProps {
    project: Project;
    index: number;
    total: number;
    onMove: (direction: 'up' | 'down') => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total, onMove }) => {
    const galleryItems = project.images.map((url) => ({
        original: url,
        thumbnail: url,
    }));

    const [openDropdown, setOpenDropdown] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { isAdmin, openProjectEditor } = useAdmin();

    const hidden = project.visible === false;

    const handleDelete = async () => {
        if (!window.confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
        try {
            await deleteProject(project.id);
        } catch (e) {
            console.error(e);
        }
    };

    const handleToggleVisibility = async () => {
        try {
            await setProjectVisibility(project.id, project.visible === false);
        } catch (e) {
            console.error(e);
        }
    };

    const renderMainImage = (item: ReactImageGalleryItem) => (
        <a target="_blank" rel="noopener noreferrer" href={project.link}>
            <img
                src={item.original}
                alt={`${project.title} screenshot`}
                className="aspect-[16/9] object-cover w-full"
                loading="lazy"
                decoding="async"
            />
        </a>
    );

    const iconBtn =
        'flex items-center justify-center bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 rounded-full w-8 h-8 shadow hover:bg-neutral-50 dark:hover:bg-neutral-800 transition disabled:opacity-30 disabled:cursor-not-allowed';

    return (
        <div
            className={`group relative h-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col ${hidden ? 'opacity-60' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isAdmin && hidden && (
                <span className="absolute top-3 left-3 z-20 bg-neutral-900 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    Hidden
                </span>
            )}

            {isAdmin && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                    <button onClick={() => onMove('up')} disabled={index === 0} className={iconBtn} aria-label="Move up" title="Move up">
                        <FaArrowUp size={12} />
                    </button>
                    <button onClick={() => onMove('down')} disabled={index === total - 1} className={iconBtn} aria-label="Move down" title="Move down">
                        <FaArrowDown size={12} />
                    </button>
                    <button onClick={handleToggleVisibility} className={iconBtn} aria-label={hidden ? 'Show project' : 'Hide project'} title={hidden ? 'Show project' : 'Hide project'}>
                        {hidden ? <FaEye size={12} /> : <FaEyeSlash size={12} />}
                    </button>
                    <button
                        onClick={() => openProjectEditor(project)}
                        className="flex items-center gap-1.5 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 rounded-full px-3 py-1.5 text-xs font-medium shadow hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
                    >
                        <FaEdit /> Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex items-center justify-center bg-white dark:bg-neutral-900 text-red-600 border border-neutral-200 dark:border-neutral-600 rounded-full w-8 h-8 shadow hover:bg-red-50 dark:hover:bg-red-900/30 transition"
                        aria-label="Delete"
                        title="Delete"
                    >
                        <FaTrash size={13} />
                    </button>
                </div>
            )}

            <Fade delay={30}>
                <ImageGallery
                    key={isHovered ? 'playing' : 'idle'}
                    items={galleryItems}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showNav={false}
                    autoPlay={isHovered}
                    slideInterval={1500}
                    lazyLoad={true}
                    renderItem={renderMainImage}
                />
            </Fade>

            <div className="px-6 pt-5 flex flex-col flex-1">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="font-display uppercase text-xl leading-tight text-neutral-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-light transition mb-3"
                >
                    {project.title}
                    <span className="block h-0.5 w-0 bg-accent dark:bg-accent-light group-hover:w-full transition-all duration-300 mt-1.5" />
                </a>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-3">
                    {project.description}
                </p>
                {project.important && (
                    <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                        Important: {project.important}
                    </p>
                )}
            </div>

            <div
                onClick={() => setOpenDropdown(!openDropdown)}
                className="lg:hidden h-7 w-7 mr-4 ml-auto cursor-pointer rounded-full p-1 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
            >
                {openDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <div className="px-6 mt-auto mb-4">
                {project.tech.map((tech, index) => (
                    <span
                        key={index}
                        className={`bg-neutral-100 dark:bg-neutral-700/60 rounded-full px-2.5 py-1 text-xs text-neutral-600 dark:text-neutral-300 mr-2 mb-2 ${openDropdown ? 'inline-block' : 'hidden'} lg:inline-block`}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
