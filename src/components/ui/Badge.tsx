import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'emerald' | 'cyan' | 'indigo';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-200 border-white/10',
    outline: 'bg-transparent text-slate-300 border-white/15',
    emerald: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30',
    cyan: 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30',
    indigo: 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-mono font-medium rounded-full border tracking-wide transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
