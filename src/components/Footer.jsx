import { ArrowUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05070d]/95 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-slate-400"
        >
          © 2026 Collins Gikungu. Built with care, motion, and modern web tools.
        </motion.p>

        <div className="flex flex-wrap items-center gap-3">
          {[
            ['Home', 'home'],
            ['Projects', 'projects'],
            ['Contact', 'contact'],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition-colors hover:bg-white/10 hover:text-cyan-100"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('home')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-slate-950 transition-colors hover:bg-cyan-200"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
          <span>Made with</span>
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          <span>by Collins</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
