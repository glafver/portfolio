import React from 'react';
import { useModal } from '../ModalContext';
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

const ContactModal: React.FC = () => {
    const { open, handleClose } = useModal();

    return (
        <>
            {open && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center text-center z-10">
                    <div className="bg-white flex flex-col w-4/5 max-w-max lg:w-max rounded-md shadow-lg relative p-10 h-max">
                        <h2 className="block text-4xl font-bold sm:inline mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                            My Contacts
                        </h2>
                        <div className='mb-5 text-xl'>You can easily reach me by email or any of my social media</div>
                        <div className='flex items-center justify-center mb-6'>
                            <FaEnvelope className='h-5 mr-3' />
                            <a href="mailto:glafira.se@gmail.com" className='hover:text-red-500 transition duration-300'>glafira.se@gmail.com</a>
                        </div>
                        <div className="flex items-center justify-center space-x-9 mb-12">
                            <a href="https://www.linkedin.com/in/glafver/"><FaLinkedin className='w-6 h-6 hover:text-red-500 transition duration-300' /></a>
                            <a href="https://www.facebook.com/glafver"><FaFacebook className='w-6 h-6 hover:text-red-500 transition duration-300' /></a>
                            <a href="https://github.com/glafver"><FaGithub className='w-6 h-6 hover:text-red-500 transition duration-300' /></a>
                            <a href="https://www.instagram.com/glafver/"><FaInstagram className='w-6 h-6 hover:text-red-500 transition duration-300' /></a>
                        </div>
                        <IoMdClose
                            onClick={handleClose}
                            className='text-lg cursor-pointer absolute top-3 right-3 hover:text-red-500 transition duration-300'
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactModal;