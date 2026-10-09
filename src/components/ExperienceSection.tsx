import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaListUl } from 'react-icons/fa';
import { useSiteContent } from '../hooks/useSiteContent';
import { useTimeline } from '../hooks/useTimeline';
import { useCertificates } from '../hooks/useCertificates';
import { useAdmin } from '../admin/AdminContext';
import EditButton from '../admin/EditButton';
import type { TimelineEntry } from '../types';

const Timeline: React.FC<{ entries: TimelineEntry[] }> = ({ entries }) => (
    <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" />
        {entries.map((entry) => (
            <div key={entry.id} className="relative pb-8">
                <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full bg-accent border-2 border-white dark:border-neutral-900" aria-hidden="true" />
                <div className="font-display text-lg text-neutral-900 dark:text-white">{entry.title}</div>
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

    const education = timeline.filter((t) => t.type === 'education');
    const work = timeline.filter((t) => t.type !== 'education');

    return (
        <section className="relative px-6 lg:px-8 py-20 lg:py-28">
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
                <Fade direction="up" triggerOnce duration={600}>
                    <h2 className="font-display uppercase text-3xl lg:text-5xl leading-[0.95] tracking-tight text-neutral-900 dark:text-white">
                        {content['experience.title']}
                    </h2>
                </Fade>

                {education.length > 0 && (
                    <div className="mt-12">
                        <Fade direction="up" triggerOnce duration={600}>
                            <h3 className="font-display uppercase text-xl lg:text-2xl text-accent dark:text-accent-light mb-6">
                                {content['education.title']}
                            </h3>
                        </Fade>
                        <Timeline entries={education} />
                    </div>
                )}

                {work.length > 0 && (
                    <div className="mt-12">
                        <Fade direction="up" triggerOnce duration={600}>
                            <h3 className="font-display uppercase text-xl lg:text-2xl text-accent dark:text-accent-light mb-6">
                                {content['work.title']}
                            </h3>
                        </Fade>
                        <Timeline entries={work} />
                    </div>
                )}

                {certificates.length > 0 && (
                    <div className="mt-12">
                        <Fade direction="up" triggerOnce duration={600}>
                            <h3 className="font-display uppercase text-xl lg:text-2xl text-accent dark:text-accent-light mb-6">
                                {content['certificates.title']}
                            </h3>
                        </Fade>
                        <div className="flex flex-wrap gap-4">
                            {certificates.map((cert) => (
                                <a
                                    key={cert.id}
                                    href={cert.image_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-36 lg:w-44"
                                >
                                    <img
                                        src={cert.image_url}
                                        alt={cert.title || 'Certificate'}
                                        className="w-full aspect-[4/3] object-cover rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm"
                                        loading="lazy"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ExperienceSection;
