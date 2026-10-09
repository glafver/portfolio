import React from 'react';
import Reveal from './Reveal';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const AboutSection: React.FC = () => {
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <section id="about" className="relative overflow-hidden px-6 lg:px-8 pt-20 lg:pt-24 pb-12 lg:pb-14">
            {isAdmin && <EditButton onClick={() => openContentEditor('about')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <Reveal className="lg:w-2/5 w-full max-w-sm shrink-0">
                    <div className="relative">
                        <div className="absolute -inset-12 rounded-full bg-accent/35 dark:bg-accent/25 blur-3xl" aria-hidden="true" />
                        <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-t-[3rem] rounded-b-3xl border border-accent/30 dark:border-accent-light/30" aria-hidden="true" />
                        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[3rem] rounded-b-3xl border border-accent/50 dark:border-accent/40" aria-hidden="true" />
                        <img
                            src="/assets/about_img.webp"
                            alt="Glafira Veretennikova"
                            className="relative rounded-t-[3rem] rounded-b-3xl object-cover object-top aspect-[3/4] w-full shadow-xl"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </Reveal>

                <Reveal className="lg:w-3/5">
                    <div>
                        <h2 className="font-display uppercase text-3xl lg:text-5xl leading-[0.95] tracking-tight text-neutral-900 dark:text-white mb-8">
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
                </Reveal>
            </div>
        </section>
    );
};

export default AboutSection;
