import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ModalProvider } from './ModalProvider';
import { AdminProvider } from './admin/AdminProvider';
import { useAdmin } from './admin/AdminContext';
import Portfolio from './components/Portfolio';
import AdminLogin from './admin/AdminLogin';

function RequireAdmin({ children }: { children: JSX.Element }) {
    const { isAdmin, loading } = useAdmin();
    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-neutral-500">Loading…</div>;
    }
    if (!isAdmin) {
        return <Navigate to="/admin/login" replace />;
    }
    return children;
}

function App() {
    return (
        <ModalProvider>
            <AdminProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Portfolio />} />
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin" element={<RequireAdmin><Portfolio /></RequireAdmin>} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </AdminProvider>
        </ModalProvider>
    );
}

export default App;
