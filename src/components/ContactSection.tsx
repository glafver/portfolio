import React from 'react';
import { useModal } from '../ModalContext';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';

const Contact: React.FC = () => {
    const { handleOpen } = useModal();

    return (
        <div id='contact' className="bg-neutral-200 h-72 lg:h-96 lg:pb-36 mt-36 lg:mt-36 relative">
            <div
                className="gv-color-changing-bg absolute inset-0 -top-36 h-96 w-4/5 max-w-7xl mx-auto flex flex-col"
                style={{
                    borderBottomLeftRadius: '12rem',
                    borderBottomRightRadius: '12rem'
                }}
            >
                <div className='p-12 pt-6 lg:pt-20 text-center m-auto w-full'>

                    <h1 className="text-2xl font-semibold mb-6  text-white lg:hidden">
                        Interested in working with me?
                    </h1>

                    <h1 className="text-5xl font-semibold mb-12 text-white hidden lg:block">
                        <Fade cascade duration={50}>
                            Interested in working with me?
                        </Fade>
                    </h1>

                    <AttentionSeeker effect="heartBeat" delay={1000}>
                        <div className='flex flex-col-reverse lg:flex-row items-center justify-center'>
                            <button
                                onClick={() => { handleOpen(); }}
                                className="w-max uppercase bg-neutral-800 text-white font-bold py-2 px-4 lg:mr-3 rounded-full hover:text-neutral-800 hover:bg-white">
                                Get in touch
                            </button>
                            <button
                                className="w-max uppercase border border-neutral-800 text-neutral-800 font-bold py-2 px-4 mb-5 lg:mb-0 rounded-full hover:bg-neutral-800 hover:text-white transition duration-300"
                            >
                                <a
                                    href={"https://storage.googleapis.com/glafver_portfolio/GlafiraVeretennikova_CV.docx"}
                                    download="Glafira_Veretennikova_Frontend_Dev_CV.pdf"
                                >
                                    DOWNLOAD MY CV
                                </a>
                            </button>
                        </div>
                    </AttentionSeeker>
                </div>
            </div>
        </div>

    );
};

export default Contact;