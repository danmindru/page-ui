'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingEllipseSideCtaBg = ({
  className,
  variant = 'default',
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [colors, setColors] = useState({
    color1: 'rgba(177, 177, 177, 0.3)',
    color2: 'rgba(34, 34, 34, 0.3)',
  });

  const ellipsePositions = {
    ellipse1: { left: '-25%', top: '25%' },
    ellipse2: { right: '-25%', top: '50%' },
  };

  const generateNewColors = useCallback(() => {
    if (!domRef.current) return;

    const computedStyle = getComputedStyle(domRef.current);

    let newColors;
    switch (variant) {
      case 'primary': {
        const primaryLighter = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        const primaryDarker = computedStyle
          .getPropertyValue('--primary-darker')
          .trim();
        newColors = {
          color1:
            convertToRgba({ color: primaryLighter, opacity: 0.3 }) ||
            'rgba(177, 177, 177, 0.3)',
          color2:
            convertToRgba({ color: primaryDarker, opacity: 0.3 }) ||
            'rgba(34, 34, 34, 0.3)',
        };
        break;
      }
      case 'secondary': {
        const secondaryLighter = computedStyle
          .getPropertyValue('--secondary-lighter')
          .trim();
        const secondaryDarker = computedStyle
          .getPropertyValue('--secondary-darker')
          .trim();
        newColors = {
          color1:
            convertToRgba({ color: secondaryLighter, opacity: 0.3 }) ||
            'rgba(177, 177, 177, 0.3)',
          color2:
            convertToRgba({ color: secondaryDarker, opacity: 0.3 }) ||
            'rgba(34, 34, 34, 0.3)',
        };
        break;
      }
      default: {
        const primaryLighter = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        const secondaryDarker = computedStyle
          .getPropertyValue('--secondary-darker')
          .trim();
        newColors = {
          color1:
            convertToRgba({ color: primaryLighter, opacity: 0.3 }) ||
            'rgba(177, 177, 177, 0.3)',
          color2:
            convertToRgba({ color: secondaryDarker, opacity: 0.3 }) ||
            'rgba(34, 34, 34, 0.3)',
        };
        break;
      }
    }
    setColors(newColors);
  }, [variant]);

  // Animation duration: 10s animation + 5s repeatDelay = 15s total cycle
  const cycleDuration = 15 * 1000;

  const handleCycleReset = useCallback(() => {
    generateNewColors();
    setAnimationKey((prev) => prev + 1);
  }, [generateNewColors]);

  useEffect(() => {
    generateNewColors();
  }, [generateNewColors]);

  useEffect(() => {
    const interval = setInterval(handleCycleReset, cycleDuration);
    return () => clearInterval(interval);
  }, [handleCycleReset, cycleDuration]);

  return (
    <div ref={domRef} className={clsx('inset-0', className)}>
      <motion.div
        key={`ellipse1-${animationKey}`}
        initial={{ opacity: 0.9, scale: 0.8 }}
        animate={{ opacity: [0.9, 1, 1, 0.9], scale: [0.8, 1, 1, 0.8] }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 5,
        }}
        className="absolute h-96 w-96 rounded-full blur-3xl"
        style={{
          backgroundColor: colors.color1,
          left: ellipsePositions.ellipse1.left,
          top: ellipsePositions.ellipse1.top,
        }}
      />
      <motion.div
        key={`ellipse2-${animationKey}`}
        initial={{ opacity: 0.9, scale: 0.8 }}
        animate={{ opacity: [0.9, 1, 1, 0.9], scale: [0.8, 1, 1, 0.8] }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 5,
          delay: 0.5,
        }}
        className="absolute h-96 w-96 rounded-full blur-3xl"
        style={{
          backgroundColor: colors.color2,
          right: ellipsePositions.ellipse2.right,
          top: ellipsePositions.ellipse2.top,
        }}
      />
    </div>
  );
};
