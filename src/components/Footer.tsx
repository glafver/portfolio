import React from 'react';
import { useSocialLinks } from '../helpers/socials';

const Footer: React.FC = () => {
    const socialLinks = useSocialLinks();
    const year = new Date().getFullYear();

    const linkClass = 'text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent transition';

    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-6 lg:px-8 pt-16 pb-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div
                    className="font-display uppercase leading-none tracking-tight text-neutral-200 dark:text-neutral-800 select-none text-[15vw] lg:text-[11rem] text-center"
                    aria-hidden="true"
                >
                    Glafira
                </div>

                <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <img
                            src="/assets/GV_logo_dark.webp"
                            alt="Glafira Veretennikova logo"
                            className="h-10 w-auto dark:invert"
                        />
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            Glafira Veretennikova · {year}
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-6">
                            <a href="#projects" className={linkClass}>Projects</a>
                            <a href="#about" className={linkClass}>About</a>
                            <a href="#contact" className={linkClass}>Contact</a>
                        </div>
                        <div className="flex items-center gap-5">
                            {socialLinks.map(({ name, url, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="text-neutral-600 dark:text-neutral-300 hover:text-accent transition"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
