import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from './components/TechnologiesSection';
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="font-monst">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <TechnologiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
