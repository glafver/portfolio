import Navbar from './Navbar';
import Hero from './Hero';
import ProjectsSection from './ProjectsSection';
import TechnologiesSection from './TechnologiesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ContactModal from './ContactModal';
import Blobs from './Blobs';

const Portfolio: React.FC = () => {
    return (
        <div className="relative font-mont text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900">
            <Blobs />
            <Navbar />
            <Hero />
            <ProjectsSection />
            <TechnologiesSection />
            <AboutSection />
            <ContactSection />
            <Footer />
            <ContactModal />
        </div>
    );
};

export default Portfolio;
