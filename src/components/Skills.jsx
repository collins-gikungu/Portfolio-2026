import { ArrowDown, Code, Database, Settings, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code,
    accent: 'from-cyan-300 to-blue-400',
    skills: [
      ['React.js', 90],
      ['JavaScript', 85],
      ['HTML5 / CSS3', 92],
      ['Tailwind CSS', 88],
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    accent: 'from-emerald-300 to-cyan-400',
    skills: [
      ['Node.js', 80],
      ['Express APIs', 78],
      ['PostgreSQL', 72],
      ['Python', 75],
    ],
  },
  {
    title: 'Web3',
    icon: ShieldCheck,
    accent: 'from-violet-300 to-fuchsia-400',
    skills: [
      ['Solidity', 80],
      ['Ethereum', 75],
      ['Web3.js', 70],
      ['IPFS', 70],
    ],
  },
  {
    title: 'Tools',
    icon: Settings,
    accent: 'from-amber-200 to-cyan-300',
    skills: [
      ['Git', 85],
      ['VS Code', 90],
      ['Figma', 75],
      ['Wordpress', 65],
    ],
  },
];

const orbitItems = ['React', 'Node', 'Web3', 'SQL', 'APIs', 'UI'];

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 overflow-x-clip bg-[#05070d]/88 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Capability Mesh"
              title="A stack that can move from idea to shipped interface."
              copy="The mix is intentionally broad: enough frontend craft to make products feel sharp, enough backend discipline to make them reliable, and enough Web3 curiosity to build beyond ordinary forms."
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative mx-auto mt-10 aspect-square max-w-sm rounded-full border border-white/10 bg-white/4 backdrop-blur-xl"
            >
              <div className="absolute inset-10 rounded-full border border-cyan-300/20" />
              <div className="absolute inset-20 rounded-full border border-violet-300/20" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                {orbitItems.map((item, index) => {
                  const angle = (index / orbitItems.length) * Math.PI * 2;
                  const x = Math.cos(angle) * 42;
                  const y = Math.sin(angle) * 42;

                  return (
                    <span
                      key={item}
                      className="absolute left-1/2 top-1/2 rounded-full border border-cyan-300/20 bg-slate-950/80 px-3 py-2 text-xs font-black text-cyan-100 shadow-lg shadow-black/30"
                      style={{ transform: `translate(calc(-50% + ${x}%), calc(-50% + ${y}%))` }}
                    >
                      {item}
                    </span>
                  );
                })}
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-7 text-center shadow-2xl shadow-cyan-950/30">
                  <p className="text-4xl font-black text-white">Full</p>
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Stack</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 hidden items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400 lg:flex">
              <ArrowDown className="h-4 w-4 animate-bounce text-cyan-200" />
              Scroll through the stack
            </div>
          </div>

          <div className="relative flex flex-col gap-5 pb-6 lg:gap-16">
            {skillGroups.map(({ title, icon: Icon, accent, skills }, groupIndex) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
                viewport={{ once: true }}
                className="relative rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/35 backdrop-blur-xl lg:sticky lg:top-28 lg:min-h-[320px]"
                style={{ zIndex: groupIndex + 1 }}
              >
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-gradient-to-r ${accent}`} />
                <span className="absolute right-6 top-6 text-6xl font-black leading-none text-white/[0.035]">0{groupIndex + 1}</span>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-slate-950`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-black text-white">{title}</h3>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">Layer 0{groupIndex + 1}</span>
                </div>

                <div className="space-y-5">
                  {skills.map(([name, level], index) => (
                    <div key={name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-bold text-slate-200">{name}</span>
                        <span className="font-black text-cyan-200">{level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          transition={{ duration: 0.9, delay: index * 0.08 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${accent}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
