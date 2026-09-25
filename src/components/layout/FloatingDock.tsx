import React from 'react';
import { motion } from 'framer-motion';
import { navItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollToSection } from '@/lib/lenis';
import { cn } from '@/lib/utils';

export const FloatingDock: React.FC = () => {
  const activeSection = useScrollSpy(navItems.map((n) => n.id));

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('#home');
  };

  return (
    <>
      {/* DESKTOP STICKY NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 bg-canvas/80 backdrop-blur-md py-3 sm:py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand Logo / Name on Left (Works as Home Button) */}
          <a
            href="#home"
            onClick={handleHomeClick}
            className="font-navbar-brand text-xl sm:text-2xl md:text-3xl text-white tracking-wide hover:text-brand-cyan transition-colors select-none truncate max-w-[240px] sm:max-w-none"
            style={{ fontFamily: '"Baumans", cursive, sans-serif', fontWeight: 400 }}
          >
            {siteConfig.name}
          </a>

          {/* Right-Aligned Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'text-[15px] font-sans font-medium transition-colors relative py-1',
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-100'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-underline"
                      className="absolute -bottom-1 inset-x-0 h-0.5 bg-brand-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION (<768px) */}
      <nav className="md:hidden fixed bottom-3 inset-x-3 sm:inset-x-6 z-50 glass-dock rounded-2xl p-1.5 sm:p-2 flex items-center justify-around border border-white/10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                'flex flex-col items-center justify-center py-2 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-medium transition-colors select-none',
                isActive ? 'text-brand-cyan bg-white/10' : 'text-slate-400'
              )}
            >
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
};
