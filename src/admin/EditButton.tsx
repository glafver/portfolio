import { FaPencilAlt } from 'react-icons/fa';

interface EditButtonProps {
    onClick: () => void;
    label?: string;
    className?: string;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick, label = 'Edit', className = '' }) => (
    <button
        onClick={onClick}
        className={`bg-white/90 text-neutral-700 border border-neutral-200 rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-white hover:text-neutral-900 transition backdrop-blur ${className}`}
        aria-label={label}
        title={label}
    >
        <FaPencilAlt size={14} />
    </button>
);

export default EditButton;
