import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Code2,
  FolderGit2,
  Home,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  User,
  X,
} from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Header = ({
  darkMode,
  toggleTheme,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.15 }}
      className="absolute inset-x-0 top-5 z-30 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white shadow-2xl shadow-black/25 backdrop-blur-2xl sm:px-5">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-300/10 via-violet-400/10 to-transparent" />

          <div className="relative flex items-center justify-between gap-4">
            <button
              onClick={() => handleNavClick('home')}
              className="group flex min-w-0 items-center gap-3"
              aria-label="Go to home"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-500/10 transition-colors group-hover:bg-cyan-300/20">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="hidden min-w-0 sm:block">
                <span className="block text-left text-lg font-black leading-tight text-white">
                  Collins Gikungu
                </span>
                <span className="block text-left text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
                  Portfolio
                </span>
              </span>
            </button>

            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
              {navLinks.map(({ id, label, icon: Icon }) => {
                const isActive = activeSection === id;

                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      isActive ? 'text-slate-950' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeHeroNav"
                        className="absolute inset-0 rounded-full bg-cyan-300"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <Icon className="relative h-4 w-4" />
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="relative flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-cyan-100 transition-colors hover:bg-white/15"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/15 lg:hidden"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden lg:hidden"
              >
                <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 sm:grid-cols-2">
                  {navLinks.map(({ id, label, icon: Icon }) => {
                    const isActive = activeSection === id;

                    return (
                      <button
                        key={id}
                        onClick={() => handleNavClick(id)}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-bold transition-colors ${
                          isActive
                            ? 'bg-cyan-300 text-slate-950'
                            : 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
