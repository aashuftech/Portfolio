import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { projectsData } from '@/data/projects';
import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/ui/Icons';

export const GitHubShowcase: React.FC = () => {
  return (
    <section id="github" className="relative py-10 sm:py-12 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div data-cinematic-header className="mb-7 sm:mb-8">
        <span data-cinematic-eyebrow className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
          Open Source
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          GitHub & Public Repositories
        </h2>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 sm:mb-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            data-cinematic-card
          >
            <BentoCard className="h-full flex flex-col justify-between border-white/8 hover:border-white/20 p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan mb-3">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>aashuftech/{project.name.toLowerCase().replace(/[^a-z0-9]/g, '')}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mb-5 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-chip text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Public Repo</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.name} on GitHub`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-cyan hover:text-white transition-colors"
                >
                  <span>View Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </BentoCard>
          </div>
        ))}
      </div>

      {/* GitHub Callout Card */}
      <div data-cinematic-card>
        <BentoCard className="border-white/8 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white shrink-0">
            <GithubIcon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-1">
              Explore More on GitHub
            </h3>
            <p className="text-sm text-slate-300 font-sans">
              Review source code, branches, and full-stack implementations at @aashuftech.
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => window.open(siteConfig.github, '_blank')}
          className="shrink-0"
        >
          <GithubIcon size={16} />
          <span>Visit GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Button>
      </BentoCard>
      </div>
    </section>
  );
};
