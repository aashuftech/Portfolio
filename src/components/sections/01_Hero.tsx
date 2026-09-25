import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export interface HeroSectionProps {
  isReady?: boolean;
}

const techIcons = [
  { name: 'JavaScript', src: '/assets/images/tech-icons/js-icon.png' },
  { name: 'Node.js', src: '/assets/images/tech-icons/node-icon.png' },
  { name: 'React.js', src: '/assets/images/tech-icons/react-icon.png' },
  { name: 'Tailwind CSS', src: '/assets/images/tech-icons/tailwind-icon.png' },
  { name: 'HTML', src: '/assets/images/tech-icons/html-icon.webp' },
  { name: 'MongoDB', src: '/assets/images/tech-icons/mongodb-icon.png' },
  { name: 'AI', src: '/assets/images/tech-icons/ai-icon.png' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ isReady = true }) => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 md:pt-36 pb-2 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10 overflow-hidden w-full"
    >
      {/* EDITORIAL DEVELOPER HERO */}
      <div className="flex flex-col items-start text-left w-full max-w-5xl">
        {/* Large Editorial Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="text-fluid-hero text-white mb-6 sm:mb-8 tracking-[-0.025em] font-display w-full max-w-4xl lg:max-w-5xl"
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
          className="text-fluid-body text-slate-300 font-sans mb-8 sm:mb-10 leading-relaxed max-w-3xl text-base sm:text-lg md:text-[18px] break-words"
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

      {/* SINGLE DECORATIVE MARQUEE BAND (BETWEEN HERO BUTTONS & WHAT I BRING) */}
      <div
        aria-hidden="true"
        className="w-full max-w-full overflow-hidden select-none mt-10 sm:mt-14 py-4"
      >
        <div className="w-full max-w-full overflow-hidden flex">
          <motion.div
            className="flex whitespace-nowrap will-change-transform shrink-0 items-center gap-6 sm:gap-8 md:gap-10 pr-6 sm:pr-8 md:pr-10"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 28,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {[1, 2, 3, 4].map((setIdx) => (
              <React.Fragment key={setIdx}>
                <span
                  className="font-marquee-display text-[clamp(1.75rem,4.5vw,4.25rem)] font-normal tracking-widest text-slate-100/30 uppercase leading-none select-none shrink-0"
                  style={{ fontFamily: '"Train One", cursive, sans-serif' }}
                >
                  MERN STACK DEVELOPER
                </span>

                {techIcons.map((tech, idx) => (
                  <div
                    key={`${tech.name}-${setIdx}-${idx}`}
                    className="w-14 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-14 md:h-16 flex items-center justify-center shrink-0 group/icon cursor-pointer"
                  >
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg sm:rounded-xl shrink-0 transition-all duration-300 ease-out group-hover/icon:brightness-125 group-hover/icon:drop-shadow-[0_0_18px_rgba(99,102,241,0.65)] group-hover/icon:scale-[1.04]"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
