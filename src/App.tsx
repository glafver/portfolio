import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from './components/TechnologiesSection';
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ModalProvider } from './ModalContext';
import ContactModal from "./components/ContactModal";

function App() {

  return (
    <div className="font-monst text-neutral-800">
      <ModalProvider>
        <Navbar />
        <Hero />
        <ProjectsSection />
        <TechnologiesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <ContactModal />
      </ModalProvider>
    </div>
  );
}

export default App;
