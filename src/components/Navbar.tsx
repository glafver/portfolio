import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSiteContent } from '../hooks/useSiteContent';
import { downloadFile } from '../lib/download';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const content = useSiteContent();

    const linkClass =
        'text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-accent dark:hover:text-accent-light transition';

    return (
        <nav className="sticky top-0 z-40 bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center">
                    <img
                        src="/assets/GV_logo_dark.webp"
                        alt="Glafira Veretennikova logo"
                        className="h-8 lg:h-9 w-auto dark:invert"
                    />
                </a>

                <div className="hidden lg:flex items-center gap-8">
                    <a href="#projects" className={linkClass}>Projects</a>
                    <a href="#about" className={linkClass}>About</a>
                    <a href="#experience" className={linkClass}>Experience</a>
                    <a href="#contact" className={linkClass}>Contact</a>
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <button
                        onClick={() => downloadFile(content['cv.url'], 'Glafira_Veretennikova_CV.pdf')}
                        className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded-full transition"
                    >
                        Download CV
                    </button>
                    <ThemeToggle />
                </div>

                <div className="lg:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
                    >
                        {isOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-6 py-4 space-y-1 text-right">
                    <a href="#projects" onClick={() => setIsOpen(false)} className={`block py-2 ${linkClass}`}>Projects</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className={`block py-2 ${linkClass}`}>About</a>
                    <a href="#experience" onClick={() => setIsOpen(false)} className={`block py-2 ${linkClass}`}>Experience</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className={`block py-2 ${linkClass}`}>Contact</a>
                    <button
                        onClick={() => {
                            downloadFile(content['cv.url'], 'Glafira_Veretennikova_CV.pdf');
                            setIsOpen(false);
                        }}
                        className={`block py-2 ${linkClass} w-full`}
                    >
                        Download CV
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
