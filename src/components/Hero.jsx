import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Terminal,
} from 'lucide-react';
import profileImage from '../assets/images/collins-profile.jpg';
import Particles from './Particles';

const rotatingLines = [
  'clean code architecture',
  'AI-ready interfaces',
  'Web3 product systems',
  'scalable full-stack apps',
];

const techStack = ['React', 'Node', 'Web3', 'Tailwind', 'APIs'];

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/collinsgikungu' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/collins-gikungu-' },
  { icon: Mail, label: 'Email', url: 'mailto:gikungutech2002@gmail.com' },
  { icon: Phone, label: 'Call', url: 'tel:0755697418' },
];

const Hero = ({ scrollToSection }) => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((current) => (current + 1) % rotatingLines.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'CollinsGikungu_UpdatedCV_Web3.pdf';
    link.download = 'CollinsGikungu_UpdatedCV_Web3.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#05070d] px-4 pb-24 pt-24 text-white sm:px-6 lg:px-8"
    >
      <Particles />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,0.52),transparent_28%),radial-gradient(circle_at_88%_30%,rgba(20,184,166,0.28),transparent_24%),linear-gradient(135deg,rgba(2,6,23,0.5),rgba(0,0,0,0.95)_55%)]" />
      <div className="absolute left-0 top-24 h-56 w-full -skew-y-12 bg-gradient-to-r from-violet-700/70 via-fuchsia-500/30 to-transparent blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Full Stack & Web3 Developer
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{' '}
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent sm:inline">
              Collins.
            </span>
          </h1>

          <div className="mt-8 max-w-2xl font-mono text-2xl leading-relaxed text-violet-200 sm:text-3xl">
            Transforming ideas into reality
          </div>

          <div className="mt-5 flex min-h-[44px] items-center gap-3 text-xl font-bold text-white sm:text-2xl">
            <Terminal className="h-6 w-6 text-amber-300" />
            <motion.span
              key={rotatingLines[lineIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center"
            >
              {rotatingLines[lineIndex]}
              <span className="ml-1 h-7 w-[3px] animate-pulse bg-amber-300" />
            </motion.span>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build polished web experiences, smart backend systems, and blockchain-friendly products that turn ambitious ideas into reliable software.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-colors hover:bg-cyan-300"
            >
              View My Work
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={downloadResume}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {socialLinks.map(({ icon: Icon, label, url }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 shadow-lg shadow-black/20 backdrop-blur transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md perspective-1000"
        >
          <motion.div
            whileHover={{ rotateX: 4, rotateY: -5, y: -8 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative overflow-hidden rounded-[28px] border border-cyan-300/40 bg-slate-900/78 p-4 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl sm:p-5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_95%_90%,rgba(139,92,246,0.28),transparent_32%)]" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-black text-slate-100">Collins Gikungu</h2>
                  <p className="mt-1 text-sm font-semibold text-violet-200">Software Developer</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-cyan-200">
                  <Code2 className="h-6 w-6" />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40"
              >
                <img
                  src={profileImage}
                  alt="Collins Gikungu"
                  className="h-80 w-full object-cover object-center sm:h-96"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5">
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2.8, delay: index * 0.18, repeat: Infinity, ease: 'easeInOut' }}
                        className="rounded-full border border-white/10 bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-300" />
                    </span>
                    <p className="text-sm font-bold text-slate-100">Available for work</p>
                  </div>
                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    Nairobi, Kenya
                  </p>
                </div>
                <motion.a
                  href="mailto:gikungutech2002@gmail.com"
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Send email"
                  className="inline-flex min-h-[72px] items-center justify-center rounded-2xl bg-violet-500 px-6 text-white shadow-lg shadow-violet-600/25 transition-colors hover:bg-violet-400"
                >
                  <Send className="h-6 w-6" />
                </motion.a>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  ['20+', 'Projects'],
                  ['3+', 'Years'],
                  ['100%', 'Focus'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/35 p-3">
                    <p className="text-xl font-black text-cyan-200">{value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-16 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-cyan-100 shadow-xl shadow-black/30 backdrop-blur sm:flex"
          >
            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-300" />
            Production minded
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
