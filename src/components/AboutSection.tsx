import React from 'react';
import about_img from '../assets/about_img.jpg';
import abstr_1 from "../assets/abstr_1.png";
import abstr_2 from "../assets/abstr_2.png";

const AboutSection: React.FC = () => {
    return (
        <div id='about' className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-12 pb-12 lg:py-36 my-24">
            <div className="relative flex justify-center lg:justify-normal lg:w-1/3 mb-16 lg:mb-0 z-10">
                <img
                    src={about_img}
                    alt="Profile"
                    className="rounded z-10 object-cover object-top aspect-square w-3/4 lg:aspect-auto lg:w-full"
                />
            </div>
            <div className="lg:w-2/3 lg:pl-36 z-10">
                <div className="text-center lg:text-right">
                    <h2 className="text-6xl font-bold text-neutral-800 pb-16">About
                        <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                            Me
                        </span>
                    </h2>
                </div>
                <p className="text-xl text-justify font-forum">
                    I am deeply passionate about my work and deliver high-quality results in every task I undertake. I am proficient in React, TypeScript, and Material UI but my skill set extends also to server-side technologies, including Node.js and Express.js. With precise attention to detail and efficient logical solutions, I produce clean, understandable, and well-optimized code.

                    In addition to my work as a Frontend Developer, I also engage in freelance real estate photography. This experience has broadened my creativity and refined my sense of aesthetics.

                    I'm open to new opportunities and collaborations, so if you're looking for a dedicated frontend developer who can bring your web projects to life, feel free to reach out. Let's connect and explore the possibilities of working together.
                </p>
            </div>
            <img
                src={abstr_1}
                alt=""
                className="absolute h-auto w-1/2 z-0 top-48 left-72 opacity-20 hidden lg:block"
            />
            <img
                src={abstr_2}
                alt=""
                className="absolute rotate-90 h-auto w-1/2 z-0 top-4 left-24 opacity-20 hidden lg:block"
            />
        </div>
    );
};

export default AboutSection;
