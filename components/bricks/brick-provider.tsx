'use client';

import { useEffect, useState } from 'react';
import { FixedBrickControls } from '@/components/bricks/brick-controls';
import { useBrickStore } from '@/components/bricks/state/brick-state';
import { cn } from '@/lib/utils';

export const BrickProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  const copyMode = useBrickStore((state) => state.copyModeEnabled);
  const copyModeOnClient = isClient && copyMode;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={cn(
        'w-full flex flex-col items-center transition-all font-sans',
        copyModeOnClient ? 'py-6' : 'py-0',
      )}
    >
      <div className="w-full flex flex-col" id="preview">
        {children}
      </div>

      {copyModeOnClient ? (
        <div className="top-0 left-0 fixed z-10 w-screen h-screen bg-slate-100/80 dark:bg-slate-900/80"></div>
      ) : null}

      <FixedBrickControls />
    </div>
  );
};
