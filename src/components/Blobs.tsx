import React from 'react';

interface Blob {
    left: string;
    top: string;
    width: number;
    height: number;
    radius: string;
    duration: string;
    delay: string;
    opacity: number;
}

const BLOBS: Blob[] = [
    { left: '-6%', top: '8%', width: 220, height: 220, radius: '60% 40% 55% 45% / 55% 45% 60% 40%', duration: '9s', delay: '0s', opacity: 0.15 },
    { left: '72%', top: '4%', width: 170, height: 170, radius: '45% 55% 40% 60% / 60% 40% 55% 45%', duration: '11s', delay: '-4s', opacity: 0.12 },
    { left: '82%', top: '55%', width: 240, height: 240, radius: '55% 45% 60% 40% / 45% 60% 40% 55%', duration: '13s', delay: '-2s', opacity: 0.1 },
    { left: '8%', top: '62%', width: 150, height: 150, radius: '40% 60% 55% 45% / 55% 40% 60% 45%', duration: '10s', delay: '-6s', opacity: 0.14 },
];

interface Line {
    left: string;
    top: string;
    width: number;
    rotate: number;
}

const LINES: Line[] = [
    { left: '12%', top: '38%', width: 110, rotate: 18 },
    { left: '55%', top: '72%', width: 90, rotate: -22 },
    { left: '70%', top: '18%', width: 80, rotate: 28 },
    { left: '35%', top: '12%', width: 70, rotate: -14 },
];

const Blobs: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {BLOBS.map((b, i) => (
            <div
                key={`blob-${i}`}
                className="absolute bg-accent dark:bg-accent-light animate-blob"
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
        {LINES.map((l, i) => (
            <span
                key={`line-${i}`}
                className="absolute h-px bg-accent/40 dark:bg-accent-light/40"
                style={{
                    left: l.left,
                    top: l.top,
                    width: l.width,
                    transform: `rotate(${l.rotate}deg)`,
                }}
            />
        ))}
    </div>
);

export default Blobs;
