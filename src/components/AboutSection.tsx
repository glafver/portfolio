import React from 'react';
import { Fade } from 'react-awesome-reveal';

const AboutSection: React.FC = () => {
    return (
        <div id='about' className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-end lg:justify-between px-8 lg:px-12 py-16 lg:py-36">
            <div className="relative flex justify-center lg:justify-normal lg:w-1/3 mb-10 lg:mb-0 z-10">
                <Fade >
                    <img
                        src='/assets/about_img.jpg'
                        alt="Profile"
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
                <p className='mb-5'>
                    Hi, my name is <b>Glafira Veretennikova</b>. Currently based in<b> Malmö, Sweden</b>, I relocated here six years ago from <b> St. Petersburg, Russia</b>. I am fluent in both <b>Swedish</b>  and <b>English</b>.
                </p>
                <p className='mb-5'>
                    I am a <b> Fullstack Developer</b> and my expertise includes <b> C#, .NET, Blazor, React.js, TypeScript,</b> and<b> Node.js</b>.
                    I have experience working with Redux, Express.js, Socket.io, Tailwind,  and Material UI, and writing tests with xUnit and Jest.
                </p>
                <p className='mb-5'>
                    <b> Easy-going</b> by nature, I know how to listen and find the <b> right approach</b> to people and work. Skilled at <b>collaborating in teams</b>, I can both <b> lead projects</b>  and <b> work independently </b> when needed.
                </p>
                <p className='mb-5'>
                    I am a versatile professional with <b>over 15 years of experience</b>, focused on <b>administration</b>  and <b>management</b>.
                    My extensive professional background has honed my <b>organizational</b> skills, <b>problem-solving</b>  abilities, and <b> customer focus</b>.
                </p>
                <p className='mb-0'>
                    I am passionate about interior design and interior photography, working professionally as a <b> freelance photographer. </b>
                    I also enjoy traveling and <b> exploring different cultures</b> to understand how people live, think and create their spaces.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;