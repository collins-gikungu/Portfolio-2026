import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, Twitter, Instagram } from 'lucide-react';
import profileImage from '../assets/images/collins-profile.jpg';
import Particles from './Particles';
import TypingEffect from './TypingEffect'; 

const Hero = ({ scrollToSection, darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32 md:pb-40 bg-white dark:bg-transparent">
      
       <Particles /> 

      {/* Glowy orb effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/50 dark:bg-purple-400/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-500/50 dark:bg-blue-400/10 blur-3xl animate-pulse" />
      
      {/* Animated gradient background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/10 dark:from-purple-900/20 dark:via-transparent dark:to-blue-900/20"
      />
      
      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAzOC4zM0MzMC4xMjUgMzguMzMgMzguMzMgMzAuMTI1IDM4LjMzIDIwQzM4LjMzIDkuODc1IDMwLjEyNSAxLjY3IDIwIDEuNjdDOS44NzUgMS42NyAxLjY3IDkuODc1IDEuNjcgMjBDMS42NyAzMC4xMjUgOS44NzUgMzguMzMgMjAgMzguMzNaTTIwIDQwQzMxLjA0NiA0MCA0MCAzMS4wNDYgNDAgMjBDNDAgOC45NTQgMzEuMDQ2IDAgMjAgMEM4Ljk1NCAwIDAgOC45NTQgMCAyMEMwIDMxLjA0NiA4Ljk1NCA0MCAyMCA0MFoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')]"></div>
      </div>
      <div className="text-center z-10 max-w-6xl mx-auto px-4">

        {/* Profile image with enhanced glow effects */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          className="mb-12 glow-hover"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 dark:from-purple-500 dark:to-blue-500 p-1 shadow-xl relative">
            <div className="absolute inset-0 rounded-full bg-emerald-400/30 dark:bg-purple-400/30 blur-md animate-pulse" />
            <img 
              src={profileImage} 
              alt="Collins Gikungu" 
              className="w-full h-full rounded-full object-cover border-4 border-white/20 dark:border-gray-900/20 relative z-10"
            />
          </div>
        </motion.div>
        
        {/* Updated Title with TypingEffect Component */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 overflow-hidden"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            <TypingEffect />
          </span>
        </motion.h1>
        
        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-300 mb-8"
        >
          <span className="typing-text">Full Stack & Web3 Developer crafting modern, scalable digital products</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-medium text-gray-950 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          <span className="typing-text">Turning complex ideas into usable, scalable software.</span>
        </motion.div>

        {/* Animated buttons with glow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('projects')}
            className="glow-element px-8 py-4 translateY(-2px) bg-gradient-to-r from-indigo-600 to-violet-700 dark:from-purple-600 dark:to-blue-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-violet-600 dark:hover:from-purple-700 dark:hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-emerald-300/30 dark:hover:shadow-purple-500/30"
          >
            View My Work
          </motion.button>
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'CollinsGikungu_UpdatedCV_Web3.pdf';
              link.download = 'CollinsGikungu_UpdatedCV_Web3.pdf';
              link.click();
            }}
            className={`glow-element px-8 py-4 translateY(-2px) border-2 border-indigo-600 dark:border-purple-500 text-indigo-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg`}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </motion.div>

        {/* Social icons with enhanced glow effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: <Github className="w-6 h-6" />, url: 'https://github.com/collinsgikungu' },
            { icon: <Linkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/collins-gikungu-' },
            { icon: <Mail className="w-6 h-6" />, url: 'mailto:gikungutech2002@gmail.com' },
            { icon: <Phone className="w-6 h-6" />, url: 'tel:0755697418' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-element text-indigo-500 dark:text-purple-400 hover:text-violet-500 dark:hover:text-blue-400 text-2xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;