import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
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
    '/assets/tech_11.webp'
];

const Technologies: React.FC = () => {
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <div className="relative bg-neutral-200 px-8 py-16 lg:px-12 lg:py-28 text-center">
            {isAdmin && <EditButton onClick={() => openContentEditor('technologies')} className="absolute top-4 right-4 z-20" />}
            <Zoom >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-16 lg:mb-20">{content['technologies.title']}</h2>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Fade cascade duration={300}>
                            {logos.map((logo, index) => (
                                <img src={logo} alt="" className="h-12 lg:h-20" key={index} loading="lazy" decoding="async" />
                            ))}
                        </Fade>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Technologies;
