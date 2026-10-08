import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useModal } from '../ModalContext';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const Hero: React.FC = () => {
    const { handleOpen } = useModal();
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <section className="relative bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
            {isAdmin && <EditButton onClick={() => openContentEditor('hero')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <Fade direction="up" triggerOnce duration={600} className="lg:w-1/2 text-center lg:text-left">
                    <p className="font-display text-accent dark:text-accent-light text-sm lg:text-base uppercase tracking-[0.2em] mb-5">
                        {content['hero.role']}
                    </p>
                    <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-neutral-900 dark:text-white">
                        Hey, I&apos;m{' '}
                        <span className="text-accent dark:text-accent-light">{content['hero.name']}</span>
                    </h1>
                    <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0">
                        {content['hero.subtitle']}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                        <button
                            onClick={() => { handleOpen(); }}
                            className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition"
                        >
                            Contact me
                        </button>
                        <a
                            href="#projects"
                            className="border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold px-6 py-3 rounded-full hover:border-accent hover:text-accent dark:hover:text-accent-light transition"
                        >
                            View projects
                        </a>
                    </div>
                </Fade>

                <Fade direction="up" delay={150} triggerOnce duration={600} className="lg:w-1/2">
                    <div className="relative max-w-sm mx-auto">
                        <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/20 dark:bg-accent/15 blur-3xl" aria-hidden="true" />
                        <img
                            src="/assets/hero_img.webp"
                            alt="Glafira Veretennikova, fullstack developer"
                            className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
                        />
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Hero;
