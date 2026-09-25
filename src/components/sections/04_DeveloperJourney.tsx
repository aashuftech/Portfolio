import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, CheckCircle2 } from 'lucide-react';
import { educationData } from '@/data/education';
import { BentoCard } from '@/components/ui/BentoCard';

export const DeveloperJourney: React.FC = () => {
  return (
    <section id="journey" className="relative py-10 sm:py-12 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10 w-full">
      {/* Section Header */}
      <div data-cinematic-header className="mb-7 sm:mb-8">
        <span data-cinematic-eyebrow className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
          Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Education & Developer Journey
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Education Card */}
        <div
          data-cinematic-card
          className="lg:col-span-7"
        >
          <BentoCard className="h-full border-white/8 hover:border-white/20 p-5 sm:p-7 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-brand-cyan shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider block">
                  Degree & Education
                </span>
                <h3 className="text-xl font-display font-bold text-white break-words">
                  {educationData[0].degree}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-5 text-sm text-slate-300 font-mono">
              <span className="text-white font-semibold break-words">{educationData[0].institution}</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-brand-cyan">Class of {educationData[0].year}</span>
            </div>

            <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6 break-words">
              {educationData[0].description}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-white/8">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Core Foundations:
              </span>
              {educationData[0].highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="break-words">{hl}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Current Focus Card */}
        <div
          data-cinematic-card
          className="lg:col-span-5"
        >
          <BentoCard className="h-full border-white/8 hover:border-white/20 p-5 sm:p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-indigo/15 border border-brand-indigo/30 text-brand-indigo shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider block">
                    Current Focus
                  </span>
                  <h3 className="text-lg font-display font-bold text-white break-words">
                    Full Stack Developer
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6 break-words">
                Actively seeking entry-level / junior Full-Stack and MERN Developer roles. Prepared with production-focused projects, clean Git workflows, REST API design, and AI integration experience.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase block">Primary Domain:</span>
                <p className="text-xs text-brand-cyan font-mono font-medium break-words">
                  React.js &bull; Next.js &bull; Node.js &bull; Express &bull; MongoDB &bull; TypeScript &bull; LLM/RAG
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Open to Full-Time Roles</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
