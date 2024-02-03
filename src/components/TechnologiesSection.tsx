import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';

const logos: string[] = [
    'https://storage.googleapis.com/glafver_portfolio/tech_4.png',
    'https://storage.googleapis.com/glafver_portfolio/tech_5.png',
    'https://storage.googleapis.com/glafver_portfolio/tech_6.png',
    'https://storage.googleapis.com/glafver_portfolio/tech_7.png',
    'https://storage.googleapis.com/glafver_portfolio/tech_8.png',
    'https://storage.googleapis.com/glafver_portfolio/tech_9.png',
    'https://storage.googleapis.com/glafver_portfolio/tech_10.png',
    'https://storage.googleapis.com/glafver_portfolio/tech_11.png'
];

const Technologies: React.FC = () => {
    return (
        <div className="bg-neutral-200 px-8 py-16 lg:px-12 lg:py-28 text-center">
            <Zoom >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-16 lg:mb-20">Technologies & Techniques I Use</h2>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Fade cascade duration={300}>
                            {logos.map((logo, index) => (

                                <img src={logo} alt={`Logo ${index}`} className="h-12 lg:h-20" />

                            ))}
                        </Fade>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Technologies;
