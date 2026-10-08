import { useEffect, useState } from 'react';
import type { Project } from '../types';
import { fetchProjects } from '../lib/content';
import { deleteProject } from '../lib/adminApi';
import ProjectForm from './ProjectForm';

const ProjectManager: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState<Project | null>(null);
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState('');

    const load = async () => {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data ?? []);
        setLoading(false);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (project: Project) => {
        if (!window.confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
        setError('');
        try {
            await deleteProject(project.id);
            await load();
        } catch (e) {
            console.error(e);
            setError('Failed to delete project.');
        }
    };

    if (editing || creating) {
        return (
            <ProjectForm
                initial={editing}
                onCancel={() => {
                    setEditing(null);
                    setCreating(false);
                }}
                onSaved={async () => {
                    setEditing(null);
                    setCreating(false);
                    await load();
                }}
            />
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold">Projects</h2>
                <button
                    onClick={() => setCreating(true)}
                    className="bg-neutral-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-neutral-700 transition"
                >
                    + New project
                </button>
            </div>

            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

            {loading ? (
                <p className="text-neutral-500">Loading…</p>
            ) : projects.length === 0 ? (
                <p className="text-neutral-500">No projects yet.</p>
            ) : (
                <ul className="space-y-2">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className="bg-white rounded-lg shadow p-4 flex items-center justify-between gap-4"
                        >
                            <div className="min-w-0">
                                <div className="font-semibold truncate">{project.title}</div>
                                <div className="text-sm text-neutral-500 truncate">{project.link}</div>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <button
                                    onClick={() => setEditing(project)}
                                    className="border border-neutral-300 px-3 py-1 rounded-md text-sm hover:bg-neutral-100 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(project)}
                                    className="border border-red-300 text-red-600 px-3 py-1 rounded-md text-sm hover:bg-red-50 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProjectManager;
