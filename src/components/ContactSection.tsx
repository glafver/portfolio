import React from 'react';
import CV from '../assets/Glafira_Veretennikova_FrontEndDeveloper_CV.pdf';
import { useModal } from '../ModalContext';

const Contact: React.FC = () => {
    const { handleOpen } = useModal();

    return (
        <div id='contact' className="bg-neutral-200 h-96 p-12 pb-36 py-28 mt-48 relative">
            <div
                className="gv-color-changing-bg absolute inset-0 -top-36 h-full w-4/5 max-w-7xl mx-auto flex flex-col bg-gradient-to-r from-purple-500 via-red-500 to-orange-500"
                style={{
                    borderBottomLeftRadius: '12rem',
                    borderBottomRightRadius: '12rem',
                    height: 'calc(100% + 1rem)'
                }}
            >
                <div className='p-12 mt-6 lg:mt-24 text-center'>
                    <h1 className="text-5xl lg:text-6xl font-semibold mb-12 text-white">
                        Interested in working with me?
                    </h1>
                    <button
                        onClick={() => { handleOpen(); }}
                        className="uppercase bg-neutral-800 text-white font-bold py-2 px-4 mr-3 rounded-full hover:text-neutral-800 hover:bg-white">
                        Get in touch
                    </button>
                    <button
                        className="uppercase border border-neutral-800 text-neutral-800 font-bold py-2 px-4 rounded-full hover:bg-neutral-800 hover:text-white transition duration-300"
                    >
                        <a
                            href={CV}
                            download="Glafira_Veretennikova_Frontend_Dev_CV.pdf"
                        >
                            DOWNLOAD MY CV
                        </a>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Contact;