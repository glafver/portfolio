import React, { useState } from 'react';
import CV from '../assets/Glafira_Veretennikova_FrontEndDeveloper_CV.pdf';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-neutral-200 p-5 px-8 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center lg:items-end">
                <div className="flex flex-col items-center flex-shrink-0 lg:mr-36">
                    <span className="font-semibold text-8xl font-forum">GV</span>
                    <span className="font-semibold pl-4 hidden lg:block">Glafira Veretennikova</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 "
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="fill-current w-8"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} text-xl text-end w-full mt-4 lg:mt-0 lg:items-center lg:w-auto`}>
                    <div>
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
                    </div>
                </div>
                <div className="hidden lg:block ml-auto">
                    <button
                        className="uppercase border border-neutral-800 text-neutral-800 font-bold py-2 px-4 rounded-full hover:bg-neutral-800 hover:text-white transition duration-300"
                    >
                        <a
                            href={CV}
                            download="Glafira_Veretennikova_Frontend_Dev_CV.pdf"
                        >
                            DOWNLOAD MY CV
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
