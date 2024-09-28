'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { RabbitIcon, VenetianMaskIcon } from 'lucide-react';
import { useBrickStore } from '@/components/bricks/state/brick-state';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: 'sm' | 'default' | 'lg';
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...props }, ref) => {
  let containerSizeClasses = '';
  let thumbSizeClasses = '';

  switch (props.size) {
    case 'sm':
      containerSizeClasses = 'h-[16px] w-[28px]';
      thumbSizeClasses = 'h-3 w-3 data-[state=checked]:translate-x-3';
      break;

    case 'lg':
      containerSizeClasses = 'h-[32px] w-[60px]';
      thumbSizeClasses = 'h-7 w-7 data-[state=checked]:translate-x-7';
      break;

    case 'default':
    default:
      containerSizeClasses = 'h-[24px] w-[44px]';
      thumbSizeClasses = 'h-5 w-5 data-[state=checked]:translate-x-5';
      break;
  }

  return (
    <SwitchPrimitives.Root
      className={cn(
        'relative overflow-hidden peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent dark:border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-slate-400 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-green-400 dark:data-[state=unchecked]:bg-slate-600',
        containerSizeClasses,
        className,
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 ',
          thumbSizeClasses,
        )}
      />
      {props.children}
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export const ThiefModeToggle = ({ className = '' }: { className?: string }) => {
  const copyMode = useBrickStore((state) => state.copyModeEnabled);
  const toggleCopyMode = useBrickStore((state) => state.toggleCopyMode);

  const [isClient, setIsClient] = useState(false);
  const copyModeOnClient = isClient && copyMode;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const animation = {
    initial: { opacity: 0, translateY: 10 },
    animate: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    exit: { opacity: 0, translateY: -10 },
  };

  const reverseAnimation = {
    initial: { opacity: 0, translateY: -10 },
    animate: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    exit: { opacity: 0, translateY: 10 },
  };

  return (
    <div
      className={cn(
        'flex gap-2 items-center',
        copyModeOnClient ? 'app-dark' : '',
        className,
      )}
    >
      <button
        disabled={!copyModeOnClient}
        onClick={() => toggleCopyMode()}
        className="p-0 disabled:opacity-100"
      >
        <span
          className={cn(
            'hidden md:inline-block select-none text-gray-800 dark:text-white text-xs font-semibold uppercase tracking-wider transition-opacity',
            !copyModeOnClient ? 'opacity-100' : 'opacity-50',
          )}
        >
          Visitor
        </span>
      </button>

      <Switch
        size="default"
        checked={copyModeOnClient}
        onClick={() => toggleCopyMode()}
        className="data-[state=checked]:bg-purple-700/80 data-[state=unchecked]:bg-yellow-300/80 dark:data-[state=checked]:bg-purple-700/80 dark:data-[state=unchecked]:bg-yellow-300/80"
      >
        {!copyModeOnClient ? (
          <motion.div
            {...animation}
            key="light"
            className="absolute left-[3px] pointer-events-none"
          >
            <RabbitIcon className="stroke-yellow-600 w-[14px] h-[14px]" />
          </motion.div>
        ) : (
          <motion.div
            {...reverseAnimation}
            key="dark"
            className="absolute right-[3px] pointer-events-none"
          >
            <VenetianMaskIcon className="stroke-purple-800 w-[14px] h-[14px]" />
          </motion.div>
        )}
      </Switch>

      <button
        disabled={copyModeOnClient}
        onClick={() => toggleCopyMode()}
        className="p-0 disabled:opacity-100"
      >
        <span
          className={cn(
            'hidden md:inline-block select-none text-gray-800 dark:text-white text-xs font-semibold uppercase tracking-wider transition-opacity',
            copyModeOnClient ? 'opacity-100' : 'opacity-50',
          )}
        >
          Thief
        </span>
      </button>
    </div>
  );
};
