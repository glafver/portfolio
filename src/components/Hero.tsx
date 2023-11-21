import React from 'react';
import hero_img from '../assets/hero_img.jpg';
import { useModal } from '../ModalContext';

const Hero: React.FC = () => {
    const { handleOpen } = useModal();

    return (
        <>
            <div className="bg-neutral-200 p-8 pb-20 lg:p-12 lg:py-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 lg:pr-10">
                        <h1 className="text-5xl lg:text-6xl font-bold text-neutral-800">
                            Hey, I'm
                            <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                                Glafira
                            </span>
                            , creative Frontend Developer
                        </h1>
                        <p className="py-10 lg:py-12 font-forum text-2xl text-justify">
                            Specializing in crafting intuitive user interfaces with a touch of creative finesse. Let's collaborate to bring your digital vision to life!
                        </p>
                        <div className='flex w-full justify-center lg:justify-start lg:mb-0'>
                            <button
                                onClick={() => { handleOpen(); }}
                                className="uppercase border border-neutral-800 text-neutral-800 font-bold py-2 px-4 rounded-full hover:bg-neutral-800 hover:text-white transition duration-300"
                            >
                                Contact me
                            </button>
                        </div>

                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <img
                            src={hero_img}
                            alt="Hero Image"
                            className="rounded shadow-lg w-full  lg:w-3/4 mx-auto lg:mr-0"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
