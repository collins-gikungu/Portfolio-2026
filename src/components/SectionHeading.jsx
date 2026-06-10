import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, copy, align = 'center' }) => {
  const isLeft = align === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-12 ${isLeft ? 'text-left' : 'mx-auto max-w-3xl text-center'}`}
    >
      <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {copy && (
        <p className={`mt-5 text-base leading-8 text-slate-300 sm:text-lg ${isLeft ? 'max-w-2xl' : ''}`}>
          {copy}
        </p>
      )}
      <div className={`mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 ${isLeft ? '' : 'mx-auto'}`} />
    </motion.div>
  );
};

export default SectionHeading;
