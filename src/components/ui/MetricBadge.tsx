import React from 'react';
import { cn } from '@/lib/utils';

export interface MetricBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export const MetricBadge: React.FC<MetricBadgeProps> = ({
  value,
  label,
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex flex-col px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm',
        className
      )}
    >
      <span className="font-mono text-sm font-bold text-brand-cyan tracking-tight">
        {value}
      </span>
      <span className="text-[11px] font-sans text-slate-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};
