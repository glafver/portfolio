import React, { useEffect } from 'react';
import { useModal } from '../ModalContext';
import { FaEnvelope } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { useSocialLinks } from '../helpers/socials';
import { useSiteContent } from '../hooks/useSiteContent';

const ContactModal: React.FC = () => {
    const { open, handleClose } = useModal();
    const content = useSiteContent();
    const socialLinks = useSocialLinks();

    useEffect(() => {
        if (!open) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, handleClose]);

    return (
        <>
            {open && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center text-center z-50"
                    onClick={handleClose}
                >
                    <div
                        className="bg-white dark:bg-neutral-800 flex flex-col w-[92%] max-w-md rounded-2xl shadow-xl relative p-8 sm:p-10"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h2 className="font-display text-3xl font-semibold text-neutral-900 dark:text-white mb-3">
                            My Contacts
                        </h2>
                        <div className="text-neutral-500 dark:text-neutral-400 mb-6">
                            You can easily reach me by email or any of my social media
                        </div>
                        <div className="flex items-center justify-center mb-6 text-neutral-700 dark:text-neutral-200">
                            <FaEnvelope className="h-5 mr-3 text-accent" />
                            <a href={`mailto:${content['contact.email']}`} className="hover:text-accent transition duration-300">{content['contact.email']}</a>
                        </div>
                        <div className="flex items-center justify-center gap-8 mb-8">
                            {socialLinks.map(({ name, url, icon: Icon }) => (
                                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-neutral-600 dark:text-neutral-300 hover:text-accent transition">
                                    <Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                        <IoMdClose
                            onClick={handleClose}
                            className="text-lg cursor-pointer absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactModal;
