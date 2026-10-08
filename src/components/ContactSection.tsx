import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useModal } from '../ModalContext';
import { useSiteContent } from '../hooks/useSiteContent';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';

const Contact: React.FC = () => {
    const { handleOpen } = useModal();
    const content = useSiteContent();
    const { isAdmin, openContentEditor } = useAdmin();

    return (
        <section id="contact" className="relative px-6 lg:px-8 pt-6 lg:pt-8 pb-20 lg:pb-24">
            {isAdmin && <EditButton onClick={() => openContentEditor('contact')} className="absolute top-4 right-4 z-20" />}

            <Fade direction="up" triggerOnce duration={600}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-4xl lg:text-5xl leading-tight tracking-tight text-neutral-900 dark:text-white">
                        {content['contact.title']}
                    </h2>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => { handleOpen(); }}
                            className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-full transition"
                        >
                            Get in touch
                        </button>
                        <a
                            href={`mailto:${content['contact.email']}`}
                            className="text-neutral-700 dark:text-neutral-200 font-medium hover:text-accent transition"
                        >
                            {content['contact.email']}
                        </a>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Contact;
