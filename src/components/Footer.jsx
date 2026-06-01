import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ darkMode, scrollToSection }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 Collins Gikungu. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 dark:text-gray-400 hover:text-emerald-400 transition-colors duration-200">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-400 hover:text-emerald-400 transition-colors duration-200">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-400 hover:text-emerald-400 transition-colors duration-200">
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Collins Gikungu</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;