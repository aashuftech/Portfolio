import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { BentoCard } from '@/components/ui/BentoCard';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-10 sm:py-12 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto z-10 scroll-mt-20 w-full">
      {/* Section Header */}
      <div data-cinematic-header className="mb-7 sm:mb-8 text-center sm:text-left">
        <span data-cinematic-eyebrow className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-3 break-words">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl break-words">
          I am actively seeking full-time Software Engineer and Full-Stack Developer opportunities. Feel free to reach out directly.
        </p>
      </div>

      {/* Contact Card */}
      <div data-cinematic-card>
        <BentoCard className="border-white/10 p-5 sm:p-8 md:p-10 shadow-2xl">
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Status */}
          <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-white/8 text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-mono font-medium text-emerald-300">
                {siteConfig.status}
              </span>
            </div>
          </div>

          {/* Email Direct Box */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="text-left min-w-0 flex-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <span className="text-base sm:text-lg md:text-xl font-mono font-bold text-white select-all break-all sm:break-normal">
                {siteConfig.email}
              </span>
            </div>

            <div className="flex items-center w-full sm:w-auto shrink-0">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-indigo hover:bg-indigo-500 text-white text-sm font-sans font-medium transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Hire Me</span>
              </a>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn Profile"
              className="p-4 rounded-xl glass-panel hover:glass-panel-elevated hover:border-white/20 hover:-translate-y-0.5 flex items-center justify-between group transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon size={18} className="text-brand-cyan" />
                <span className="text-xs font-mono text-slate-200 group-hover:text-white">
                  LinkedIn Profile
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub Profile"
              className="p-4 rounded-xl glass-panel hover:glass-panel-elevated hover:border-white/20 hover:-translate-y-0.5 flex items-center justify-between group transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <GithubIcon size={18} className="text-brand-indigo" />
                <span className="text-xs font-mono text-slate-200 group-hover:text-white">
                  GitHub Profile
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume PDF"
              className="p-4 rounded-xl glass-panel hover:glass-panel-elevated hover:border-white/20 hover:-translate-y-0.5 flex items-center justify-between group transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-200 group-hover:text-white">
                  Resume
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </BentoCard>
      </div>
    </section>
  );
};
