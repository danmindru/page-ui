'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useBrickStore } from '@/components/bricks/state/brick-state';
import { BrickCopyCode } from '@/components/bricks/brick-copy-code';

export const Brick = ({
  className,
  children,
  demo,
  brick,
}: {
  className?: string;
  children: React.ReactNode;
  demo: string;
  brick: string;
}) => {
  const [isClient, setIsClient] = useState(false);

  const copyMode = useBrickStore((state) => state.copyModeEnabled);
  const copyModeOnClient = isClient && copyMode;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={cn('w-full flex flex-col group', className)}>
      <div
        className={cn(
          'w-full relative z-30 transition-all',
          copyModeOnClient
            ? 'scale-95 border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 shadow-md rounded-md'
            : 'scale-100',
        )}
      >
        {copyModeOnClient ? <BrickCopyCode brick={brick} demo={demo} /> : null}

        {children}
      </div>
    </div>
  );
};
