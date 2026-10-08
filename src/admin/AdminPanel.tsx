import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { signOutAdmin } from '../lib/auth';
import ProjectManager from './ProjectManager';
import ContentManager from './ContentManager';

type Tab = 'projects' | 'content';

const AdminPanel: React.FC = () => {
    const { session, loading } = useAuth();
    const [tab, setTab] = useState<Tab>('projects');

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-xl">Loading…</div>;
    }

    if (!session) {
        return <Navigate to="/admin/login" replace />;
    }

    const tabClass = (active: boolean) =>
        `px-4 py-2 rounded-md text-sm font-medium transition ${
            active ? 'bg-white text-neutral-900' : 'text-neutral-300 hover:text-white'
        }`;

    return (
        <div className="min-h-screen bg-neutral-100 text-neutral-900">
            <header className="bg-neutral-900 text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <span className="font-bold">Portfolio Admin</span>
                    <nav className="flex gap-1">
                        <button onClick={() => setTab('projects')} className={tabClass(tab === 'projects')}>
                            Projects
                        </button>
                        <button onClick={() => setTab('content')} className={tabClass(tab === 'content')}>
                            Content
                        </button>
                    </nav>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <Link to="/" className="text-neutral-300 hover:text-white">View site</Link>
                    <button
                        onClick={() => signOutAdmin()}
                        className="border border-neutral-600 rounded-md px-3 py-1 hover:bg-neutral-700 transition"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-4xl mx-auto p-6">
                {tab === 'projects' ? <ProjectManager /> : <ContentManager />}
            </main>
        </div>
    );
};

export default AdminPanel;
