import { createContext, useContext, useState, FC, ReactNode } from 'react';

interface ModalContextProps {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

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
