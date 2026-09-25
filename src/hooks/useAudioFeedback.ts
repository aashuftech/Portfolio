import { useState } from 'react';
import { sound } from '@/lib/audio';

export function useAudioFeedback() {
  const [isEnabled, setIsEnabled] = useState(() => sound.isEnabled());

  const toggle = () => {
    const nextState = sound.toggle();
    setIsEnabled(nextState);
  };

  const playClick = (freq?: number) => {
    sound.playClick(freq);
  };

  const playSuccess = () => {
    sound.playSuccess();
  };

  return { isEnabled, toggle, playClick, playSuccess };
}
