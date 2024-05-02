'use client';
import { Button } from '@/components/shared/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useIsOverflowing = ({
  ref,
  callback,
}: {
  ref: React.MutableRefObject<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  callback?: (isOverflow: boolean) => void;
}) => {
  const [isOverflow, setIsOverflow] = useState(false);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const currentPre = current.querySelector('pre');

      if (!currentPre) return;

      const hasOverflow = currentPre.scrollHeight > currentPre.clientHeight;
      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};

export const StepCode = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isOverflow = useIsOverflowing({ ref });

  const [showOverflow, setShowOverflow] = useState(false);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;
    const currentPre = current.querySelector('pre');
    if (!currentPre) return;

    if (showOverflow) {
      currentPre.style.maxHeight = 'none';
    } else {
      currentPre.style.maxHeight = '350px';
    }
  }, [showOverflow]);

  return (
    <>
      <style>
        {`
          .content pre {
            margin: 1rem 0 0 0;
            max-height: 350px;
          }
        `}
      </style>
      <div
        ref={ref}
        className={cn(
          'content group flex flex-col relative no-underline',
          className,
        )}
      >
        {children}

        {isOverflow && !showOverflow ? (
          <Button
            onClick={() => setShowOverflow(true)}
            size="sm"
            className="mt-2"
          >
            Expand
          </Button>
        ) : (
          <Button
            onClick={() => setShowOverflow(false)}
            size="sm"
            className="mt-2"
          >
            Collapse
          </Button>
        )}
      </div>
    </>
  );
};
