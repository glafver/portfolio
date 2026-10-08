import { createContext, useContext } from 'react';

export interface ModalContextProps {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
