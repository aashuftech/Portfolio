import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Terminal, ChevronDown } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ProjectData } from '@/types';
import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/ui/Icons';
import { sound } from '@/lib/audio';

export interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectData) => void;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onSelectProject: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelectProject }) => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  const imageMap: Record<string, string> = {
    skillswap: '/assets/images/projects/skillswap.png',
    staynest: '/assets/images/projects/staynest.png',
    'codeintelligent-ai': '/assets/images/projects/codeintelligent.png',
  };

  const imageSrc = imageMap[project.id] || `/assets/images/projects/${project.id}.png`;

  const handleOpenCaseStudy = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick(800);
    onSelectProject(project);
  };

  const handleCardClick = () => {
    // Toggle details on mobile tap
    setIsMobileActive((prev) => !prev);
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer w-full"
      data-cinematic-card
    >
      <BentoCard className="flex flex-col justify-between border-white/10 hover:border-white/20 p-5 sm:p-7 group overflow-hidden transition-all duration-300">
        <div>
          {/* Large Project Image */}
          <div
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 mb-5 flex items-center justify-center"
            data-parallax-image
          >
            <img
              src={imageSrc}
              alt={project.name}
              className="w-full h-full object-cover object-top group-hover:scale-[1.03] group-hover:-translate-y-0.5 transition-all duration-500 ease-out"
            />
          </div>

          {/* Project Name */}
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2.5 tracking-tight group-hover:text-brand-cyan transition-colors break-words">
            {project.name}
          </h3>

          {/* Short Project Description */}
          <p className="text-sm text-slate-300 font-sans leading-relaxed break-words">
            {project.description}
          </p>

          {/* Mobile Tap Hint (Hidden on desktop) */}
          <div className="md:hidden mt-3 flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <span>{isMobileActive ? 'Tap to hide details' : 'Tap to view details & actions'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileActive ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* HOVER / EXPANDED STATE: Smoothly reveals Tech Stack & Actions */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isMobileActive
              ? 'max-h-[350px] opacity-100 mt-5 pt-5 border-t border-white/8'
              : 'max-h-0 md:group-hover:max-h-[350px] opacity-0 md:group-hover:opacity-100 md:group-hover:mt-5 md:group-hover:pt-5 md:group-hover:border-t md:group-hover:border-white/8'
          }`}
        >
          {/* Languages (if applicable) */}
          {project.languages && (
            <div className="flex items-center gap-2 text-xs text-brand-emerald font-mono mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Languages: {project.languages.join(', ')}</span>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/8 text-[11px] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="glass"
              size="sm"
              onClick={handleOpenCaseStudy}
              className="text-xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-brand-indigo" />
              <span>View Case Study</span>
            </Button>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.name}`}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                title="View GitHub Repo"
              >
                <GithubIcon size={16} />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live deployment for ${project.name}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-indigo/20 hover:bg-brand-indigo/30 border border-brand-indigo/40 text-brand-cyan hover:text-white text-xs font-mono font-medium transition-colors"
                  title="Open Live Deployment"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </BentoCard>
    </div>
  );
};

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-10 sm:py-12 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto z-10 scroll-mt-20 w-full">
      {/* Section Header */}
      <div data-cinematic-header className="mb-7 sm:mb-8">
        <span data-cinematic-eyebrow className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
};

