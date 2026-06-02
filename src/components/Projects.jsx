import { CodeXml, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Shift & Attendance Management System',
      description: 'Hospital-themed full-stack web app with React, Node.js, and PostgreSQL. Features JWT authentication, shift scheduling, and payroll logic.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
      status: 'In Development',
      type: 'Full Stack',
      github: 'https://github.com/collins-gikungu/employee-shift-attendance-system',
      demo: '#'
    },
    {
      title: 'Blockchain Voting dApp',
      description: 'Decentralized voting application prototype using Solidity smart contracts, IPFS for storage, and MetaMask integration.',
      tech: ['Solidity', 'IPFS', 'MetaMask', 'Web3.js'],
      status: 'Prototype',
      type: 'Web3',
      github: '#',
      demo: '#'
    },
    {
      title: 'Fake News Detection System',
      description: 'Machine learning project using Python and Jupyter Notebook to identify and classify fake news articles.',
      tech: ['Python', 'Jupyter', 'ML', 'NLP'],
      status: 'Completed',
      type: 'AI/ML',
      github: '#',
      demo: '#'
    },
    {
      title: 'Student Management System',
      description: 'A custom Student Management System built using AL language for Microsoft Dynamics 365 Business Central.',
      tech: ['AL', 'Dynamics 365', 'Business Central'],
      status: 'Ongoing',
      type: 'Enterprise',
      github: 'https://github.com/collins-gikungu/Student-Management-System-',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                  {project.type}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a href={project.github} className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                  <CodeXml className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a href={project.demo} className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
