import React, { useState } from 'react';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import { FloatingDock } from '@/components/layout/FloatingDock';
import { AmbientGlow } from '@/components/interactive/AmbientGlow';
import { HeroSection } from '@/components/sections/01_Hero';
import { WhatIBring } from '@/components/sections/02_WhatIBring';
import { FeaturedProjects } from '@/components/sections/03_FeaturedProjects';
import { CaseStudyDrawer } from '@/components/modals/CaseStudyDrawer';
import { DeveloperJourney } from '@/components/sections/04_DeveloperJourney';
import { SkillsMatrix } from '@/components/sections/05_SkillsMatrix';
import { CertificationsSection } from '@/components/sections/06_Certifications';
import { CredlyBadgesSection } from '@/components/sections/07_CredlyBadges';
import { GitHubShowcase } from '@/components/sections/08_GitHubShowcase';
import { ContactSection } from '@/components/sections/09_Contact';
import { Footer } from '@/components/layout/Footer';
import { Preloader } from '@/components/layout/Preloader';
import { CommandPalette } from '@/components/modals/CommandPalette';
import { useCommandMenu } from '@/hooks/useCommandMenu';
import { useCinematicScroll } from '@/hooks/useCinematicScroll';
import { ProjectData } from '@/types';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { open: commandOpen, setOpen: setCommandOpen } = useCommandMenu();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Initialize cinematic scroll animations
  useCinematicScroll();

  return (
    <SmoothScrollProvider>
      {/* Full-Screen Initial Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div className="relative min-h-screen bg-canvas text-slate-100 flex flex-col font-sans selection:bg-brand-indigo/30 selection:text-brand-cyan w-full max-w-full overflow-x-hidden">
        {/* Subtle Ambient Background */}
        <AmbientGlow />

        {/* Top Sticky Navbar */}
        <FloatingDock />

        {/* Universal Command Palette (⌘K) */}
        <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />

        {/* Technical Case Study Slide-over Drawer */}
        <CaseStudyDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Main Content Narrative */}
        <main className="flex-1 flex flex-col relative z-10 w-full max-w-full overflow-x-hidden">
          {/* 01. Two-Column Hero with Core Stack */}
          <HeroSection isReady={!isLoading} />

          {/* 02. What I Bring (3 Premium Cards) */}
          <WhatIBring />

          {/* 03. Featured Projects Visual Showcase */}
          <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />

          {/* 04. Education & Developer Journey (BSc CS) */}
          <DeveloperJourney />

          {/* 05. Skills & Technical Expertise (6 Categorized Groups) */}
          <SkillsMatrix />

          {/* 06. Verified Certifications */}
          <CertificationsSection />

          {/* 07. Credly Digital Badges */}
          <CredlyBadgesSection />

          {/* 08. GitHub & Open Source Repositories */}
          <GitHubShowcase />

          {/* 09. Simple Premium Contact Section */}
          <ContactSection />
        </main>

        {/* 10. Clean Minimal Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
