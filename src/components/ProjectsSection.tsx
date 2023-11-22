import React from 'react';
import ProjectCard from './ProjectCard';
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import project_3 from '../assets/project_3.png';
import project_4 from '../assets/project_4.png';
import project_5 from '../assets/project_5.png';
import project_6 from '../assets/project_6.png';
import project_7 from '../assets/project_7.png';
import project_8 from '../assets/project_8.png';
import project_9 from '../assets/project_9.png';
import project_10 from '../assets/project_10.png';

const ProjectsSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'Videomaker',
            description: 'Videomaker app allows users to create video slideshows using uploaded photos. Users can customize slide order, duration, transitions, and add soundtracks. They can save, share, edit settings, or create new videos.',
            imageUrls: [project_1, project_2, project_3],
            tech: ['JS', 'HTML', 'CSS', 'Node.js', 'Express.js', 'ffmpeg', 'ImageMagick', 'Bootstrap', 'Firebase', 'SASS', 'GoogleCloudRun', 'Docker', 'react-router-dom'],
            link: 'https://videomaker.netlify.app/',
            code: 'https://github.com/glafver/videomaker_FE'
        },
        {
            id: 2,
            title: 'Photographer portfolio',
            description: 'Web project featuring a real estate photographer`s portfolio. Showcases captivating property visuals, offers easy navigation, and provides contact details for collaborations.',
            imageUrls: [project_4, project_5],
            tech: ['JS', 'HTML', 'CSS'],
            link: 'https://glafiraphoto.netlify.app/',
            code: 'https://github.com/glafver/photo_portfolio'
        },
        {
            id: 3,
            title: 'Re-Yacht',
            description: 'A classic battleship game in real time for two players. Overall, this real-time Battleship game project offers an exciting multiplayer experience, where players can enjoy strategic gameplay, test their tactical skills, and compete against friends or opponents in a virtual naval battle.',
            imageUrls: [project_6, project_7],
            tech: ['JS', 'HTML', 'CSS', 'React', 'Socket.io', 'Node.js', 'Bootstrap', 'SASS', 'react-router-dom'],
            link: 'https://re-yacht.netlify.app/',
            code: 'https://github.com/glafver/reYacht'
        },
        {
            id: 4,
            title: 'Tasty Malmö',
            description: 'An app for discovering restaurants in Malmö on a map and in a list. Users can click markers or listings to view restaurant info, access detailed pages, see their location, find distances to restaurants, get route directions, and submit suggestions to admins.',
            imageUrls: [project_8, project_9, project_10],
            tech: ['JS', 'HTML', 'CSS', 'React', 'Bootstrap', 'ReactQuery', 'Firebase', 'SASS', 'GoogleMapsAPI'],
            link: 'https://tasty-malmo.netlify.app/',
            code: 'https://github.com/glafver/restaurants_map_app'
        },
    ];

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
                            <p className="text-lg lg:text-xl text-justify">
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
