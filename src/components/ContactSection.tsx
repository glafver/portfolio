import React from 'react';
import { useModal } from '../ModalContext';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const Contact: React.FC = () => {
    const { handleOpen } = useModal();
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <section id="contact" className="relative bg-neutral-50 dark:bg-neutral-900 px-6 lg:px-8 py-20 lg:py-28">
            {isAdmin && <EditButton onClick={() => openContentEditor('contact')} className="absolute top-4 right-4 z-20" />}

            <div className="max-w-4xl mx-auto">
                <div className="bg-neutral-900 dark:bg-neutral-800 rounded-3xl px-6 py-16 lg:py-20 text-center">
                    <h2 className="font-display uppercase text-3xl lg:text-5xl leading-[0.95] tracking-tight text-white">
                        {content['contact.title']}
                    </h2>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                        <button
                            onClick={() => { handleOpen(); }}
                            className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition"
                        >
                            Get in touch
                        </button>
                        <a
                            href={content['cv.url']}
                            download
                            className="border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
