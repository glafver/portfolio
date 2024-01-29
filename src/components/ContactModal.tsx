import React from 'react';
import { useModal } from '../ModalContext';
import { FaEnvelope } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

const ContactModal: React.FC = () => {
    const { open, handleClose } = useModal();

    return (
        <>
            {open && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
                    <div className="bg-white flex flex-col w-4/5 max-w-max lg:w-max h-72 rounded-md shadow-lg relative p-10">
                        <h2 className="block text-4xl font-bold sm:inline h-20 my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                            My Contacts
                        </h2>
                        <div className='mb-5 text-xl'>You can easily reach me by my email</div>
                        <div className='flex items-center justify-center'>
                            <FaEnvelope className='h-5 mr-3' />
                            <a href="mailto:glafver22@gmail.com">glafver22@gmail.com</a>
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