import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-neutral-200 py-8 lg:py-12 px-8 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center lg:items-end">
                <div className="flex flex-col items-center flex-shrink-0 lg:mr-36">
                    <img className="w-20 lg:w-32" src="https://storage.googleapis.com/glafver_portfolio/GV_logo_dark.png" alt="" />
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 "
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="fill-current w-6"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} text-lg lg:text-xl text-end w-full lg:items-center lg:w-auto`}>
                    <div>
                        <a
                            href="#projects"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 transition duration-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 transition duration-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 transition duration-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Contacts
                        </a>
                    </div>
                </div>
                <div className="hidden lg:block ml-auto">
                    <Fade>
                        <button
                            className="uppercase border border-neutral-800 text-neutral-800 font-bold py-2 px-4 rounded-full hover:bg-neutral-800 hover:text-white transition duration-300"
                        >
                            <a
                                href={"https://storage.googleapis.com/glafver_portfolio/GlafiraVeretennikova_CV.docx"}
                                download="Glafira_Veretennikova_Frontend_Dev_CV.pdf"
                            >
                                DOWNLOAD MY CV
                            </a>
                        </button>
                    </Fade>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
