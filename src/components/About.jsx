import { MapPin, Award, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Software Development Graduate</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I’m a full stack developer focused on building reliable, scalable digital products using modern web and blockchain technologies.
              I enjoy working across the entire development lifecycle from designing clean user interfaces to implementing secure, efficient backend systems. My approach emphasizes maintainability, performance and real-world usability.

            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
             I’m particularly interested in decentralization and building solutions that empower users and I enjoy exploring how blockchain and Web3 innovations can reshape industries. I’ve worked with technologies such as React, Node.js, PostgreSQL and Web3 tools, building systems that solve practical problems and scale beyond simple prototypes. I’m constantly refining my skills and exploring better ways to turn complex ideas into well structured software.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Ruai, Nairobi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>KCA University</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>Graduated 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-emerald-400" />
                <span>Full Stack Dev</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl`}
          >
            <h4 className="text-xl font-semibold mb-6">Interests & Passions</h4>
            <div className="space-y-4">
              {[
                'Web Development',
                'Blockchain & Smart Contracts', 
                'Embedded Systems',
                'Creative Design',
                'AI & Automation',
                'Gaming'
              ].map((interest, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-400">{interest}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;