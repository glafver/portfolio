import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';

const logos: string[] = [

    '/assets/tech_5.png',
    '/assets/tech_12.png',
    '/assets/tech_13.png',
    '/assets/tech_4.png',
    '/assets/tech_6.png',
    '/assets/tech_7.png',
    '/assets/tech_8.png',
    '/assets/tech_10.png',
    '/assets/tech_11.png'
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
                                <img src={logo} alt={`Logo ${index}`} className="h-12 lg:h-20" key={index} />
                            ))}
                        </Fade>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Technologies;
