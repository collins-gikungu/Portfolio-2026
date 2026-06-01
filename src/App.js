import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; // ✅ Import Preloader
import './styles/globals.css';
import './styles/animations.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showPreloader, setShowPreloader] = useState(true); // ✅ Preloader state

  // Simulate loading completion (e.g., assets, fonts, etc.)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000); // Adjust duration as needed (2s)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ✅ Render Preloader only while showPreloader is true */}
      {showPreloader && <Preloader />}

      {/* Main App Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen transition-colors duration-300 ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}
        >
          <Header 
            darkMode={darkMode} 
            toggleTheme={toggleTheme}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
          <Hero scrollToSection={scrollToSection} darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <Footer darkMode={darkMode} scrollToSection={scrollToSection} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;