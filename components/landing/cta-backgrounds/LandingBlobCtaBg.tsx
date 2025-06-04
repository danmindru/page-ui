'use client';

import clsx from 'clsx';

export const LandingBlobCtaBg = ({
  className,
  variant = 'default',
  blobPosition = 'center',
  primarySize = 400,
  secondarySize = 300,
  tertiarySize = 200,
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  blobPosition?: 'left' | 'right' | 'center' | 'top' | 'bottom';
  primarySize?: number;
  secondarySize?: number;
  tertiarySize?: number;
}) => {
  const getBaseGradient = () => {
    switch (variant) {
      case 'primary':
        return 'from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200';
      case 'secondary':
        return 'from-secondary-600 via-secondary-500 to-secondary-400 dark:from-secondary-400 dark:via-secondary-300 dark:to-secondary-200';
      default:
        return 'from-pink-600 via-orange-500 to-yellow-400 dark:from-pink-400 dark:via-orange-300 dark:to-yellow-200';
    }
  };

  const getPositionClasses = () => {
    switch (blobPosition) {
      case 'left':
        return 'top-1/2 left-0 transform -translate-y-1/2';
      case 'right':
        return 'top-1/2 right-0 transform -translate-y-1/2';
      case 'top':
        return 'top-0 left-1/2 transform -translate-x-1/2';
      case 'bottom':
        return 'bottom-0 left-1/2 transform -translate-x-1/2';
      default: // center
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    }
  };

  const baseGradient = getBaseGradient();
  const positionClasses = getPositionClasses();

  return (
    <div
      className={clsx('relative w-full h-full blur-3xl opacity-60', className)}
    >
      <style jsx>{`
        @keyframes blob-float {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1) translate(-50%, -50%);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translate(-50%, -50%);
          }
        }
      `}</style>

      <div
        className={clsx('absolute', positionClasses)}
        style={{
          width: `${primarySize}px`,
          height: `${primarySize}px`,
        }}
      >
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'rounded-full bg-gradient-to-br',
            baseGradient,
          )}
          style={{
            width: `${primarySize}px`,
            height: `${primarySize}px`,
            animation: 'blob-float 8s ease-in-out infinite',
          }}
          aria-hidden="true"
        />

        <div
          className={clsx(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'rounded-full bg-gradient-to-tr',
            baseGradient,
            'hue-rotate-90',
          )}
          style={{
            width: `${secondarySize}px`,
            height: `${secondarySize}px`,
            marginTop: `${primarySize * 0.2}px`,
            marginLeft: `${primarySize * 0.15}px`,
            animation: 'blob-float 6s ease-in-out infinite 1s',
          }}
          aria-hidden="true"
        />

        <div
          className={clsx(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'rounded-full bg-gradient-to-bl',
            baseGradient,
            'hue-rotate-180',
          )}
          style={{
            width: `${tertiarySize}px`,
            height: `${tertiarySize}px`,
            marginTop: `-${primarySize * 0.15}px`,
            marginLeft: `-${primarySize * 0.2}px`,
            animation: 'blob-float 4s ease-in-out infinite 2s',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
