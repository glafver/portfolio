import { FaPlus, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useAdmin } from './AdminContext';
import { signOutAdmin } from '../lib/auth';

const AdminBar: React.FC = () => {
    const { isAdmin, openProjectEditor, openContentEditor } = useAdmin();

    if (!isAdmin) return null;

    return (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
            <button
                onClick={() => openContentEditor('settings')}
                className="flex items-center justify-center bg-white text-neutral-700 border border-neutral-200 rounded-full w-11 h-11 shadow-lg hover:bg-neutral-50 transition"
                aria-label="Settings"
                title="Settings"
            >
                <FaCog />
            </button>
            <button
                onClick={() => signOutAdmin()}
                className="flex items-center gap-2 bg-white text-neutral-700 border border-neutral-200 rounded-full px-4 py-2.5 text-sm font-medium shadow-lg hover:bg-neutral-50 transition"
            >
                <FaSignOutAlt /> Logout
            </button>
            <button
                onClick={() => openProjectEditor(null)}
                className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition"
            >
                <FaPlus /> Add project
            </button>
        </div>
    );
};

export default AdminBar;
