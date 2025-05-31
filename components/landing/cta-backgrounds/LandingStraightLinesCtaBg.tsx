'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingStraightLinesCtaBg = ({
  className,
  variant = 'default',
  speed = 'fast',
  strokeWidth = 2,
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  speed?: 'slow' | 'normal' | 'fast';
  strokeWidth?: number;
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [colors, setColors] = useState(['#ccc', '#222']);
  const [backgroundColors, setBackgroundColors] = useState({
    color1: 'rgba(204, 204, 204, 0.05)',
    color2: 'rgba(34, 34, 34, 0.05)',
  });
  const [linePositions, setLinePositions] = useState<number[]>([]);

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
        newColors = [
          convertToRgba({ color: primaryLighter, opacity: 1 }) || '#ccc',
          convertToRgba({ color: primaryDarker, opacity: 1 }) || '#222',
        ];
        break;
      }
      case 'secondary': {
        const secondaryLighter = computedStyle
          .getPropertyValue('--secondary-lighter')
          .trim();
        const secondaryDarker = computedStyle
          .getPropertyValue('--secondary-darker')
          .trim();
        newColors = [
          convertToRgba({ color: secondaryLighter, opacity: 1 }) || '#ccc',
          convertToRgba({ color: secondaryDarker, opacity: 1 }) || '#222',
        ];
        break;
      }
      default: {
        const primaryLighter = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        const secondaryDarker = computedStyle
          .getPropertyValue('--secondary-darker')
          .trim();
        newColors = [
          convertToRgba({ color: primaryLighter, opacity: 1 }) || '#ccc',
          convertToRgba({ color: secondaryDarker, opacity: 1 }) || '#222',
        ];
        break;
      }
    }
    setColors(newColors);
  }, [variant]);

  const generateNewBackgroundColors = useCallback(() => {
    if (!domRef.current) return;

    const computedStyle = getComputedStyle(domRef.current);

    let newBackgroundColors;
    switch (variant) {
      case 'primary': {
        const primaryLighter = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        const primaryDarker = computedStyle
          .getPropertyValue('--primary-darker')
          .trim();
        newBackgroundColors = {
          color1:
            convertToRgba({ color: primaryLighter, opacity: 0.05 }) ||
            'rgba(204, 204, 204, 0.05)',
          color2:
            convertToRgba({ color: primaryDarker, opacity: 0.05 }) ||
            'rgba(34, 34, 34, 0.05)',
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
        newBackgroundColors = {
          color1:
            convertToRgba({ color: secondaryLighter, opacity: 0.05 }) ||
            'rgba(204, 204, 204, 0.05)',
          color2:
            convertToRgba({ color: secondaryDarker, opacity: 0.05 }) ||
            'rgba(34, 34, 34, 0.05)',
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
        newBackgroundColors = {
          color1:
            convertToRgba({ color: primaryLighter, opacity: 0.05 }) ||
            'rgba(204, 204, 204, 0.05)',
          color2:
            convertToRgba({ color: secondaryDarker, opacity: 0.05 }) ||
            'rgba(34, 34, 34, 0.05)',
        };
        break;
      }
    }
    setBackgroundColors(newBackgroundColors);
  }, [variant]);

  const generateNewPositions = useCallback(() => {
    const newPositions = [...Array(4)].map((_, index) => {
      const basePosition = 4 + index * 10;
      const randomOffset = (Math.random() - 0.5) * 30;
      return Math.max(0, Math.min(80, basePosition + randomOffset));
    });
    setLinePositions(newPositions);
  }, []);

  const getAnimationDuration = () => {
    switch (speed) {
      case 'slow':
        return 16;
      case 'fast':
        return 4;
      default:
        return 10;
    }
  };

  const getRepeatDelay = () => {
    switch (speed) {
      case 'slow':
        return 4;
      case 'fast':
        return 1;
      default:
        return 2;
    }
  };

  const duration = getAnimationDuration();
  const cycleDuration = duration * 1000; // Convert to milliseconds

  const handleCycleReset = useCallback(() => {
    generateNewColors();
    generateNewBackgroundColors();
    generateNewPositions();
    setAnimationKey((prev) => prev + 1);
  }, [generateNewColors, generateNewBackgroundColors, generateNewPositions]);

  // Generate initial state
  useEffect(() => {
    generateNewColors();
    generateNewBackgroundColors();
    generateNewPositions();
  }, [generateNewColors, generateNewBackgroundColors, generateNewPositions]);

  // Set up timer for cycle resets
  useEffect(() => {
    const interval = setInterval(handleCycleReset, cycleDuration);
    return () => clearInterval(interval);
  }, [handleCycleReset, cycleDuration]);

  return (
    <motion.div
      ref={domRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={clsx('w-full h-full relative inset-0', className)}
      style={{
        background: `linear-gradient(135deg, ${backgroundColors.color1} 0%, ${backgroundColors.color2} 50%, ${backgroundColors.color1} 100%)`,
      }}
    >
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`line-${animationKey}-${i}`}
          initial={{ x: '100%' }}
          animate={{
            x: '-100%',
          }}
          transition={{
            duration: getAnimationDuration(),
            delay: i * getRepeatDelay(),
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="absolute right-0"
          style={{
            top: `${linePositions[i] || 4 + i * 10}%`,
            height: `${strokeWidth}px`,
            width: '100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.7, 0] }}
            transition={{
              duration: getAnimationDuration(),
              delay: i * getRepeatDelay() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'loop',
              ease: 'linear',
            }}
            className="h-full w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${
                colors[i % colors.length]
              }, 60%, transparent)`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
