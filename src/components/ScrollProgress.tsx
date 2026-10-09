import { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? window.scrollY / total : 0);
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-0.5 pointer-events-none" aria-hidden="true">
            <div className="h-full bg-accent" style={{ width: `${progress * 100}%` }} />
        </div>
    );
};

export default ScrollProgress;
