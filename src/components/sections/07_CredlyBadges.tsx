import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Shield } from 'lucide-react';
import { credlyBadgesData } from '@/data/certifications';
import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';

export const CredlyBadgesSection: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-12 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div data-cinematic-header className="mb-7 sm:mb-8">
        <span data-cinematic-eyebrow className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
          Verified Digital Badges
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
          Credly Badges
        </h2>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {credlyBadgesData.map((badge) => (
          <div
            key={badge.id}
            data-cinematic-card
          >
            <BentoCard className="h-full flex flex-col justify-between border-white/8 hover:border-white/20 p-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                    {badge.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/5">
                    {badge.category}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-2 tracking-tight">
                  {badge.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-brand-emerald font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(badge.verifyUrl, '_blank')}
                  className="text-xs font-mono"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </BentoCard>
          </div>
        ))}
      </div>
    </section>
  );
};
