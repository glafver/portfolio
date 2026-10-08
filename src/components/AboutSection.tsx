import React from 'react';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const AboutSection: React.FC = () => {
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <section id="about" className="relative bg-neutral-50 dark:bg-neutral-900 px-6 lg:px-8 py-20 lg:py-28">
            {isAdmin && <EditButton onClick={() => openContentEditor('about')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                <div className="lg:w-2/5 w-full max-w-sm shrink-0">
                    <img
                        src="/assets/about_img.webp"
                        alt="Glafira Veretennikova"
                        className="rounded-3xl object-cover aspect-square w-full shadow-lg"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="lg:w-3/5">
                    <span className="font-display text-accent dark:text-accent-light text-sm uppercase tracking-[0.2em]">03</span>
                    <h2 className="font-display uppercase text-3xl lg:text-5xl leading-[0.95] tracking-tight text-neutral-900 dark:text-white mt-2 mb-8">
                        About <span className="text-accent dark:text-accent-light">Me</span>
                    </h2>
                    <div className="space-y-5 text-lg text-neutral-600 dark:text-neutral-400">
                        <p>{content['about.p1']}</p>
                        <p>{content['about.p2']}</p>
                        <p>{content['about.p3']}</p>
                        <p>{content['about.p4']}</p>
                        <p>{content['about.p5']}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
