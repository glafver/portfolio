interface Project {
    id: number;
    title: string;
    description: string;
    imageUrls: string[];
    tech: string[];
    link: string;
    important?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Photographer portfolio',
        description: 'Web project featuring a real estate photographer`s portfolio. Showcases captivating property visuals, offers easy navigation, and provides contact details for collaborations.',
        imageUrls: [
            '/assets/photo_portfolio_1.png',
            '/assets/photo_portfolio_2.png',
            '/assets/photo_portfolio_3.png',
            '/assets/photo_portfolio_4.png',
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'TypeScript', 'Next', 'Tailwind'],
        link: 'https://photo.glafira.se/'
    },
    {
        id: 2,
        title: 'Drone Delight',
        description: 'Drone Delight is a modern food delivery app where users can create an account, log in, browse a wide selection of meals, add products to their cart, save favorites, and securely complete payments.',
        imageUrls: [
            '/assets/drone-delight_1.png',
            '/assets/drone-delight_3.png',
            '/assets/drone-delight_4.png',
            '/assets/drone-delight_6.png'
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Node.js', 'Tailwind', 'react-router-dom', 'MongoDB'],
        link: 'https://drone-delight.netlify.app/'
    },
    {
        id: 3,
        title: 'SKILLUP',
        description: 'SKILLUP is a web app for interactive learning where users can enroll in courses, track progress, complete lessons, and earn digital certificates through a diverse course library and personal dashboards.',
        imageUrls: [
            '/assets/skillup_1.png',
            '/assets/skillup_2.png',
            '/assets/skillup_3.png',
            '/assets/skillup_4.png',
        ],
        tech: ['Entity Framework', 'ASP.NET Identity', 'MongoDB', 'C#', 'Tailwind', 'React', 'TypeScript'],
        link: 'https://skillup-sysm8.netlify.app/'
    },
    {
        id: 4,
        title: 'WashOverflow',
        description: 'A car wash booking system that enables users to schedule car wash appointments. The system provides authentication, booking management, and an administrative interface to oversee operations.',
        imageUrls: [
            '/assets/washoverflow_1.png',
            '/assets/washoverflow_2.png',
            '/assets/washoverflow_3.png'
        ],
        tech: ['Razor Pages', 'Entity Framework', 'ASP.NET Identity', 'Azure SQL', 'C#', 'Bootstrap', 'Azure App Service'],
        link: 'https://washoverflow.azurewebsites.net/'
    },
    {
        id: 5,
        title: 'Sweet Shop',
        description: `
        A responsive website for a candy store.
        Users can explore the product catalog, add products to the cart, and place orders. After placing an order, users receive an confirmation with the order number.
        `,
        imageUrls: [
            '/assets/sweet_1.png',
            '/assets/sweet_2.png',
            '/assets/sweet_3.png',
            '/assets/sweet_4.png'
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'TypeScript', 'SASS', 'Bootstrap', 'react-router-dom', 'react-query', 'Vite'],
        link: 'https://sweet-shop-glafver.netlify.app/'
    },
    {
        id: 6,
        title: 'Videomaker',
        description: `Videomaker app allows users to create video slideshows using uploaded photos. 
        Users can customize slide order, duration, transitions, and add soundtracks. They can save, share, edit settings, or create new videos.`,
        imageUrls: [
            '/assets/videomaker_1.jpg',
            '/assets/videomaker_2.jpg',
            '/assets/videomaker_3.jpg',
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'ffmpeg', 'ImageMagick', 'Bootstrap', 'Firebase', 'SASS', 'Docker', 'react-router-dom'],
        link: 'https://videomaker.netlify.app/'
    },
    {
        id: 7,
        title: 'Tasty Malmö',
        description: `
        Multi-Tier Access app for discovering restaurants in Malmö on a map and in a list. 
        Users can explore the map with restaurnts, access detailed pages, see their location, find distances to restaurants, get route directions, and submit suggestions to admins.`,
        imageUrls: [
            '/assets/tasty_1.png',
            '/assets/tasty_2.png',
            '/assets/tasty_3.png',
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Bootstrap', 'ReactQuery', 'Firebase', 'SASS', 'GoogleMapsAPI'],
        link: 'https://tasty-malmo.netlify.app/'
    },
    {
        id: 8,
        title: 'Almi - Uppstartslån',
        description: `
        A web page for Almi's newest product, Uppstartslån. This one-page website serves as a guide to introduce customers to the features and benefits of Uppstartslån.`,
        imageUrls: [
            '/assets/almi_1.png',
            '/assets/almi_2.png',
            '/assets/almi_3.png',
        ],
        tech: ['JS', 'HTML', 'CSS'],
        link: 'https://almi.netlify.app/'
    },
    {
        id: 9,
        title: 'Re-Yacht',
        description: `
        A classic battleship game in real time for two players. `,
        important: ` 
        If you want to try the game alone, then open two tabs and log in as two players.`,
        imageUrls: [
            '/assets/reyacht_1.png',
            '/assets/reyacht_2.png',
            '/assets/reyacht_3.png',
            '/assets/reyacht_4.png'
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Socket.io', 'Node.js', 'Bootstrap', 'SASS', 'react-router-dom'],
        link: 'https://re-yacht.netlify.app/'
    },
    {
        id: 10,
        title: 'Kill the virus',
        description: `
        A game for two players to compete who can kill the malicious virus faster.`,
        important: ` 
        If you want to try the game alone, then open two tabs and log in as two players.`,
        imageUrls: [
            '/assets/virus_1.png',
            '/assets/virus_2.png',
            '/assets/virus_3.png',
            '/assets/virus_4.png'
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Socket.io', 'Node.js'],
        link: 'https://kill-the-virus-ksa4rs3q2a-lm.a.run.app'
    },


];

export type { Project };
export { projects };
