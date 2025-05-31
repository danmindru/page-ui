'use client';

import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { convertToRgba } from '@/lib/utils';

export const LandingGridPatternCtaBg = ({
  className,
  variant = 'default',
  enableMouseTracking = true,
  gridSize = 'medium',
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  enableMouseTracking?: boolean;
  gridSize?: 'small' | 'medium' | 'large' | 'xlarge' | number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gridX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });
  const gridY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    if (!enableMouseTracking) return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(((e.clientX - centerX) / centerX) * 20);
      mouseY.set(((e.clientY - centerY) / centerY) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, enableMouseTracking]);

  const getGridSize = () => {
    if (typeof gridSize === 'number') {
      return `${gridSize}px ${gridSize}px`;
    }

    switch (gridSize) {
      case 'small':
        return 'clamp(12px, 2.5vw, 24px) clamp(12px, 2.5vw, 24px)';
      case 'large':
        return 'clamp(32px, 6vw, 64px) clamp(32px, 6vw, 64px)';
      case 'xlarge':
        return 'clamp(64px, 12vw, 128px) clamp(64px, 12vw, 128px)';
      case 'medium':
      default:
        return 'clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)';
    }
  };

  const getGridColor = () => {
    if (!containerRef.current) {
      return 'rgba(200, 200, 200, 0.2)';
    }

    const computedStyle = getComputedStyle(containerRef.current);

    switch (variant) {
      case 'primary': {
        const primaryColor = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        return convertToRgba({ color: primaryColor, opacity: 0.2 });
      }
      case 'secondary': {
        const secondaryColor = computedStyle
          .getPropertyValue('--secondary-lighter')
          .trim();
        return convertToRgba({ color: secondaryColor, opacity: 0.2 });
      }
      default:
        return 'rgba(200, 200, 200, 0.2)';
    }
  };

  const getGradientOverlay = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-t from-primary-950/80 via-transparent to-transparent dark:from-primary-950/60';
      case 'secondary':
        return 'bg-gradient-to-t from-secondary-950/80 via-transparent to-transparent dark:from-secondary-950/60';
      default:
        return 'bg-gradient-to-t from-black/80 via-transparent to-transparent';
    }
  };

  const gridColor = getGridColor();
  const gradientOverlay = getGradientOverlay();
  const gridSizeValue = getGridSize();

  return (
    <div
      ref={containerRef}
      className={clsx('relative w-full h-full overflow-hidden', className)}
    >
      <motion.div
        className="absolute inset-0 opacity-100 dark:opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: gridSizeValue,
          x: enableMouseTracking ? gridX : 0,
          y: enableMouseTracking ? gridY : 0,
        }}
        aria-hidden="true"
      />
      <div
        className={clsx('absolute inset-0', gradientOverlay)}
        aria-hidden="true"
      />
    </div>
  );
};
