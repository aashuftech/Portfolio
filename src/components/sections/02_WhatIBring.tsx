import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { BentoCard } from '@/components/ui/BentoCard';

export const WhatIBring: React.FC = () => {
  const cards = [
    {
      id: 'fullstack',
      icon: <Layers className="w-5 h-5 text-brand-cyan" />,
      title: 'Full Stack Engineering',
      description:
        'End-to-end product development across React/Next.js frontends and Node/Express backends, with clean, scalable architecture.',
    },
    {
      id: 'realtime-auth',
      icon: <ShieldCheck className="w-5 h-5 text-brand-indigo" />,
      title: 'Real-time & Auth Systems',
      description:
        'Authentication flows, real-time features, and secure REST APIs built for production reliability.',
    },
    {
      id: 'ai-apps',
      icon: <Sparkles className="w-5 h-5 text-brand-cyan" />,
      title: 'AI-Powered Applications',
      description:
        'Applying LLMs and RAG to build intelligent features on top of traditional full-stack products.',
    },
  ];

  return (
    <section className="relative py-10 sm:py-12 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10">
      <div data-cinematic-header className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
          What I bring
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            data-cinematic-card
          >
            <BentoCard className="h-full flex flex-col justify-between border-white/8 hover:border-white/20 p-6 sm:p-7">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {card.description}
                </p>
              </div>
            </BentoCard>
          </div>
        ))}
      </div>
    </section>
  );
};
