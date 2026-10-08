import Navbar from './Navbar';
import Hero from './Hero';
import ProjectsSection from './ProjectsSection';
import TechnologiesSection from './TechnologiesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ContactModal from './ContactModal';

const Portfolio: React.FC = () => {
    return (
        <div className="font-mont text-neutral-800">
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
