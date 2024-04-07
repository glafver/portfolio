import React from 'react';
import { Fade } from 'react-awesome-reveal';

const AboutSection: React.FC = () => {
    return (
        <div id='about' className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-8 lg:px-12 py-16 lg:py-36">
            <div className="relative flex justify-center lg:justify-normal lg:w-1/3 mb-10 lg:mb-0 z-10">
                <Fade >
                    <img
                        src='https://storage.googleapis.com/glafver_portfolio/about_img.jpg'
                        alt="Profile"
                        className="rounded z-10 object-cover object-top aspect-square lg:aspect-auto lg:w-full"
                    />
                </Fade>
            </div>
            <div className="lg:w-2/3 lg:pl-36 z-10">
                <div className="text-center lg:text-right">
                    <h2 className="text-3xl lg:text-5xl font-bold text-neutral-800 pb-10 lg:pb-16">About
                        <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                            Me
                        </span>
                    </h2>
                </div>
                <p className='mb-5'>
                    I am proficient in React, TypeScript, and Material UI but my skill set extends also to server-side technologies, including Node.js and Express.js. With precise attention to detail and efficient logical solutions, I produce clean, understandable, and well-optimized code.
                </p>
                <p className='mb-5'>
                    In addition to my work as a Frontend Developer, I also engage in freelance real estate photography. This experience has broadened my creativity and refined my sense of aesthetics.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;