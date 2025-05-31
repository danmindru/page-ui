'use client';

import clsx from 'clsx';

export const LandingDiagonalCtaBg = ({
  className,
  variant = 'default',
  intensity = 'medium',
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  intensity?: 'light' | 'medium' | 'strong';
}) => {
  const getBackgroundGradient = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-b from-primary-100/20 dark:from-primary-900/10';
      case 'secondary':
        return 'bg-gradient-to-b from-secondary-100/20 dark:from-secondary-900/10';
      default:
        return 'bg-gradient-to-b from-indigo-100/20 dark:from-indigo-900/10';
    }
  };

  const getDiagonalColors = () => {
    switch (variant) {
      case 'primary':
        return {
          main: 'bg-primary-500 dark:bg-primary-400',
          accent: 'bg-primary-100 dark:bg-primary-900/20',
          ring: 'ring-primary-50 dark:ring-primary-900/30',
          shadow: 'shadow-primary-600/10 dark:shadow-primary-400/10',
        };
      case 'secondary':
        return {
          main: 'bg-secondary-500 dark:bg-secondary-400',
          accent: 'bg-secondary-100 dark:bg-secondary-900/20',
          ring: 'ring-secondary-50 dark:ring-secondary-900/30',
          shadow: 'shadow-secondary-600/10 dark:shadow-secondary-400/10',
        };
      default:
        return {
          main: 'bg-indigo-500 dark:bg-indigo-400',
          accent: 'bg-indigo-100 dark:bg-indigo-900/20',
          ring: 'ring-indigo-50 dark:ring-indigo-900/30',
          shadow: 'shadow-indigo-600/10 dark:shadow-indigo-400/10',
        };
    }
  };

  const getIntensityOpacity = () => {
    switch (intensity) {
      case 'light':
        return 'opacity-10';
      case 'strong':
        return 'opacity-30';
      default: // medium
        return 'opacity-20';
    }
  };

  const backgroundGradient = getBackgroundGradient();
  const colors = getDiagonalColors();
  const intensityOpacity = getIntensityOpacity();

  return (
    <div
      className={clsx('relative w-full h-full', backgroundGradient, className)}
    >
      {/* Main diagonal background element */}
      <div
        className={clsx(
          'absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg]',
          'bg-white dark:bg-gray-900',
          'shadow-xl ring-1',
          colors.shadow,
          colors.ring,
          'md:-mr-20 lg:-mr-36',
        )}
        aria-hidden="true"
      />

      {/* Accent diagonal overlay */}
      <div
        className={clsx(
          'absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg]',
          colors.accent,
          intensityOpacity,
          'ring-1 ring-white/10 dark:ring-gray-800/10 ring-inset',
          'md:ml-20 lg:ml-36',
        )}
        aria-hidden="true"
      />

      {/* Bottom gradient fade */}
      <div
        className={clsx(
          'absolute inset-x-0 bottom-0 -z-10 h-24 sm:h-32',
          'bg-gradient-to-t from-white dark:from-gray-900',
        )}
        aria-hidden="true"
      />
    </div>
  );
};
