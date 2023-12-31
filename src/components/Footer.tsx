import React from 'react';
import social_1 from '../assets/social_1.png';
import social_2 from '../assets/social_2.png';
import social_3 from '../assets/social_3.png';
import social_4 from '../assets/social_4.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-200 px-12 lg:px-24 pb-12">
            <div className="max-w-5xl mx-auto lg:grid grid-cols-2 gap-4 flex flex-col px-4 align-end justify-between">
                <div className="flex flex-col items-center text-center w-full lg:w-2/5">
                    <span className="gv-color-changing-font font-semibold text-8xl font-forum">GV</span>
                    <span className="font-semibold pl-4">Glafira Veretennikova</span>
                    <span className="font-semibold pl-4">2023</span>
                </div>
                <div className='flex flex-col justify-end'>
                    <div className="flex items-center justify-between lg:justify-end mb-4">
                        <a
                            href="#projects"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 transition duration-300 hover:text-white"
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 transition duration-300 hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 transition duration-300 hover:text-white"
                        >
                            Contact
                        </a>
                        <a
                            href="#"
                            className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 hover:text-white"
                        >
                            Home
                        </a>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end space-x-6">
                        <a href="https://www.linkedin.com/in/glafver/"><img className='w-6' src={social_1} /></a>
                        <a href="https://www.facebook.com/glafver"><img className='w-6' src={social_2} /></a>
                        <a href="https://github.com/glafver"><img className='w-6' src={social_3} /></a>
                        <a href="https://www.instagram.com/glafver/"><img className='w-6' src={social_4} /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
