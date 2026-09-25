import React from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Mail,
  Volume2,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { navItems } from '@/config/navigation';
import { scrollToSection } from '@/lib/lenis';
import { useClipboard } from '@/hooks/useClipboard';
import { useAudioFeedback } from '@/hooks/useAudioFeedback';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onOpenChange }) => {
  const { copy } = useClipboard();
  const { isEnabled: audioEnabled, toggle: toggleAudio } = useAudioFeedback();

  const handleSelect = (callback: () => void) => {
    callback();
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => onOpenChange(false)}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="relative w-full max-w-lg glass-panel-elevated rounded-2xl border border-white/15 shadow-2xl overflow-hidden z-10"
          >
            <Command className="w-full bg-transparent text-slate-200">
              <div className="flex items-center px-4 border-b border-white/10">
                <Code2 className="w-4 h-4 text-brand-cyan mr-2" />
                <Command.Input
                  placeholder="Search sections, projects, or actions..."
                  className="w-full bg-transparent py-4 text-sm text-white placeholder-slate-400 focus:outline-none font-sans"
                  autoFocus
                />
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-400 border border-white/10">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-80 overflow-y-auto p-2 text-sm">
                <Command.Empty className="py-6 text-center text-xs text-slate-400">
                  No matching results found.
                </Command.Empty>

                {/* Navigation Group */}
                <Command.Group heading="Navigation" className="text-[11px] font-mono text-slate-400 px-2 py-1.5 uppercase tracking-wider">
                  {navItems.map((item) => (
                    <Command.Item
                      key={item.id}
                      onSelect={() => handleSelect(() => scrollToSection(item.href))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:bg-brand-indigo/20 hover:text-white cursor-pointer select-none transition-colors aria-selected:bg-brand-indigo/20 aria-selected:text-white"
                    >
                      <Layers className="w-4 h-4 text-brand-cyan" />
                      <span>Jump to {item.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* Quick Actions */}
                <Command.Group heading="Quick Actions" className="text-[11px] font-mono text-slate-400 px-2 py-1.5 uppercase tracking-wider mt-2">
                  <Command.Item
                    onSelect={() => handleSelect(() => copy(siteConfig.email, true))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:bg-brand-indigo/20 hover:text-white cursor-pointer select-none transition-colors aria-selected:bg-brand-indigo/20"
                  >
                    <Mail className="w-4 h-4 text-brand-emerald" />
                    <span>Copy Email ({siteConfig.email})</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => handleSelect(() => window.open(siteConfig.resumeUrl, '_blank'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:bg-brand-indigo/20 hover:text-white cursor-pointer select-none transition-colors aria-selected:bg-brand-indigo/20"
                  >
                    <FileText className="w-4 h-4 text-brand-indigo" />
                    <span>View Resume (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400" />
                  </Command.Item>

                  <Command.Item
                    onSelect={() => handleSelect(() => toggleAudio())}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:bg-brand-indigo/20 hover:text-white cursor-pointer select-none transition-colors aria-selected:bg-brand-indigo/20"
                  >
                    <Volume2 className="w-4 h-4 text-brand-violet" />
                    <span>{audioEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}</span>
                  </Command.Item>
                </Command.Group>

                {/* Social Profiles */}
                <Command.Group heading="External Profiles" className="text-[11px] font-mono text-slate-400 px-2 py-1.5 uppercase tracking-wider mt-2">
                  <Command.Item
                    onSelect={() => handleSelect(() => window.open(siteConfig.github, '_blank'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:bg-brand-indigo/20 hover:text-white cursor-pointer select-none transition-colors aria-selected:bg-brand-indigo/20"
                  >
                    <GithubIcon size={16} className="text-slate-400" />
                    <span>GitHub (@aashuftech)</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400" />
                  </Command.Item>

                  <Command.Item
                    onSelect={() => handleSelect(() => window.open(siteConfig.linkedin, '_blank'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:bg-brand-indigo/20 hover:text-white cursor-pointer select-none transition-colors aria-selected:bg-brand-indigo/20"
                  >
                    <LinkedinIcon size={16} className="text-slate-400" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400" />
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-t border-white/10 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                  <span>Shortcut: ⌘K or Ctrl+K</span>
                </span>
                <span>ESC to exit</span>
              </div>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
