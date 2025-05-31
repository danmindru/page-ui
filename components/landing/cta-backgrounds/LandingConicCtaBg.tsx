'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingConicCtaBg = ({
  className,
  variant = 'default',
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [bgColors, setBgColors] = useState({
    from: 'rgba(177, 177, 177, 0.1)',
    to: 'rgba(177, 177, 177, 0.5)',
    viaLight: 'rgba(12, 10, 9, 0.8)',
    viaDark: 'rgba(12, 10, 9, 0.8)',
  });

  useEffect(() => {
    if (!domRef.current) return;

    const computedStyle = getComputedStyle(domRef.current);

    const colors = {
      from: 'rgba(177, 177, 177, 0.1)',
      to: 'rgba(177, 177, 177, 0.5)',
      viaLight: 'rgba(12, 10, 9, 0.8)',
      viaDark: 'rgba(12, 10, 9, 0.8)',
    };

    switch (variant) {
      case 'primary': {
        const primaryDarkColor = computedStyle
          .getPropertyValue('--primary-darker')
          .trim();
        const primaryLightColor = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        colors.from = convertToRgba({ color: primaryLightColor, opacity: 0.3 });
        colors.to = convertToRgba({ color: primaryDarkColor, opacity: 0.8 });
        colors.viaLight = convertToRgba({
          color: primaryDarkColor,
          opacity: 0.9,
        });
        colors.viaDark = convertToRgba({
          color: primaryDarkColor,
          opacity: 0.9,
        });
        break;
      }
      case 'secondary': {
        const secondaryDarkColor = computedStyle
          .getPropertyValue('--secondary-darker')
          .trim();
        const secondaryLightColor = computedStyle
          .getPropertyValue('--secondary-lighter')
          .trim();
        colors.from = convertToRgba({
          color: secondaryLightColor,
          opacity: 0.3,
        });
        colors.to = convertToRgba({ color: secondaryDarkColor, opacity: 0.8 });
        colors.viaLight = convertToRgba({
          color: secondaryDarkColor,
          opacity: 0.9,
        });
        colors.viaDark = convertToRgba({
          color: secondaryDarkColor,
          opacity: 0.9,
        });
        break;
      }
    }

    setBgColors(colors);
  }, [variant]);

  return (
    <div ref={domRef} className={clsx('w-full h-full', className)}>
      <div
        className={clsx(
          'absolute w-full h-full',
          variant === 'primary'
            ? 'bg-primary-100/50 dark:bg-primary-900/50'
            : '',
          variant === 'secondary'
            ? 'bg-secondary-100/50 dark:bg-secondary-900/50'
            : '',
        )}
      />

      <div
        className={clsx(
          'absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-500/30 to-gray-100/10',
          variant === 'primary' &&
            'from-primary-900/40 via-primary-500/30 to-primary-100/10',
          variant === 'secondary' &&
            'from-secondary-900/40 via-secondary-500/30 to-secondary-100/10',
        )}
      />

      <div
        className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_0%,var(--conic-from),_#ffffff_25%,_#ffffff_75%,var(--conic-to))] dark:bg-[conic-gradient(from_90deg_at_50%_0%,var(--conic-from),_#0c0a09_25%,_#0c0a09_75%,var(--conic-to))] opacity-70"
        style={
          {
            '--conic-from': bgColors.from,
            '--conic-to': bgColors.to,
            '--conic-via-light': bgColors.viaLight,
            '--conic-via-dark': bgColors.viaDark,
          } as React.CSSProperties
        }
      />
    </div>
  );
};
