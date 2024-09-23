import React from 'react';
import { Fade } from 'react-awesome-reveal';

const AboutSection: React.FC = () => {
    return (
        <div id='about' className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-end lg:justify-between px-8 lg:px-12 py-16 lg:py-36">
            <div className="relative flex justify-center lg:justify-normal lg:w-1/3 mb-10 lg:mb-0 z-10">
                <Fade >
                    <img
                        src='https://storage.googleapis.com/glafver_portfolio/about_img.jpg'
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
                    I’m 36 years old and currently based in Malmö, Sweden. I relocated here five years ago from St. Petersburg, Russia.
                    I am fluent both in Swedish and English.
                </p>
                <p className='mb-5'>
                    I am non-confrontational and easy-going person, I know how to listen and find the right approach to people and work. Respect, tolerance, democratic resolution of issues ━ are my principles.
                </p>
                <p className='mb-5'>
                    My big hobby and interest is interior design and interior photography.
                    I also love to travel and learn about new cultures and see how other people live.
                </p>
                <p className='mb-5'>
                    I am a versatile professional with over 15 years of experience, focused on administration and management.
                    My extensive professional background has honed my organizational skills, problem-solving abilities, and customer focus.
                </p>
                <p className='mb-0'>
                    In recent years, I have dived into programming, which has revealed new talents and passions for me.
                    I am drawn to the elegance of code and its logic, and I am committed to continuous learning and growth in this field.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;