import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { sound } from '@/lib/audio';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, onClick, ...props }, ref) => {
    const variantStyles = {
      primary:
        'bg-brand-indigo hover:bg-indigo-500 text-white shadow-glass-glow border border-indigo-400/30',
      secondary:
        'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-white/10 shadow-sm',
      outline:
        'bg-transparent hover:bg-white/5 text-slate-200 border border-white/20 hover:border-brand-indigo/50',
      ghost: 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white',
      glass:
        'glass-panel hover:glass-panel-elevated text-slate-100 hover:border-brand-indigo/40 shadow-sm',
    };

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
      md: 'text-sm px-4 py-2.5 rounded-xl gap-2',
      lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-semibold',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      sound.playClick();
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(
          'inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
