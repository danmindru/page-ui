'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingPathsCtaBg = ({
  className,
  variant = 'default',
  position = 1,
  pathPosition = 'topRight',
  pathCount = 36,
  animationDuration = 20,
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  position?: number;
  pathPosition?: 'bottomLeft' | 'topRight' | 'bottomRight' | 'topLeft';
  pathCount?: number;
  animationDuration?: number;
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [strokeColor, setStrokeColor] = useState('rgba(100, 100, 100, 0.5)');

  const generateNewColors = useCallback(() => {
    if (!domRef.current) return;

    const computedStyle = getComputedStyle(domRef.current);

    let newStrokeColor;
    switch (variant) {
      case 'primary': {
        const primaryMain = computedStyle
          .getPropertyValue('--primary-main')
          .trim();
        newStrokeColor =
          convertToRgba({ color: primaryMain, opacity: 0.5 }) ||
          'rgba(100, 100, 100, 0.5)';
        break;
      }
      case 'secondary': {
        const secondaryMain = computedStyle
          .getPropertyValue('--secondary-main')
          .trim();
        newStrokeColor =
          convertToRgba({ color: secondaryMain, opacity: 0.5 }) ||
          'rgba(100, 100, 100, 0.5)';
        break;
      }
      default: {
        // For default variant, use a neutral gray color
        newStrokeColor = 'rgba(100, 100, 100, 0.5)';
        break;
      }
    }

    setStrokeColor(newStrokeColor);
  }, [variant]);

  const generatePaths = useCallback(() => {
    const offset = 200;
    return Array.from({ length: pathCount }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 8 * position + offset} -${189 + i * 10}C-${
        380 - i * 8 * position + offset
      } -${189 + i * 10} -${312 - i * 8 * position + offset} ${216 - i * 10} ${
        152 - i * 8 * position + offset
      } ${343 - i * 10}C${616 - i * 8 * position + offset} ${470 - i * 10} ${
        884 - i * 8 * position + offset
      } ${875 - i * 10} ${1000 - i * 8 * position + offset} ${875 - i * 10}`,
      width: 1.5 + i * 0.05,
      opacity: 0.1 + i * 0.03,
    }));
  }, [pathCount, position]);

  const paths = generatePaths();

  useEffect(() => {
    // Small delay to ensure DOM is rendered and CSS variables are available
    const timeout = setTimeout(() => {
      generateNewColors();
    }, 100);
    return () => clearTimeout(timeout);
  }, [generateNewColors]);

  useEffect(() => {
    const cycleDuration = 5 * 1000;
    const interval = setInterval(() => {
      generateNewColors();
    }, cycleDuration);
    return () => clearInterval(interval);
  }, [generateNewColors]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={clsx('inset-0', className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        className={clsx(
          'absolute inset-0 w-full h-full pointer-events-none',
          pathPosition === 'topRight' && '-scale-y-100',
          pathPosition === 'bottomRight' && '-scale-x-100',
          pathPosition === 'bottomLeft' && '-scale-x-100 -scale-y-100',
          pathPosition === 'topLeft' && '-scale-x-100',
          className,
        )}
      >
        <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
          <title>Background Paths</title>
          {isInView &&
            paths.map((path) => (
              <motion.path
                key={path.id}
                d={path.d}
                stroke={strokeColor}
                strokeWidth={path.width}
                strokeOpacity={path.opacity}
                fill="none"
                initial={{ pathLength: 0.4, pathOffset: 0, opacity: 0 }}
                animate={{
                  pathLength: 0.4,
                  pathOffset: [0, 1.5],
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  duration: animationDuration + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                  times: [0, 0.1, 0.8, 1],
                }}
              />
            ))}
        </svg>
      </motion.div>
    </div>
  );
};
