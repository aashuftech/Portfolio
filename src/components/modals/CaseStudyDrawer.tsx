import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Code2 } from 'lucide-react';
import { ProjectData } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GithubIcon } from '@/components/ui/Icons';
import { stopScroll, startScroll } from '@/lib/lenis';
import { sound } from '@/lib/audio';

export interface CaseStudyDrawerProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      stopScroll();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        startScroll();
      };
    } else {
      startScroll();
    }
    return () => startScroll();
  }, [project, onClose]);

  const handleClose = () => {
    sound.playClick(600);
    onClose();
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="relative w-full max-w-2xl h-full bg-slate-950 border-l border-white/10 shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/60 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Badge variant="indigo" size="sm">
                  {project.category}
                </Badge>
                <span className="text-xs font-mono text-slate-400">Technical Case Study</span>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Close Drawer (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-brand-cyan font-sans leading-relaxed">
                  {project.tagline}
                </p>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  )}
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <GithubIcon size={14} />
                    <span>View GitHub Repo</span>
                  </Button>
                </div>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/8">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                    The Challenge / Problem
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/30">
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider block mb-1">
                    Architectural Solution
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* System Architecture Overview */}
              <div>
                <h4 className="text-sm font-mono font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-indigo" />
                  <span>Full-Stack Architecture Overview</span>
                </h4>
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-sm text-slate-300 leading-relaxed font-sans">
                  {project.caseStudy.architecture}
                </div>
              </div>

              {/* Key Implementation Highlights */}
              <div>
                <h4 className="text-sm font-mono font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                  <span>Major Implementation Highlights</span>
                </h4>
                <div className="space-y-2.5">
                  {project.caseStudy.keyHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Tech Stack */}
              <div>
                <h4 className="text-sm font-mono font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-brand-cyan" />
                  <span>Technologies & Frameworks Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.techStackDetailed.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-white/10 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Aashish Prajapati &bull; Full-Stack Portfolio</span>
              <Button variant="ghost" size="sm" onClick={handleClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
