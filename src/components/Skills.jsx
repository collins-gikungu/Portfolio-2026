import { Code, Database, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const skills = {
    frontend: [
      { name: 'React.js', icon: '⚛️', level: 90 },
      { name: 'JavaScript', icon: '🟨', level: 85 },
      { name: 'HTML5', icon: '🧱', level: 95 },
      { name: 'CSS3', icon: '🎨', level: 90 },
      { name: 'Tailwind', icon: '💨', level: 85 }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', level: 80 },
      { name: 'Python', icon: '🐍', level: 75 },
      { name: 'PostgreSQL', icon: '🐘', level: 70 },
      { name: 'Express.js', icon: '🚂', level: 75 },
      { name: 'REST APIs', icon: '🔗', level: 80 }
    ],
    web3: [
      { name: 'Solidity', icon: '💎', level: 80 },
      { name: 'Ethereum', icon: '⟠', level: 75 },
      { name: 'Web3.js', icon: '🌐', level: 70 },
      { name: 'MetaMask', icon: '🦊', level: 65 },
      { name: 'IPFS', icon: '📦', level: 70 }
    ],
    tools: [
      { name: 'Git', icon: '📝', level: 85 },
      { name: 'VS Code', icon: '💻', level: 90 },
      { name: 'Figma', icon: '🎯', level: 75 },
      { name: 'Photoshop', icon: '🖼️', level: 70 },
      { name: 'Arduino', icon: '🔌', level: 65 }
    ]
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical Skills
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center mb-6">
                {category === 'frontend' && <Code className="w-6 h-6 text-emerald-400 mr-3" />}
                {category === 'backend' && <Database className="w-6 h-6 text-emerald-400 mr-3" />}
                {category === 'web3' && <span className="text-emerald-400 mr-3 text-xl">⟠</span>}
                {category === 'tools' && <Settings className="w-6 h-6 text-emerald-400 mr-3" />}
                <h3 className="text-xl font-semibold capitalize">{category}</h3>
              </div>
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;