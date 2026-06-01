import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 ${!isVisible && 'pointer-events-none'}`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          animate={{
            textShadow: [
              '0 0 8px rgba(52, 211, 153, 0.5)',
              '0 0 15px rgba(16, 185, 129, 0.7)',
              '0 0 8px rgba(52, 211, 153, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.div
          className="mt-8 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto w-64"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;