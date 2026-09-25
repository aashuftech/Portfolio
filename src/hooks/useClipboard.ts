import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '@/lib/audio';

export function useClipboard(timeout = 2500) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string, showConfetti = false) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        sound.playSuccess();

        if (showConfetti) {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.85 },
            colors: ['#6366F1', '#06B6D4', '#10B981'],
            disableForReducedMotion: true,
          });
        }

        setTimeout(() => setCopied(false), timeout);
        return true;
      } catch {
        return false;
      }
    },
    [timeout]
  );

  return { copied, copy };
}
