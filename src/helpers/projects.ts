import project_1_1 from '../assets/project_1_1.png';
import project_1_2 from '../assets/project_1_2.png';
import project_1_3 from '../assets/project_1_3.png';
// import project_1_4 from '../assets/project_1_4.png';
// import project_1_5 from '../assets/project_1_5.png';

import project_2_1 from '../assets/project_2_1.png';
import project_2_2 from '../assets/project_2_2.png';
// import project_2_3 from '../assets/project_2_3.png';
// import project_2_4 from '../assets/project_2_4.png';
// import project_2_5 from '../assets/project_2_5.png';

import project_3_1 from '../assets/project_3_1.png';
import project_3_2 from '../assets/project_3_2.png';
import project_3_3 from '../assets/project_3_3.png';
import project_3_4 from '../assets/project_3_4.png';
// import project_3_5 from '../assets/project_3_5.png';

import project_4_1 from '../assets/project_4_1.png';
import project_4_2 from '../assets/project_4_2.png';
import project_4_3 from '../assets/project_4_3.png';
// import project_4_4 from '../assets/project_4_4.png';
// import project_4_5 from '../assets/project_4_5.png';

import project_5_1 from '../assets/project_5_1.png';
import project_5_2 from '../assets/project_5_2.png';
import project_5_3 from '../assets/project_5_3.png';
import project_5_4 from '../assets/project_5_4.png';
// import project_5_5 from '../assets/project_5_5.png';

import project_6_1 from '../assets/project_6_1.png';
import project_6_2 from '../assets/project_6_2.png';
import project_6_3 from '../assets/project_6_3.png';
// import project_6_4 from '../assets/project_6_4.png';
// import project_6_5 from '../assets/project_6_5.png';

import project_7_1 from '../assets/project_7_1.png';
import project_7_2 from '../assets/project_7_2.png';
import project_7_3 from '../assets/project_7_3.png';
import project_7_4 from '../assets/project_7_4.png';
// import project_7_5 from '../assets/project_7_5.png';

// import project_8_1 from '../assets/project_8_1.png';
// import project_8_2 from '../assets/project_8_2.png';
// import project_8_3 from '../assets/project_8_3.png';
// import project_8_4 from '../assets/project_8_4.png';
// import project_8_5 from '../assets/project_8_5.png';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrls: string[];
    tech: string[];
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Videomaker',
        description: 'Videomaker app allows users to create video slideshows using uploaded photos. Users can customize slide order, duration, transitions, and add soundtracks. They can save, share, edit settings, or create new videos.',
        imageUrls: [project_1_1, project_1_2, project_1_3],
        tech: ['JS', 'HTML', 'CSS', 'Node.js', 'Express.js', 'ffmpeg', 'ImageMagick', 'Bootstrap', 'Firebase', 'SASS', 'GoogleCloudRun', 'Docker', 'react-router-dom'],
        link: 'https://videomaker.netlify.app/'
    },
    {
        id: 2,
        title: 'Photographer portfolio',
        description: 'Web project featuring a real estate photographer`s portfolio. Showcases captivating property visuals, offers easy navigation, and provides contact details for collaborations.',
        imageUrls: [project_2_1, project_2_2],
        tech: ['JS', 'HTML', 'CSS'],
        link: 'https://glafiraphoto.netlify.app/'
    },
    {
        id: 3,
        title: 'Re-Yacht',
        description: `
        A classic battleship game in real time for two players. 
        If you want to try the game alone, then open two tabs and log in as two players.`,
        imageUrls: [project_3_1, project_3_2, project_3_3, project_3_4],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Socket.io', 'Node.js', 'Bootstrap', 'SASS', 'react-router-dom'],
        link: 'https://re-yacht.netlify.app/'
    },
    {
        id: 4,
        title: 'Tasty Malmö',
        description: `
        An app for discovering restaurants in Malmö on a map and in a list. 
        Users can click markers or listings to view restaurant info, access detailed pages, see their location, find distances to restaurants, get route directions, and submit suggestions to admins.`,
        imageUrls: [project_4_1, project_4_2, project_4_3],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Bootstrap', 'ReactQuery', 'Firebase', 'SASS', 'GoogleMapsAPI'],
        link: 'https://tasty-malmo.netlify.app/'
    },
    {
        id: 5,
        title: 'Kill the virus',
        description: `
        A game for two players to compete who can kill the malicious virus faster.
        If you want to try the game alone, then open two tabs and log in as two players.`,
        imageUrls: [project_5_1, project_5_2, project_5_3, project_5_4],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Socket.io', 'Node.js'],
        link: 'https://kill-the-virus-wvkqdgwfqa-lm.a.run.app/'
    },
    {
        id: 6,
        title: 'Almi - Uppstartslån',
        description: `
        A web page for Almi's newest product, Uppstartslån. This one-page website serves as a comprehensive guide to introduce customers to the incredible features and benefits of Uppstartslån.`,
        imageUrls: [project_6_1, project_6_2, project_6_3],
        tech: ['JS', 'HTML', 'CSS'],
        link: 'https://almi.netlify.app/'
    },
    {
        id: 7,
        title: 'BonbonBoutique',
        description: `
        A delightful candy shop website designed to sweeten your day!`,
        imageUrls: [project_7_1, project_7_2, project_7_3, project_7_4],
        tech: ['JS', 'HTML', 'CSS', 'React', 'TypeScript', 'SASS', 'Bootstrap', 'react-router-dom', 'react-query', 'Vite'],
        link: 'https://bonbonboutique.netlify.app/'
    }
];
export default projects;
