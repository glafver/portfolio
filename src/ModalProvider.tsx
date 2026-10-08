import { useState, FC, ReactNode } from 'react';
import { ModalContext } from './ModalContext';

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
            {children}
        </ModalContext.Provider>
    );
};
