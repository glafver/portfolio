import React from 'react';

const Contact: React.FC = () => {
    return (
        <div id='contact' className="bg-neutral-200 h-96 p-12 pb-36 py-28 mt-48 relative">
            <div
                className="absolute inset-0 -top-36 h-full w-4/5 max-w-7xl mx-auto flex flex-col bg-gradient-to-r from-purple-500 via-red-500 to-orange-500"
                style={{
                    borderBottomLeftRadius: '12rem',
                    borderBottomRightRadius: '12rem',
                    height: 'calc(100% + 1rem)'
                }}
            >
                <div className='p-12 mt-24 text-center'>
                    <h1 className="text-5xl font-bold mb-12 text-black">
                        Interested in working with me?
                    </h1>
                    <button className="uppercase bg-black text-white font-bold py-2 px-4 rounded-full transition-colors hover:bg-white hover:text-black">
                        Get in touch
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Contact;