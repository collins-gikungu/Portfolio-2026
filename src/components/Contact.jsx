import { Camera, CodeXml, Mail, MapPin, Phone, UserRoundSearch } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In Touch
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:gikungu2002@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-emerald-400">
                    gikungutech2002@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:0755697418" className="text-gray-600 dark:text-gray-400 hover:text-emerald-400">
                    0755697418
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Ruai, Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="https://github.com/collinsgikungu" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg transition-colors duration-200`}>
                <CodeXml className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/collins-gikungu-" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg transition-colors duration-200`}>
                <UserRoundSearch className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/k.i.n.g_f.u.r.y/" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg transition-colors duration-200`}>
                <Camera className="w-6 h-6" />
              </a>  
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl`}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:border-emerald-400 focus:outline-none transition-colors duration-200`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:border-emerald-400 focus:outline-none transition-colors duration-200`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:border-emerald-400 focus:outline-none transition-colors duration-200`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
