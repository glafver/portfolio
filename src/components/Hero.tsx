import React from 'react';
import { useModal } from '../ModalContext';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';

const Hero: React.FC = () => {
    const { handleOpen } = useModal();

    return (
        <>
            <div className="bg-neutral-200 p-8 pb-16 lg:p-12 lg:py-28">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 lg:pr-10">
                        <h1 className="text-3xl lg:text-5xl font-bold">
                            Hey, I'm

                            <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                                Glafira
                            </span>

                            , a Frontend Developer
                        </h1>
                        <p className="py-5 lg:py-5 text-lg lg:text-xl">
                            with a passion for solving problems and high attention to visual details. My goal in work is to produce clean, understandable, and well-optimized code.
                        </p>
                        <div className='flex w-full justify-center mb-4 lg:mb-0'>
                            <AttentionSeeker effect="heartBeat">
                                <button
                                    onClick={() => { handleOpen(); }}
                                    className="uppercase gv-color-changing-bg font-bold py-2 px-4 text-white rounded-full hover:text-neutral-800 transition duration-300"
                                >
                                    Contact me
                                </button>
                            </AttentionSeeker>
                        </div>

                    </div>

                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <Fade >
                            <img
                                src='https://storage.googleapis.com/glafver_portfolio/hero_img.jpg'
                                alt="Hero Image"
                                className="rounded shadow-lg w-full  lg:w-3/4 mx-auto lg:mr-0"
                            />
                        </Fade>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Hero;
