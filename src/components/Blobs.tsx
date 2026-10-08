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

const R1 = '60% 40% 55% 45% / 55% 45% 60% 40%';
const R2 = '55% 45% 60% 40% / 45% 60% 40% 55%';
const R3 = '45% 55% 40% 60% / 60% 40% 55% 45%';
const R4 = '40% 60% 55% 45% / 55% 40% 60% 45%';
const R5 = '50% 45% 60% 40% / 45% 55% 50% 60%';

const FILLED_BLOBS: BlobShape[] = [
    { left: '-5%', top: '4%', width: 240, height: 240, radius: R1, duration: '15s', delay: '0s', opacity: 0.08 },
    { left: '84%', top: '6%', width: 260, height: 260, radius: R2, duration: '18s', delay: '-6s', opacity: 0.07 },
    { left: '16%', top: '14%', width: 200, height: 200, radius: R3, duration: '16s', delay: '-10s', opacity: 0.08 },
    { left: '68%', top: '18%', width: 220, height: 220, radius: R4, duration: '17s', delay: '-3s', opacity: 0.07 },
    { left: '6%', top: '30%', width: 230, height: 230, radius: R5, duration: '19s', delay: '-8s', opacity: 0.08 },
    { left: '88%', top: '34%', width: 210, height: 210, radius: R1, duration: '15s', delay: '-13s', opacity: 0.07 },
    { left: '30%', top: '40%', width: 190, height: 190, radius: R2, duration: '18s', delay: '-5s', opacity: 0.08 },
    { left: '60%', top: '46%', width: 230, height: 230, radius: R3, duration: '16s', delay: '-11s', opacity: 0.07 },
    { left: '12%', top: '56%', width: 220, height: 220, radius: R4, duration: '17s', delay: '-2s', opacity: 0.08 },
    { left: '78%', top: '62%', width: 200, height: 200, radius: R5, duration: '19s', delay: '-9s', opacity: 0.07 },
    { left: '40%', top: '70%', width: 240, height: 240, radius: R1, duration: '15s', delay: '-14s', opacity: 0.08 },
    { left: '86%', top: '82%', width: 210, height: 210, radius: R2, duration: '18s', delay: '-4s', opacity: 0.07 },
    { left: '14%', top: '88%', width: 220, height: 220, radius: R3, duration: '16s', delay: '-12s', opacity: 0.08 },
];

const OUTLINE_BLOBS: BlobShape[] = [
    { left: '72%', top: '3%', width: 160, height: 140, radius: R1, duration: '13s', delay: '-2s' },
    { left: '8%', top: '8%', width: 130, height: 110, radius: R2, duration: '17s', delay: '-8s' },
    { left: '55%', top: '12%', width: 150, height: 130, radius: R3, duration: '14s', delay: '-4s' },
    { left: '24%', top: '20%', width: 120, height: 100, radius: R4, duration: '19s', delay: '-12s' },
    { left: '90%', top: '22%', width: 110, height: 95, radius: R5, duration: '15s', delay: '-7s' },
    { left: '10%', top: '34%', width: 140, height: 120, radius: R1, duration: '16s', delay: '-5s' },
    { left: '50%', top: '38%', width: 120, height: 100, radius: R2, duration: '14s', delay: '-9s' },
    { left: '74%', top: '42%', width: 150, height: 130, radius: R3, duration: '18s', delay: '-11s' },
    { left: '20%', top: '50%', width: 130, height: 110, radius: R4, duration: '15s', delay: '-3s' },
    { left: '62%', top: '56%', width: 140, height: 120, radius: R5, duration: '17s', delay: '-13s' },
    { left: '86%', top: '60%', width: 115, height: 95, radius: R1, duration: '14s', delay: '-6s' },
    { left: '6%', top: '66%', width: 130, height: 110, radius: R2, duration: '16s', delay: '-10s' },
    { left: '34%', top: '74%', width: 120, height: 100, radius: R3, duration: '15s', delay: '-1s' },
    { left: '68%', top: '78%', width: 150, height: 130, radius: R4, duration: '18s', delay: '-8s' },
    { left: '16%', top: '84%', width: 110, height: 90, radius: R5, duration: '14s', delay: '-12s' },
    { left: '54%', top: '90%', width: 140, height: 120, radius: R1, duration: '17s', delay: '-5s' },
    { left: '80%', top: '90%', width: 115, height: 95, radius: R2, duration: '15s', delay: '-9s' },
    { left: '40%', top: '4%', width: 120, height: 100, radius: R3, duration: '16s', delay: '-14s' },
    { left: '66%', top: '26%', width: 120, height: 100, radius: R4, duration: '13s', delay: '-7s' },
    { left: '30%', top: '30%', width: 110, height: 90, radius: R5, duration: '15s', delay: '-2s' },
];

const Blobs: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {FILLED_BLOBS.map((b, i) => (
            <div
                key={`filled-${i}`}
                className="absolute bg-accent dark:bg-accent-light animate-drift blur-2xl"
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
                className="absolute border border-accent/25 dark:border-accent-light/25 animate-drift blur-xl"
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
