import { useState, FormEvent } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { signInAdmin } from '../lib/auth';
import { useAuth } from '../hooks/useAuth';

const AdminLogin: React.FC = () => {
    const { session, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-xl">Loading…</div>;
    }

    if (session) {
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

    return (
        <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-1">Portfolio Admin</h1>
                <p className="text-neutral-500 text-sm mb-6">Sign in to manage your site</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        />
                    </div>

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-neutral-900 text-white font-semibold py-2 rounded-md hover:bg-neutral-700 disabled:opacity-50 transition"
                    >
                        {submitting ? 'Signing in…' : 'Sign in'}
                    </button>
                </form>

                <div className="mt-6 text-sm text-neutral-500">
                    <Link to="/" className="hover:underline">← Back to site</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
