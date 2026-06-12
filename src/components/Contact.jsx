import { Camera, CodeXml, Mail, MapPin, Phone, Send, UserRoundSearch } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'gikungutech2002@gmail.com', href: 'mailto:gikungutech2002@gmail.com' },
  { icon: Phone, label: 'Phone', value: '0755697418', href: 'tel:0755697418' },
  { icon: MapPin, label: 'Location', value: 'Ruai, Nairobi, Kenya', href: '#contact' },
];

const socials = [
  { icon: CodeXml, label: 'Code profile', href: 'https://github.com/collinsgikungu' },
  { icon: UserRoundSearch, label: 'Professional profile', href: 'https://www.linkedin.com/in/collins-gikungu-' },
  { icon: Camera, label: 'Visual profile', href: 'https://www.instagram.com/k.i.n.g_f.u.r.y/' },
];

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 overflow-hidden bg-[#05070d]/94 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Open Channel"
          title="Have a build, idea, or collaboration in mind?"
          copy="Send the signal. I am open to development work, creative product collaborations, and conversations around full-stack or Web3 systems."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.58 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8"
          >
            <h3 className="text-2xl font-black text-white">Connection Points</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I like clear briefs, ambitious ideas, and teams that care about the details. Reach me directly through any channel below.
            </p>

            <div className="mt-8 grid gap-4">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-4 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 transition-colors group-hover:bg-cyan-300/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black uppercase tracking-wider text-slate-500">{label}</span>
                    <span className="block break-words font-bold text-slate-200">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -5, scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-slate-100 transition-colors hover:border-cyan-300/50 hover:text-cyan-100"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.58 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[30px] border border-cyan-300/20 bg-slate-950/60 p-6 shadow-2xl shadow-cyan-950/25 backdrop-blur-xl sm:p-8"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-400/15 blur-3xl" />
            <form className="relative grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-300">
                  Name
                  <input
                    type="text"
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/60"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-300">
                  Email
                  <input
                    type="email"
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/60"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Message
                <textarea
                  rows="7"
                  className="resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/60"
                  placeholder="Tell me what you want to build..."
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-200"
              >
                <Send className="h-5 w-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
