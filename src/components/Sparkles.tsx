import React from 'react';

interface Sparkle {
    left: string;
    top: string;
    size: number;
    delay: string;
    duration: string;
}

const SPARKLES: Sparkle[] = [
    { left: '8%', top: '18%', size: 12, delay: '0s', duration: '4.5s' },
    { left: '22%', top: '12%', size: 9, delay: '1.2s', duration: '3.5s' },
    { left: '35%', top: '30%', size: 10, delay: '0.6s', duration: '5s' },
    { left: '48%', top: '10%', size: 8, delay: '2s', duration: '4s' },
    { left: '65%', top: '22%', size: 14, delay: '0.3s', duration: '5.5s' },
    { left: '78%', top: '14%', size: 10, delay: '1.8s', duration: '3.8s' },
    { left: '88%', top: '28%', size: 12, delay: '0.9s', duration: '4.2s' },
    { left: '15%', top: '55%', size: 10, delay: '2.4s', duration: '5s' },
    { left: '42%', top: '65%', size: 8, delay: '0.4s', duration: '3.6s' },
    { left: '70%', top: '60%', size: 12, delay: '1.5s', duration: '4.8s' },
    { left: '90%', top: '75%', size: 9, delay: '0.1s', duration: '3.4s' },
    { left: '30%', top: '85%', size: 11, delay: '1.9s', duration: '4.4s' },
];

const Sparkles: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {SPARKLES.map((s, i) => (
            <span
                key={i}
                className="absolute sparkle-shape bg-accent dark:bg-accent-light animate-twinkle"
                style={{
                    left: s.left,
                    top: s.top,
                    width: s.size,
                    height: s.size,
                    animationDelay: s.delay,
                    animationDuration: s.duration,
                    filter: 'drop-shadow(0 0 4px rgba(190, 128, 110, 0.7))',
                }}
            />
        ))}
    </div>
);

export default Sparkles;
