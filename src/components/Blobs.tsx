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
    { left: '-4%', top: '12%', width: 240, height: 240, radius: '60% 40% 55% 45% / 55% 45% 60% 40%', duration: '15s', delay: '0s', opacity: 0.08 },
    { left: '85%', top: '35%', width: 260, height: 260, radius: '55% 45% 60% 40% / 45% 60% 40% 55%', duration: '18s', delay: '-6s', opacity: 0.07 },
    { left: '20%', top: '70%', width: 220, height: 220, radius: '45% 55% 40% 60% / 60% 40% 55% 45%', duration: '16s', delay: '-10s', opacity: 0.08 },
];

const OUTLINE_BLOBS: BlobShape[] = [
    { left: '70%', top: '8%', width: 160, height: 140, radius: '45% 55% 40% 60% / 60% 40% 55% 45%', duration: '13s', delay: '-2s' },
    { left: '10%', top: '30%', width: 130, height: 110, radius: '40% 60% 55% 45% / 55% 40% 60% 45%', duration: '17s', delay: '-8s' },
    { left: '55%', top: '55%', width: 150, height: 130, radius: '55% 45% 60% 40% / 45% 60% 40% 55%', duration: '14s', delay: '-4s' },
    { left: '80%', top: '75%', width: 110, height: 95, radius: '60% 40% 55% 45% / 55% 45% 60% 40%', duration: '19s', delay: '-12s' },
    { left: '30%', top: '88%', width: 120, height: 100, radius: '50% 45% 60% 40% / 45% 55% 50% 60%', duration: '15s', delay: '-7s' },
];

const Blobs: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {FILLED_BLOBS.map((b, i) => (
            <div
                key={`filled-${i}`}
                className="absolute bg-accent dark:bg-accent-light animate-drift"
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
                className="absolute border border-accent/25 dark:border-accent-light/25 animate-drift"
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
