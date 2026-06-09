import { ArrowUpRight, CodeXml, ExternalLink, Layers3 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Shift & Attendance Management System',
    description: 'Hospital-themed full-stack app with JWT auth, shift scheduling, attendance logic, and payroll-ready workflows.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    status: 'In Development',
    type: 'Full Stack',
    github: 'https://github.com/collins-gikungu/employee-shift-attendance-system',
    demo: '#',
    accent: 'from-cyan-300 to-blue-500',
  },
  {
    title: 'Blockchain Voting dApp',
    description: 'Prototype for tamper-aware voting using Solidity smart contracts, IPFS storage patterns, and wallet-first interaction.',
    tech: ['Solidity', 'IPFS', 'MetaMask', 'Web3.js'],
    status: 'Prototype',
    type: 'Web3',
    github: '#',
    demo: '#',
    accent: 'from-violet-300 to-fuchsia-500',
  },
  {
    title: 'Fake News Detection System',
    description: 'Machine learning workflow built in Python to classify article credibility with NLP-oriented feature handling.',
    tech: ['Python', 'Jupyter', 'ML', 'NLP'],
    status: 'Completed',
    type: 'AI / ML',
    github: '#',
    demo: '#',
    accent: 'from-emerald-300 to-cyan-400',
  },
  {
    title: 'Student Management System',
    description: 'Business Central solution built with AL for structured student records, workflows, and enterprise data handling.',
    tech: ['AL', 'Dynamics 365', 'Business Central'],
    status: 'Ongoing',
    type: 'Enterprise',
    github: 'https://github.com/collins-gikungu/Student-Management-System-',
    demo: '#',
    accent: 'from-amber-200 to-violet-400',
  },
  {
    title: 'Spin Cycle Tracker App',
    description: 'Mobile-first React Native app that keeps records of my exercise and cardio sessions with Workout logging, analytics, dashboard metrics and API integrations.',
    tech: ['React', 'Node.js + Express', 'PostgreSQL', 'JWT'],
    status: 'Completed',
    type: 'Full Stack',
    github: 'https://github.com/collins-gikungu/spin-tracker-app',
    demo: '#',
    accent: 'from-red-300 to-rose-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 overflow-hidden bg-[#05070d]/94 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Project Lab"
          title="Selected builds with different kinds of pressure."
          copy="Each project has a different center of gravity: operations, trust, intelligence, or enterprise structure. The common thread is clear interaction design wrapped around useful logic."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[330px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
              <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-15 blur-3xl transition-opacity group-hover:opacity-25`} />

              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className={`rounded-full bg-gradient-to-r ${project.accent} px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-950`}>
                        {project.type}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-300">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="max-w-xl text-2xl font-black leading-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/50 text-cyan-100 sm:flex">
                    <Layers3 className="h-6 w-6" />
                  </div>
                </div>

                <p className="text-base leading-8 text-slate-300">{project.description}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-sm font-bold text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-black text-cyan-100 transition-colors hover:bg-cyan-300/20"
                  >
                    <CodeXml className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white transition-colors hover:bg-white/15"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <span className="ml-auto hidden items-center gap-2 text-sm font-black text-slate-500 transition-colors group-hover:text-cyan-200 sm:inline-flex">
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
