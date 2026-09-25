import React from 'react';
import { Check, Copy } from 'lucide-react';
import { useClipboard } from '@/hooks/useClipboard';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  showConfetti?: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Copy Email',
  copiedLabel = 'Copied to Clipboard!',
  className,
  showConfetti = true,
}) => {
  const { copied, copy } = useClipboard();

  return (
    <Button
      variant={copied ? 'glass' : 'secondary'}
      size="md"
      className={cn('relative min-w-[140px] transition-all', className)}
      onClick={() => copy(textToCopy, showConfetti)}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-brand-emerald animate-pulse" />
          <span className="text-brand-emerald font-medium">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
          <span>{label}</span>
        </>
      )}
    </Button>
  );
};
