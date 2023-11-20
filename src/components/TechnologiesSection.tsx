import React from 'react';
// import Logo1 from './assets/tech_1.png';
// import Logo2 from './assets/tech_2.png';
// import Logo3 from './assets/tech_3.png';
import Logo4 from '../assets/tech_4.png';
import Logo5 from '../assets/tech_5.png';
import Logo6 from '../assets/tech_6.png';
import Logo7 from '../assets/tech_7.png';
import Logo8 from '../assets/tech_8.png';
import Logo9 from '../assets/tech_9.png';
import Logo10 from '../assets/tech_10.png';
import Logo11 from '../assets/tech_11.png';

const logos: string[] = [
    // Logo1,
    // Logo2,
    // Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
    Logo11
];

const Technologies: React.FC = () => {
    return (
        <div className="bg-neutral-200 p-12 py-28 text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-semibold mb-20">Technologies & Techniques I Use</h2>
                <div className="flex justify-center flex-wrap gap-6">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Logo ${index}`} className="h-20" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;
