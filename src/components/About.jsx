import { Award, Calendar, MapPin, Sparkles, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const facts = [
  { icon: MapPin, label: 'Based in', value: 'Ruai, Nairobi' },
  { icon: Award, label: 'Education', value: 'KCA University' },
  { icon: Calendar, label: 'Milestone', value: 'Graduated 2025' },
  { icon: User, label: 'Mode', value: 'Full Stack Dev' },
];

const interests = [
  'Web systems',
  'Smart contracts',
  'Automation',
  'Embedded logic',
  'Product design',
  'AI workflows',
];

const About = () => {
  return (
    <section id="about" className="relative z-10 overflow-hidden bg-[#05070d]/92 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Origin Story"
          title="A builder with product instincts and engineering range."
          copy="I move comfortably between interface polish, backend structure, and Web3 experimentation, with a bias toward software that feels useful the first time someone touches it."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl" />

            <div className="relative">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Practical software, expressive interfaces
              </div>

              <h3 className="text-3xl font-black leading-tight text-white">
                I turn complex ideas into systems people can understand, trust, and use.
              </h3>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                <p>
                  I am a full stack developer focused on building reliable, scalable digital products using modern web and blockchain technologies. I enjoy working across the development lifecycle, from designing clean interfaces to implementing secure, efficient backend systems.
                </p>
                <p>
                  My work leans toward maintainability, performance, and real-world usability. I am especially interested in decentralization and how Web3 products can give users more control while still feeling polished and approachable.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {facts.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-white/10 bg-slate-950/45 p-5 shadow-xl shadow-black/20 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition-colors group-hover:bg-cyan-300/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-500">{label}</p>
                  <p className="mt-2 text-lg font-black text-white">{value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h4 className="text-xl font-black text-white">Current Creative Gravity</h4>
                <span className="rounded-full bg-violet-400/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-violet-100">
                  Live mix
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.2, delay: index * 0.12, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
