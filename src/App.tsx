import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './ModalProvider';
import Portfolio from './components/Portfolio';
import AdminLogin from './admin/AdminLogin';
import AdminPanel from './admin/AdminPanel';

function App() {
    return (
        <ModalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/*" element={<AdminPanel />} />
                </Routes>
            </BrowserRouter>
        </ModalProvider>
    );
}

export default App;
