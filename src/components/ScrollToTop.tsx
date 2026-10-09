import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 bg-accent hover:bg-accent-dark text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition"
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <FaArrowUp size={15} />
        </button>
    );
};

export default ScrollToTop;
