import React from 'react';
import { Fade } from 'react-awesome-reveal';

const AboutSection: React.FC = () => {
    return (
        <div id='about' className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-end lg:justify-between px-8 lg:px-12 py-16 lg:py-36">
            <div className="relative flex justify-center lg:justify-normal lg:w-1/3 mb-10 lg:mb-0 z-10">
                <Fade >
                    <img
                        src='/assets/about_img.jpg'
                        alt="Glafira Veretennikova"
                        className="rounded z-10 object-cover object-top aspect-square lg:aspect-auto lg:w-full"
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
                        Hi, my name is Glafira Veretennikova. Currently based in Malmö, Sweden, I relocated here six years ago from St. Petersburg, Russia. I am fluent in both Swedish and English.
                    </p>
                    <p className='mb-5'>
                        I am a Fullstack Developer and my expertise includes C#, .NET, Blazor, React.js, TypeScript, and Node.js.
                        I have experience working with Redux, Express.js, Socket.io, Tailwind, and Material UI, and writing tests with xUnit and Jest.
                    </p>
                    <p className='mb-5'>
                        Easy-going by nature, I know how to listen and find the right approach to people and work. Skilled at collaborating in teams, I can both lead projects and work independently when needed.
                    </p>
                    <p className='mb-5'>
                        I am a versatile professional with over 15 years of experience, focused on administration and management.
                        My extensive professional background has honed my organizational skills, problem-solving abilities, and customer focus.
                    </p>
                    <p className='mb-0'>
                        I am passionate about interior design and interior photography, working professionally as a freelance photographer.
                        I also enjoy traveling and exploring different cultures to understand how people live, think and create their spaces.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;