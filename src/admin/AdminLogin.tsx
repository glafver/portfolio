import { useState, FormEvent } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { signInAdmin } from '../lib/auth';
import { useAdmin } from './AdminContext';

const AdminLogin: React.FC = () => {
    const { isAdmin, loading } = useAdmin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-neutral-500">Loading…</div>;
    }

    if (isAdmin) {
        return <Navigate to="/admin" replace />;
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError('');
        setSubmitting(true);
        try {
            await signInAdmin(email, password);
        } catch {
            setError('Login failed. Check your email and password.');
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass =
        'w-full border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition';

    return (
        <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-purple-500 via-red-500 to-orange-500" />
                    <div className="p-8 sm:p-10">
                        <div className="text-center mb-8">
                            <div className="text-3xl font-bold text-neutral-900">Portfolio Admin</div>
                            <p className="text-neutral-500 mt-2 text-sm">Sign in to manage your site</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={inputClass}
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1.5">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={inputClass}
                                    placeholder="••••••••"
                                />
                            </div>

                            {error && <p className="text-red-600 text-sm">{error}</p>}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-gradient-to-r from-purple-500 via-red-500 to-orange-500 text-white font-semibold py-2.5 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
                            >
                                {submitting ? 'Signing in…' : 'Sign in'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition">← Back to site</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
