import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ModalProvider } from './ModalProvider';
import { AdminProvider } from './admin/AdminProvider';
import { useAdmin } from './admin/AdminContext';
import Portfolio from './components/Portfolio';

const AdminLogin = lazy(() => import('./admin/AdminLogin'));

const Loading = () => (
    <div className="min-h-screen flex items-center justify-center text-neutral-500">Loading…</div>
);

function RequireAdmin({ children }: { children: JSX.Element }) {
    const { isAdmin, loading } = useAdmin();
    if (loading) {
        return <Loading />;
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
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={<Portfolio />} />
                            <Route path="/admin/login" element={<AdminLogin />} />
                            <Route path="/admin" element={<RequireAdmin><Portfolio /></RequireAdmin>} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </AdminProvider>
        </ModalProvider>
    );
}

export default App;
