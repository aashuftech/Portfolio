import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { BentoCard } from '@/components/ui/BentoCard';

export const SkillsMatrix: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4 text-brand-cyan" />,
    backend: <Server className="w-4 h-4 text-brand-indigo" />,
    database: <Database className="w-4 h-4 text-emerald-400" />,
    'auth-payments': <ShieldCheck className="w-4 h-4 text-amber-400" />,
    'tools-deployment': <Wrench className="w-4 h-4 text-blue-400" />,
    genai: <Sparkles className="w-4 h-4 text-violet-400" />,
  };

  return (
    <section id="skills" className="relative py-10 sm:py-12 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10 scroll-mt-20 w-full">
      {/* Section Header */}
      <div data-cinematic-header className="mb-7 sm:mb-8">
        <span data-cinematic-eyebrow className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
          Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Skills & Technical Expertise
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.id}
            data-cinematic-card
          >
            <BentoCard className="h-full flex flex-col justify-between border-white/8 hover:border-white/20 p-5 sm:p-7">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 shrink-0">
                    {categoryIcons[cat.id]}
                  </div>
                  <h3 className="text-base font-display font-bold text-white tracking-tight break-words">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 font-sans mb-5 leading-relaxed break-words">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-chip text-xs font-mono text-slate-200 hover:text-brand-cyan hover:bg-white/10 hover:scale-[1.02] transition-all duration-200 inline-block select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>
          </div>
        ))}
      </div>
    </section>
  );
};
