import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export interface HeroSectionProps {
  isReady?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isReady = true }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-2 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10 overflow-hidden w-full"
    >
      {/* TWO-COLUMN HERO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT COLUMN: Editorial Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
          {/* Large Editorial Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="text-fluid-hero text-white mb-6 tracking-[-0.025em] font-display w-full"
          >
            Building modern, scalable web products with the{' '}
            <span className="inline-block font-semibold">
              {[
                { word: 'MERN', startIndex: 0 },
                { word: 'Stack.', startIndex: 5 },
              ].map((group, groupIdx) => (
                <span key={groupIdx} className="inline-block whitespace-nowrap">
                  {groupIdx > 0 && <span className="inline-block w-[0.28em]">&nbsp;</span>}
                  {group.word.split('').map((char, charIdx) => {
                    const globalIdx = group.startIndex + charIdx;
                    const assemblyOffsets = [
                      { x: -14, y: -16, rotate: -8, scale: 1.35, blur: 8 },
                      { x: 10, y: 18, rotate: 7, scale: 1.25, blur: 6 },
                      { x: -12, y: -14, rotate: -6, scale: 1.3, blur: 7 },
                      { x: 16, y: 15, rotate: 8, scale: 1.4, blur: 8 },
                      { x: 0, y: 0, rotate: 0, scale: 1.0, blur: 0 },
                      { x: -14, y: 16, rotate: -7, scale: 1.3, blur: 7 },
                      { x: 12, y: -18, rotate: 6, scale: 1.35, blur: 8 },
                      { x: -10, y: 14, rotate: -5, scale: 1.25, blur: 6 },
                      { x: 14, y: -12, rotate: 7, scale: 1.3, blur: 7 },
                      { x: -8, y: 15, rotate: -4, scale: 1.2, blur: 5 },
                      { x: 10, y: -10, rotate: 5, scale: 1.35, blur: 6 },
                    ];
                    const offset = assemblyOffsets[globalIdx] || {
                      x: 0,
                      y: -12,
                      rotate: 5,
                      scale: 1.3,
                      blur: 6,
                    };

                    return (
                      <motion.span
                        key={charIdx}
                        initial={{
                          opacity: 0,
                          x: offset.x,
                          y: offset.y,
                          rotate: offset.rotate,
                          scale: offset.scale,
                          filter: `blur(${offset.blur}px)`,
                        }}
                        animate={
                          isReady
                            ? {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1,
                                filter: 'blur(0px)',
                              }
                            : {
                                opacity: 0,
                                x: offset.x,
                                y: offset.y,
                                rotate: offset.rotate,
                                scale: offset.scale,
                                filter: `blur(${offset.blur}px)`,
                              }
                        }
                        transition={{
                          type: 'spring',
                          damping: 18,
                          stiffness: 240,
                          delay: 0.15 + globalIdx * 0.045,
                        }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-indigo-400 font-semibold will-change-transform"
                        style={{
                          backgroundSize: '1100% 100%',
                          backgroundPosition: `${(globalIdx / 10) * 100}% 0`,
                        }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </span>
          </motion.h1>

          {/* Concise Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-fluid-body text-slate-300 font-sans mb-8 leading-relaxed max-w-xl break-words"
          >
            {siteConfig.bio}
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-3.5 sm:gap-4 flex-wrap"
          >
            <Button
              variant="primary"
              size="md"
              onClick={() => window.open(siteConfig.resumeUrl, '_blank')}
              className="h-11 font-medium px-6 rounded-xl text-sm"
            >
              <span>Resume</span>
            </Button>

            {/* Social Icons */}
            <div className="flex items-center gap-2 text-slate-400">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="h-11 w-11 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all flex items-center justify-center"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="h-11 w-11 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all flex items-center justify-center"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Profile Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          data-parallax-hero
        >
          <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm lg:max-w-md aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl p-2 sm:p-2.5 bg-gradient-to-b from-white/[0.04] to-transparent group">
            {/* Inner Image Container */}
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
              {!imgError ? (
                <img
                  src="/assets/images/profile/IMG-20260112-WA0015.jpg"
                  alt="Aashish Prajapati"
                  className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Elegant Fallback Avatar Container */
                <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-900 to-slate-950 w-full h-full">
                  <div className="w-24 h-24 rounded-2xl bg-brand-indigo/20 border border-brand-indigo/30 flex items-center justify-center text-3xl font-display font-bold text-brand-cyan mb-4 shadow-glass-glow">
                    AP
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {siteConfig.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {siteConfig.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* SINGLE DECORATIVE MARQUEE BAND (BETWEEN HERO BUTTONS & WHAT I BRING) */}
      <div
        aria-hidden="true"
        className="w-full max-w-full overflow-hidden select-none pointer-events-none mt-8 sm:mt-10 pt-2 pb-1 opacity-[0.16]"
        style={{
          contain: 'paint',
          width: '100%',
          maxWidth: '100%',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)',
        }}
      >
        <div className="w-full max-w-full overflow-hidden flex" style={{ width: '100%', maxWidth: '100%' }}>
          <motion.div
            className="flex whitespace-nowrap will-change-transform shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 15,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className="font-marquee-display text-[clamp(1.75rem,4.5vw,4.25rem)] font-normal tracking-widest text-slate-100 uppercase pr-8 sm:pr-14 leading-none select-none shrink-0"
                style={{ fontFamily: '"Train One", cursive, sans-serif' }}
              >
                MERN STACK DEVELOPER
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
