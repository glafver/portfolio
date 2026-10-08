import React from 'react';

interface BlobShape {
    left: string;
    top: string;
    width: number;
    height: number;
    radius: string;
    duration: string;
    delay: string;
    opacity?: number;
}

const FILLED_BLOBS: BlobShape[] = [
    { left: '-6%', top: '45%', width: 220, height: 220, radius: '60% 40% 55% 45% / 55% 45% 60% 40%', duration: '8s', delay: '-2s', opacity: 0.15 },
    { left: '82%', top: '55%', width: 240, height: 240, radius: '55% 45% 60% 40% / 45% 60% 40% 55%', duration: '12s', delay: '-5s', opacity: 0.1 },
];

const OUTLINE_BLOBS: BlobShape[] = [
    { left: '72%', top: '30%', width: 170, height: 150, radius: '45% 55% 40% 60% / 60% 40% 55% 45%', duration: '9s', delay: '0s' },
    { left: '8%', top: '62%', width: 150, height: 130, radius: '40% 60% 55% 45% / 55% 40% 60% 45%', duration: '11s', delay: '-3s' },
    { left: '45%', top: '40%', width: 110, height: 90, radius: '55% 45% 60% 40% / 45% 60% 40% 55%', duration: '7s', delay: '-6s' },
    { left: '60%', top: '65%', width: 95, height: 80, radius: '60% 40% 55% 45% / 55% 45% 60% 40%', duration: '13s', delay: '-8s' },
];

const Blobs: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {FILLED_BLOBS.map((b, i) => (
            <div
                key={`filled-${i}`}
                className={`absolute bg-accent dark:bg-accent-light ${i % 2 === 0 ? 'animate-float-away-a' : 'animate-float-away-b'}`}
                style={{
                    left: b.left,
                    top: b.top,
                    width: b.width,
                    height: b.height,
                    borderRadius: b.radius,
                    animationDuration: b.duration,
                    animationDelay: b.delay,
                    opacity: b.opacity,
                }}
            />
        ))}
        {OUTLINE_BLOBS.map((b, i) => (
            <div
                key={`outline-${i}`}
                className={`absolute border-2 border-accent/40 dark:border-accent-light/40 ${i % 2 === 0 ? 'animate-float-away-a' : 'animate-float-away-b'}`}
                style={{
                    left: b.left,
                    top: b.top,
                    width: b.width,
                    height: b.height,
                    borderRadius: b.radius,
                    animationDuration: b.duration,
                    animationDelay: b.delay,
                }}
            />
        ))}
    </div>
);

export default Blobs;
