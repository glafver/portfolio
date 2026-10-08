import { useEffect, useState } from 'react';

/**
 * Returns a translateY offset (in px) based on scroll position,
 * so elements can move at a different speed than the page (parallax).
 * Respects prefers-reduced-motion.
 */
export function useParallax(speed = 0.2): number {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let raf = 0;
        const update = () => setOffset(window.scrollY * speed);
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, [speed]);

    return offset;
}
