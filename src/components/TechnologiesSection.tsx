import React from 'react';
import Reveal from './Reveal';
import { FaImage } from 'react-icons/fa';
import { useSiteContent } from '../hooks/useSiteContent';
import { useTechLogos } from '../hooks/useTechLogos';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const FALLBACK_LOGOS: string[] = [
    '/assets/tech_5.webp',
    '/assets/tech_12.webp',
    '/assets/tech_13.webp',
    '/assets/tech_4.webp',
    '/assets/tech_6.webp',
    '/assets/tech_7.webp',
    '/assets/tech_8.webp',
    '/assets/tech_10.webp',
    '/assets/tech_11.webp',
];

const Technologies: React.FC = () => {
    const content = useSiteContent();
    const dbLogos = useTechLogos();
    const { isAdmin, openContentEditor, openTechLogosEditor } = useAdmin();

    const logos = dbLogos.length > 0 ? dbLogos.map((l) => l.image_url) : FALLBACK_LOGOS;

    return (
        <section className="relative px-6 lg:px-8 py-12 lg:py-16 text-center">
            {isAdmin && (
                <>
                    <EditButton onClick={() => openContentEditor('technologies')} className="absolute top-4 right-4 z-20" />
                    <button
                        onClick={openTechLogosEditor}
                        className="absolute top-4 right-16 z-20 bg-white/90 text-neutral-700 border border-neutral-200 rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-white transition backdrop-blur"
                        aria-label="Manage logos"
                        title="Manage logos"
                    >
                        <FaImage size={14} />
                    </button>
                </>
            )}

            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <h2 className="font-display uppercase text-3xl lg:text-5xl leading-[0.95] tracking-tight text-neutral-900 dark:text-white">
                        {content['technologies.title']}
                    </h2>
                </Reveal>
                <div className="mt-8 flex justify-center flex-wrap gap-x-10 gap-y-8">
                    {logos.map((logo, index) => (
                        <Reveal key={index} delay={index * 40}>
                            <img
                                src={logo}
                                alt=""
                                className="h-8 lg:h-10 opacity-70 hover:opacity-100 transition"
                                loading="lazy"
                                decoding="async"
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
