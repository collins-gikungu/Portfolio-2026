import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = ({ darkMode }) => {
  const experience = [
    {
      title: 'Software Development Intern',
      company: 'Impax Business Solutions LTD',
      period: 'May 2025 - August 2025',
      type: 'Internship',
      description: [
        'Participated in SME-focused projects and supported business systems development',
        'Gained practical exposure to ERP platforms and Microsoft Dynamics 365 Business Central',
        'Contributed to solution prototyping and internal tool improvements'
      ]
    },
    {
      title: 'Freelance Web Designer',
      company: 'Remote',
      period: 'Jan 2024 - Present',
      type: 'Freelance',
      description: [
        'Designed responsive websites using HTML, CSS, and JavaScript',
        'Delivered custom web solutions for various clients',
        'Provided branding support using Adobe Creative Suite'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Experience
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm mt-4 md:mt-0 ${
                  exp.type === 'Internship' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                }`}>
                  {exp.type}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;