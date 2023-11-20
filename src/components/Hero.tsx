import React from 'react';
import hero_img from '../assets/hero_img.jpg';

const Hero: React.FC = () => {
    return (
        <div className="bg-neutral-200 p-12 py-28">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 lg:pr-10">
                    <h1 className="text-6xl font-bold mb-4 text-gray-800">
                        Hello, my name is
                        <span className=" ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                            Glafira
                        </span>
                    </h1>
                    <p className="py-12 font-forum text-2xl text-gray-700 mb-6 text-justify">
                        Specializing in crafting intuitive user interfaces with a touch of creative finesse. Let's collaborate to bring your digital vision to life!
                    </p>
                    <button
                        className="uppercase border border-black text-black font-bold py-2 px-4 rounded-full hover:bg-black hover:text-white transition duration-300"
                    >
                        Contact me
                    </button>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <img
                        src={hero_img}
                        alt="Hero Image"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
