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
            'https://storage.googleapis.com/glafver_portfolio/photo_portfolio_1.png',
            'https://storage.googleapis.com/glafver_portfolio/photo_portfolio_2.png',
            'https://storage.googleapis.com/glafver_portfolio/photo_portfolio_3.png',
            'https://storage.googleapis.com/glafver_portfolio/photo_portfolio_4.png',
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'TypeScript', 'Next', 'Tailwind'],
        link: 'https://photo.glafira.se/'
    },
    {
        id: 2,
        title: 'WashOverflow',
        description: 'A car wash booking system that enables users to schedule car wash appointments. The system provides authentication, booking management, and an administrative interface to oversee operations.',
        imageUrls: [
            'https://storage.googleapis.com/glafver_portfolio/washoverflow_1.jpg',
            'https://storage.googleapis.com/glafver_portfolio/washoverflow_2.jpg',
            'https://storage.googleapis.com/glafver_portfolio/washoverflow_3.jpg'
        ],
        tech: ['Razor Pages', 'Entity Framework', 'ASP.NET Identity', 'Azure SQL', 'C#', 'Bootstrap', 'Azure App Service'],
        link: 'https://washoverflow.azurewebsites.net/'
    },
    {
        id: 3,
        title: 'Sweet Shop',
        description: `
        A responsive website for a candy store.
        Users can explore the product catalog, add products to the cart, and place orders. After placing an order, users receive an confirmation with the order number.
        `,
        imageUrls: [
            'https://storage.googleapis.com/glafver_portfolio/sweet_1.png',
            'https://storage.googleapis.com/glafver_portfolio/sweet_2.png',
            'https://storage.googleapis.com/glafver_portfolio/sweet_3.png',
            'https://storage.googleapis.com/glafver_portfolio/sweet_4.png'
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'TypeScript', 'SASS', 'Bootstrap', 'react-router-dom', 'react-query', 'Vite'],
        link: 'https://sweet-shop-glafver.netlify.app/'
    },
    {
        id: 4,
        title: 'Videomaker',
        description: `Videomaker app allows users to create video slideshows using uploaded photos. 
        Users can customize slide order, duration, transitions, and add soundtracks. They can save, share, edit settings, or create new videos.`,
        imageUrls: [
            'https://storage.googleapis.com/glafver_portfolio/videomaker_1.jpg',
            'https://storage.googleapis.com/glafver_portfolio/videomaker_2.jpg',
            'https://storage.googleapis.com/glafver_portfolio/videomaker_3.jpg',
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'ffmpeg', 'ImageMagick', 'Bootstrap', 'Firebase', 'SASS', 'Docker', 'react-router-dom'],
        link: 'https://videomaker.netlify.app/'
    },
    {
        id: 5,
        title: 'Tasty Malmö',
        description: `
        Multi-Tier Access app for discovering restaurants in Malmö on a map and in a list. 
        Users can explore the map with restaurnts, access detailed pages, see their location, find distances to restaurants, get route directions, and submit suggestions to admins.`,
        imageUrls: [
            'https://storage.googleapis.com/glafver_portfolio/tasty_1.png',
            'https://storage.googleapis.com/glafver_portfolio/tasty_2.png',
            'https://storage.googleapis.com/glafver_portfolio/tasty_3.png',
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Bootstrap', 'ReactQuery', 'Firebase', 'SASS', 'GoogleMapsAPI'],
        link: 'https://tasty-malmo.netlify.app/'
    },
    {
        id: 6,
        title: 'Almi - Uppstartslån',
        description: `
        A web page for Almi's newest product, Uppstartslån. This one-page website serves as a guide to introduce customers to the features and benefits of Uppstartslån.`,
        imageUrls: [
            'https://storage.googleapis.com/glafver_portfolio/almi_1.jpg',
            'https://storage.googleapis.com/glafver_portfolio/almi_2.jpg',
            'https://storage.googleapis.com/glafver_portfolio/almi_3.jpg',
        ],
        tech: ['JS', 'HTML', 'CSS'],
        link: 'https://almi.netlify.app/'
    },
    {
        id: 7,
        title: 'Re-Yacht',
        description: `
        A classic battleship game in real time for two players. `,
        important: ` 
        If you want to try the game alone, then open two tabs and log in as two players.`,
        imageUrls: [
            'https://storage.googleapis.com/glafver_portfolio/reyacht_1.jpg',
            'https://storage.googleapis.com/glafver_portfolio/reyacht_2.jpg',
            'https://storage.googleapis.com/glafver_portfolio/reyacht_3.jpg',
            'https://storage.googleapis.com/glafver_portfolio/reyacht_4.jpg'
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Socket.io', 'Node.js', 'Bootstrap', 'SASS', 'react-router-dom'],
        link: 'https://re-yacht.netlify.app/'
    },
    {
        id: 8,
        title: 'Kill the virus',
        description: `
        A game for two players to compete who can kill the malicious virus faster.`,
        important: ` 
        If you want to try the game alone, then open two tabs and log in as two players.`,
        imageUrls: [
            'https://storage.googleapis.com/glafver_portfolio/virus_1.jpg',
            'https://storage.googleapis.com/glafver_portfolio/virus_2.jpg',
            'https://storage.googleapis.com/glafver_portfolio/virus_3.jpg',
            'https://storage.googleapis.com/glafver_portfolio/virus_4.jpg'
        ],
        tech: ['JS', 'HTML', 'CSS', 'React', 'Socket.io', 'Node.js'],
        link: 'https://kill-the-virus-ksa4rs3q2a-lm.a.run.app'
    },


];

export type { Project };
export { projects };
