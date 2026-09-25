import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '@/data/certifications';
import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-10 sm:py-12 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div data-cinematic-header className="mb-7 sm:mb-8">
        <span data-cinematic-eyebrow className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
          Verified Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Certifications & Assessments
        </h2>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            data-cinematic-card
          >
            <BentoCard className="h-full flex flex-col justify-between border-white/8 hover:border-white/20 p-6 sm:p-7 group overflow-hidden">
              <div>
                {/* Certificate Image Preview */}
                {cert.image && (
                  <div
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-white/10 mb-5 flex items-center justify-center"
                    data-parallax-image
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] group-hover:-translate-y-0.5 transition-transform duration-500 ease-out"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-brand-cyan tracking-wide font-medium">
                    {cert.issuer}
                  </span>
                  {cert.tag && (
                    <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/5">
                      {cert.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-white mb-3 tracking-tight">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-6 border-t border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-brand-emerald font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified</span>
                </div>

                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>
            </BentoCard>
          </div>
        ))}
      </div>
    </section>
  );
};
