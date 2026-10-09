import Navbar from './Navbar';
import Hero from './Hero';
import ProjectsSection from './ProjectsSection';
import TechnologiesSection from './TechnologiesSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ContactModal from './ContactModal';

const Portfolio: React.FC = () => {
    return (
        <div className="relative font-mont text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900">
            <div className="fixed inset-y-0 left-0 w-16 lg:w-28 bg-gradient-to-r from-accent/15 to-transparent pointer-events-none" aria-hidden="true" />
            <div className="fixed inset-y-0 right-0 w-16 lg:w-28 bg-gradient-to-l from-accent/15 to-transparent pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <ProjectsSection />
                <TechnologiesSection />
                <AboutSection />
                <ExperienceSection />
                <ContactSection />
                <Footer />
                <ContactModal />
            </div>
        </div>
    );
};

export default Portfolio;
