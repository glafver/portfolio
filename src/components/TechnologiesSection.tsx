import React from 'react';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const logos: string[] = [
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
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <section className="relative bg-neutral-50 dark:bg-neutral-900 px-6 lg:px-8 py-20 lg:py-24 text-center">
            {isAdmin && <EditButton onClick={() => openContentEditor('technologies')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-4xl mx-auto">
                <h2 className="font-display uppercase text-3xl lg:text-5xl leading-[0.95] tracking-tight text-neutral-900 dark:text-white">
                    {content['technologies.title']}
                </h2>
                <div className="mt-12 flex justify-center flex-wrap gap-x-10 gap-y-8">
                    {logos.map((logo, index) => (
                        <img
                            src={logo}
                            alt=""
                            className="h-8 lg:h-10 opacity-70 hover:opacity-100 transition"
                            key={index}
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
