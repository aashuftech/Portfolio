import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { scrollToSection } from '@/lib/lenis';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-canvas/90 pt-10 sm:pt-12 pb-28 sm:pb-24 md:pb-12 px-4 sm:px-6 lg:px-8 z-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Left Bio & Status */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 max-w-full">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              {siteConfig.status}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-medium break-words">
            {siteConfig.name} &bull; {siteConfig.title} &bull; {siteConfig.location.city}
          </p>
        </div>

        {/* Right Socials & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send direct email"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('#home')}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-brand-indigo/20 hover:bg-brand-indigo/30 border border-brand-indigo/40 text-brand-cyan hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
