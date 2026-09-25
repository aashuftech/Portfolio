import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 140): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. If user is at or near the top (Home/Hero area), no nav link is active
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        const projectsRect = projectsEl.getBoundingClientRect();
        if (projectsRect.top > offset) {
          setActiveSection('');
          return;
        }
      } else if (window.scrollY < 300) {
        setActiveSection('');
        return;
      }

      // 2. If scrolled near the bottom of the page, activate contact
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isBottom && sectionIds.includes('contact')) {
        setActiveSection('contact');
        return;
      }

      // 3. Find which specific section currently spans across the reference offset line
      let foundSection = '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            foundSection = id;
            break;
          }
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}


