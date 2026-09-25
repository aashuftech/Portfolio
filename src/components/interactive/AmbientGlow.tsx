import React from 'react';

export const AmbientGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle Top Ambient Gradient */}
      <div data-ambient-glow className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-brand-indigo/10 to-transparent blur-3xl opacity-50 will-change-transform" />
      
      {/* Subtle Soft Glow on the side */}
      <div data-ambient-glow className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-3xl opacity-30 will-change-transform" />
    </div>
  );
};
