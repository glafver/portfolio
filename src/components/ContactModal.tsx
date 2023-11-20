import React from 'react';
import { useModal } from '../ModalContext';
import icon_close from '../assets/icon_close.png';
import icon_phone from '../assets/icon_phone.png';
import icon_mail from '../assets/icon_mail.png';

const ContactModal: React.FC = () => {
    const { open, handleClose } = useModal();

    return (
        <>
            {open && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white flex flex-col w-4/5 max-w-max lg:w-max h-72 rounded-md shadow-lg relative p-10">
                        <h2 className="block text-4xl font-bold sm:inline h-20 my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
                            My Contacts
                        </h2>
                        <div className='mb-5 font-forum text-xl'>You can easily reach me by email or phone</div>
                        <div className='flex items-center mb-3'><img className='h-5 mr-3' src={icon_phone} alt="" />+46760558355</div>
                        <div className='flex items-center'><img className='h-5 mr-3' src={icon_mail} alt="" />glafver22@gmail.com</div>
                        <button
                            onClick={handleClose}
                            className='rounded-full p-1 absolute top-3 right-3 hover:bg-neutral-200 transition duration-300'
                        >
                            <img className='w-5' src={icon_close} alt="" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactModal;
