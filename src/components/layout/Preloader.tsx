import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { stopScroll, startScroll } from '@/lib/lenis';
import { ScrollTrigger } from '@/lib/gsap';

export interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lock page scroll during preload
    stopScroll();
    document.body.style.overflow = 'hidden';

    if (prefersReducedMotion) {
      setCount(100);
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          startScroll();
          ScrollTrigger.refresh();
          onComplete();
        }, 150);
      }, 100);
      return () => clearTimeout(timer);
    }

    // Generate random intermediate milestone values on every fresh load
    // e.g. 18% -> 47% -> 76% -> 100% or 23% -> 54% -> 81% -> 100%
    const m1 = Math.floor(Math.random() * (26 - 15 + 1)) + 15;
    const m2 = Math.floor(Math.random() * (56 - 42 + 1)) + 42;
    const m3 = Math.floor(Math.random() * (84 - 70 + 1)) + 70;

    const segments = [
      { startVal: 0, endVal: m1, duration: 380 },
      { startVal: m1, endVal: m2, duration: 440 },
      { startVal: m2, endVal: m3, duration: 440 },
      { startVal: m3, endVal: 100, duration: 420 },
    ];

    let currentSegmentIndex = 0;
    let segmentStartTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (segmentStartTime === null) {
        segmentStartTime = timestamp;
      }

      const segment = segments[currentSegmentIndex];
      const elapsed = timestamp - segmentStartTime;
      const progress = Math.min(1, elapsed / segment.duration);
      const easedProgress = easeOutCubic(progress);

      const currentVal = Math.round(
        segment.startVal + (segment.endVal - segment.startVal) * easedProgress
      );
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Move to next milestone
        currentSegmentIndex++;
        segmentStartTime = null;

        if (currentSegmentIndex < segments.length) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          // Finished at 100% -> Brief hold before cinematic exit
          setCount(100);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              document.body.style.overflow = '';
              startScroll();
              ScrollTrigger.refresh();
              onComplete();
            }, 600);
          }, 200);
        }
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = '';
      startScroll();
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'inset(0% 0% 100% 0%)',
            opacity: 0.9,
            transition: {
              duration: 0.6,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-[99999] bg-[#08090E] text-slate-100 flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
          aria-label="Loading Portfolio"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-b from-brand-indigo/15 to-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Brand & Status */}
          <div className="relative z-10 flex items-center justify-between">
            <span
              className="font-navbar-brand text-lg sm:text-xl text-white tracking-wide"
              style={{ fontFamily: '"Baumans", cursive, sans-serif' }}
            >
              {siteConfig.name}
            </span>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                Initializing
              </span>
            </div>
          </div>

          {/* Center Stage: Percentage Counter & Progress Line */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-baseline font-mono font-bold tracking-tighter text-white"
            >
              <span className="text-7xl sm:text-9xl tabular-nums leading-none">
                {count}
              </span>
              <span className="text-2xl sm:text-4xl text-brand-cyan font-sans ml-1 font-light">
                %
              </span>
            </motion.div>

            {/* Precision Progress Bar */}
            <div className="w-48 sm:w-72 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-cyan via-indigo-400 to-brand-indigo transition-all duration-100 ease-out rounded-full"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>

          {/* Bottom Row: Domain */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-500 uppercase tracking-widest">
            <span>MERN Stack Developer</span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
