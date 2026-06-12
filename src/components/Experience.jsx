import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const experience = [
  {
    title: 'Software Development Intern',
    company: 'Impax Business Solutions LTD',
    period: 'May 2025 - August 2025',
    type: 'Internship',
    description: [
      'Participated in SME-focused projects and supported business systems development',
      'Gained practical exposure to ERP platforms and Microsoft Dynamics 365 Business Central',
      'Contributed to solution prototyping and internal tool improvements',
    ],
  },
  {
    title: 'Freelance Web Designer',
    company: 'Remote',
    period: 'Jan 2024 - Present',
    type: 'Freelance',
    description: [
      'Designed responsive websites using HTML, CSS, and JavaScript',
      'Delivered custom web solutions for various clients',
      'Provided branding support using Adobe Creative Suite',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 overflow-hidden bg-[#05070d]/90 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-violet-300/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Workline"
          title="Real environments, practical systems, measurable growth."
          copy="The experience path is a mix of enterprise exposure, client-facing delivery, and constant refinement of how software should behave in the hands of real users."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-transparent md:block" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.58, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative md:pl-14"
              >
                <div className="absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 text-cyan-200 shadow-lg shadow-cyan-500/20 md:flex">
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <span className="mb-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-cyan-100">
                        {exp.type}
                      </span>
                      <h3 className="text-2xl font-black text-white">{exp.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
                        <span className="inline-flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-cyan-200" />
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-violet-200" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm font-black text-slate-400">
                      Phase 0{index + 1}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {exp.description.map((desc) => (
                      <div key={desc} className="flex gap-3 rounded-2xl border border-white/5 bg-slate-950/30 p-4 text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                        <span className="leading-7">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
