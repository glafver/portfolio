import React from 'react';
import { useModal } from '../ModalContext';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const Hero: React.FC = () => {
    const { handleOpen } = useModal();
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <section className="relative bg-neutral-50 dark:bg-neutral-900">
            {isAdmin && <EditButton onClick={() => openContentEditor('hero')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-violet-600 dark:text-violet-400 font-semibold mb-4 text-sm tracking-wide uppercase">
                        Fullstack Developer
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
                        Hey, I&apos;m{' '}
                        <span className="text-violet-600 dark:text-violet-400">{content['hero.name']}</span>
                    </h1>
                    <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0">
                        {content['hero.subtitle']}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                        <button
                            onClick={() => { handleOpen(); }}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-full transition"
                        >
                            Contact me
                        </button>
                        <a
                            href="#projects"
                            className="border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold px-6 py-3 rounded-full hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 transition"
                        >
                            View projects
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <div className="relative max-w-sm mx-auto">
                        <img
                            src="/assets/hero_img.webp"
                            alt="Glafira Veretennikova, fullstack developer"
                            className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/5]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
