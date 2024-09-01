'use client';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

/**
 * A component meant to be used in the landing page.
 * It displays a marquee of elements and loops through them.
 */
export const LandingMarquee = ({
  className,
  children,
  innerClassName,
  withBackground = false,
  animationDurationInSeconds,
  animationDirection,
  variant = 'primary',
}: {
  className?: string;
  innerClassName?: string;
  children?: React.ReactNode;
  withBackground?: boolean;
  animationDurationInSeconds?: number;
  animationDirection?: 'left' | 'right';
  variant?: 'primary' | 'secondary';
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState(3); // Initial value, can be adjusted
  const [_animationDuration, _setAnimationDuration] = useState('15s'); // Initial value

  useEffect(() => {
    const updateRepeatCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const firstChild = containerRef.current
          .firstChild as HTMLElement | null;
        const grandChild = firstChild?.firstChild as HTMLElement | null;
        const childWidth = grandChild?.offsetWidth || 1;
        const visibleItems = Math.ceil(containerWidth / childWidth);
        setRepeat(visibleItems + 1); // Adding extra to ensure smooth loop

        if (animationDurationInSeconds) {
          _setAnimationDuration(`${animationDurationInSeconds}s`);
        } else {
          // Update animation duration based on container width
          const duration = (containerWidth / 100) * 15;
          _setAnimationDuration(`${duration}s`);
        }
      }
    };

    updateRepeatCount();
    window.addEventListener('resize', updateRepeatCount);
    return () => window.removeEventListener('resize', updateRepeatCount);
  }, [animationDurationInSeconds]);

  return (
    <div
      className={clsx(
        'w-full overflow-hidden flex items-center py-4 lg:py-8',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        className,
      )}
      ref={containerRef}
    >
      <div
        className={clsx(
          'flex animate-marquee',
          animationDirection === 'left' ? 'direction-reverse' : '',
          innerClassName,
        )}
        style={{
          width: `${repeat * 100}%`,
          animationDuration: _animationDuration,
        }}
      >
        {/* Render 3x for seamless looping */}
        {Array.from({ length: repeat }, (_, i) => children)
          .flat()
          .map((child, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
            >
              {child}
            </div>
          ))}
      </div>
    </div>
  );
};
