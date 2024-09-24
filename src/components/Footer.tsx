import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-200 px-8 lg:px-24 pb-12">
            <div className="max-w-5xl mx-auto lg:grid grid-cols-2 gap-4 flex flex-col px-4 align-end justify-between">
                <div className="flex flex-col items-center text-center w-full lg:w-2/5">
                    <img className="w-20 lg:w-32 mb-6" src="https://storage.googleapis.com/glafver_portfolio/GV_logo_dark.png" alt="" />
                    <span className="font-semibold pl-4">Glafira Veretennikova</span>
                    <span className="font-semibold pl-4">{new Date().getFullYear()}</span>
                </div>
                <div className='flex flex-col justify-end'>
                    <div className="flex items-center justify-center flex-wrap lg:justify-end mb-4">
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
                            Contacts
                        </a>
                        <a
                            href="#"
                            className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 hover:text-white"
                        >
                            Home
                        </a>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end space-x-6">
                        <a href="https://www.linkedin.com/in/glafver/"><FaLinkedin className='w-6 h-6' /></a>
                        <a href="https://www.facebook.com/glafver"><FaFacebook className='w-6 h-6' /></a>
                        <a href="https://github.com/glafver"><FaGithub className='w-6 h-6' /></a>
                        <a href="https://www.instagram.com/glafver/"><FaInstagram className='w-6 h-6' /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;