import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const AboutSection: React.FC = () => {
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <section id="about" className="relative px-6 lg:px-8 py-20 lg:py-28">
            {isAdmin && <EditButton onClick={() => openContentEditor('about')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                <Fade direction="left" triggerOnce duration={600} className="lg:w-2/5 w-full max-w-sm shrink-0">
                    <div className="relative">
                        <div className="absolute -inset-6 rounded-full bg-accent/20 dark:bg-accent/15 blur-3xl" aria-hidden="true" />
                        <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-t-[3rem] rounded-b-3xl border border-accent/30 dark:border-accent-light/30" aria-hidden="true" />
                        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[3rem] rounded-b-3xl border border-accent/50 dark:border-accent/40" aria-hidden="true" />
                        <img
                            src="/assets/about_img.webp"
                            alt="Glafira Veretennikova"
                            className="relative rounded-t-[3rem] rounded-b-3xl object-cover aspect-square w-full shadow-xl"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </Fade>

                <Fade direction="right" triggerOnce duration={600} className="lg:w-3/5">
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
                </Fade>
            </div>
        </section>
    );
};

export default AboutSection;
