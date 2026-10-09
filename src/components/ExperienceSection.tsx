import React, { useState } from 'react';
import Reveal from './Reveal';
import { FaListUl } from 'react-icons/fa';
import { useSiteContent } from '../hooks/useSiteContent';
import { useTimeline } from '../hooks/useTimeline';
import { useCertificates } from '../hooks/useCertificates';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';
import type { TimelineEntry, Certificate } from '../types';

const Timeline: React.FC<{ entries: TimelineEntry[] }> = ({ entries }) => (
    <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" />
        {entries.map((entry) => (
            <div key={entry.id} className="relative pb-8 group">
                <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full bg-accent border-2 border-white dark:border-neutral-900 transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
                <div className="font-display text-lg text-neutral-900 dark:text-white">{entry.title}</div>
                {entry.place && (
                    <div className="font-semibold text-neutral-800 dark:text-neutral-100">
                        {entry.link ? (
                            <a
                                href={entry.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent dark:hover:text-accent-light transition"
                            >
                                {entry.place}
                            </a>
                        ) : (
                            entry.place
                        )}
                    </div>
                )}
                <div className="text-sm font-medium text-accent dark:text-accent-light">{entry.period}</div>
                {entry.description && (
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400 whitespace-pre-line">{entry.description}</p>
                )}
            </div>
        ))}
    </div>
);

const ExperienceSection: React.FC = () => {
    const content = useSiteContent();
    const timeline = useTimeline();
    const certificates = useCertificates();
    const { isAdmin, openContentEditor, openExperienceEditor } = useAdmin();
    const [showAllWork, setShowAllWork] = useState(false);
    const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const education = timeline.filter((t) => t.type === 'education');
    const work = timeline.filter((t) => t.type !== 'education');
    const visibleWork = showAllWork ? work : work.slice(0, 4);

    return (
        <section id="experience" className="relative px-6 lg:px-8 py-20 lg:py-28">
            {isAdmin && (
                <>
                    <EditButton onClick={() => openContentEditor('experience')} className="absolute top-4 right-4 z-20" />
                    <button
                        onClick={openExperienceEditor}
                        className="absolute top-4 right-16 z-20 bg-white/90 text-neutral-700 border border-neutral-200 rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-white transition backdrop-blur"
                        aria-label="Manage timeline and certificates"
                        title="Manage timeline and certificates"
                    >
                        <FaListUl size={14} />
                    </button>
                </>
            )}

            <div className="max-w-3xl mx-auto">
                <Reveal>
                    <h2 className="font-display uppercase text-3xl lg:text-5xl leading-[0.95] tracking-tight text-neutral-900 dark:text-white">
                        {content['experience.title']}
                    </h2>
                </Reveal>

                <div className="flex gap-6 mt-10 mb-8 border-b border-neutral-200 dark:border-neutral-700">
                    <button
                        onClick={() => setActiveTab('work')}
                        className={`font-display uppercase text-lg lg:text-xl pb-2 border-b-2 transition ${activeTab === 'work' ? 'border-accent text-neutral-900 dark:text-white' : 'border-transparent text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
                    >
                        {content['work.title']}
                    </button>
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`font-display uppercase text-lg lg:text-xl pb-2 border-b-2 transition ${activeTab === 'education' ? 'border-accent text-neutral-900 dark:text-white' : 'border-transparent text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
                    >
                        {content['education.title']}
                    </button>
                </div>

                {activeTab === 'work' ? (
                    work.length > 0 ? (
                        <div>
                            <Timeline entries={visibleWork} />
                            {work.length > 4 && (
                                <button
                                    onClick={() => setShowAllWork(!showAllWork)}
                                    className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-light transition"
                                >
                                    {showAllWork ? 'Show less ↑' : 'Show more ↓'}
                                </button>
                            )}
                        </div>
                    ) : (
                        <p className="text-neutral-500">No experience added yet.</p>
                    )
                ) : education.length > 0 ? (
                    <Timeline entries={education} />
                ) : (
                    <p className="text-neutral-500">No education added yet.</p>
                )}

                {certificates.length > 0 && (
                    <div className="mt-12">
                        <Reveal>
                            <h3 className="font-display uppercase text-xl lg:text-2xl text-accent dark:text-accent-light mb-6">
                                {content['certificates.title']}
                            </h3>
                        </Reveal>
                        <div className="flex flex-wrap gap-4">
                            {certificates.map((cert) => (
                                <button
                                    key={cert.id}
                                    onClick={() => setSelectedCert(cert)}
                                    className="block w-36 lg:w-44 text-left"
                                >
                                    <img
                                        src={cert.image_url}
                                        alt={cert.title || 'Certificate'}
                                        className="w-full aspect-[4/3] object-cover rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm hover:opacity-90 transition"
                                        loading="lazy"
                                    />
                                    {cert.title && (
                                        <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 text-center">{cert.title}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {selectedCert && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                    onClick={() => setSelectedCert(null)}
                >
                    <button
                        onClick={() => setSelectedCert(null)}
                        className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-neutral-300 transition"
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedCert.image_url}
                            alt={selectedCert.title || 'Certificate'}
                            className="max-w-full max-h-[85vh] rounded-lg shadow-xl"
                        />
                        {selectedCert.title && (
                            <p className="text-white text-center mt-3">{selectedCert.title}</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ExperienceSection;
