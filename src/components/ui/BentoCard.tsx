import React, { useRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface BentoCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  spotlight?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  spotlight = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (spotlight) {
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={cn(
        'glass-panel rounded-2xl p-6 sm:p-8 transition-all duration-300 relative group overflow-hidden border border-white/8 hover:border-white/20 hover:shadow-glass-glow',
        spotlight && 'spotlight-card',
        className
      )}
      {...props}
    >
      {/* Subtle top inner gradient highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
