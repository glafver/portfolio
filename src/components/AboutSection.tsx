import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const AboutSection: React.FC = () => {
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <div id='about' className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-end lg:justify-between px-8 lg:px-12 py-16 lg:py-36">
            {isAdmin && <EditButton onClick={() => openContentEditor('about')} className="absolute top-4 right-4 z-20" />}
            <div className="relative flex justify-center lg:justify-normal lg:w-1/3 mb-10 lg:mb-0 z-10">
                <Fade >
                    <img
                        src='/assets/about_img.webp'
                        alt="Glafira Veretennikova"
                        className="rounded z-10 object-cover object-top aspect-square lg:aspect-auto lg:w-full"
                        loading="lazy"
                        decoding="async"
                    />
                </Fade>
            </div>
            <div className="lg:w-2/3 lg:pl-36 z-10">
                <div className="text-center lg:text-right">
                    <h2 className="text-3xl lg:text-5xl font-bold pb-10 lg:pb-16">About
                        <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                            Me
                        </span>
                    </h2>
                </div>
                <div>
                    <p className='mb-5'>
                        {content['about.p1']}
                    </p>
                    <p className='mb-5'>
                        {content['about.p2']}
                    </p>
                    <p className='mb-5'>
                        {content['about.p3']}
                    </p>
                    <p className='mb-5'>
                        {content['about.p4']}
                    </p>
                    <p className='mb-0'>
                        {content['about.p5']}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;