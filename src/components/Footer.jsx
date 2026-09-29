import { ArrowUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05070d]/95 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl border border-white/10 bg-white/4 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-slate-400"
        >
          © 2026 Collins Gikungu. Built with care, motion, and modern web tools.
        </motion.p>

        <div className="flex items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/20"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-label="love" />
            <span>by Collins</span>
          </div>
          <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />
          <a href="/privacy" className="transition-colors hover:text-cyan-200">
            Privacy
          </a>
          <a href="/terms" className="transition-colors hover:text-cyan-200">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
