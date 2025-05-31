'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingCurvedLinesCtaBg = ({
  className,
  variant = 'default',
  speed = 'normal',
  strokeWidth = 2,
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  speed?: 'slow' | 'normal' | 'fast';
  strokeWidth?: number;
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [colors, setColors] = useState({ color1: '#ccc', color2: '#555' });

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
            convertToRgba({ color: primaryLighter, opacity: 1 }) || '#ccc',
          color2: convertToRgba({ color: primaryDarker, opacity: 1 }) || '#555',
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
            convertToRgba({ color: secondaryLighter, opacity: 1 }) || '#ccc',
          color2:
            convertToRgba({ color: secondaryDarker, opacity: 1 }) || '#555',
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
            convertToRgba({ color: primaryLighter, opacity: 1 }) || '#ccc',
          color2:
            convertToRgba({ color: secondaryDarker, opacity: 1 }) || '#555',
        };
        break;
      }
    }
    setColors(newColors);
  }, [variant]);

  const getAnimationDuration = () => {
    switch (speed) {
      case 'slow':
        return 6;
      case 'fast':
        return 2;
      default:
        return 4;
    }
  };

  const duration = getAnimationDuration();
  const cycleDuration = (duration + 1) * 1000; // Convert to milliseconds (duration + repeatDelay)

  const handleCycleReset = useCallback(() => {
    generateNewColors();
    setAnimationKey((prev) => prev + 1);
  }, [generateNewColors]);

  // Generate initial colors
  useEffect(() => {
    generateNewColors();
  }, [generateNewColors]);

  // Set up timer for cycle resets
  useEffect(() => {
    const interval = setInterval(handleCycleReset, cycleDuration);
    return () => clearInterval(interval);
  }, [handleCycleReset, cycleDuration]);

  return (
    <div
      ref={domRef}
      className={clsx('absolute inset-0 overflow-hidden', className)}
    >
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`grad1-${animationKey}`}
            x1="1"
            y1="0"
            x2="0"
            y2="0"
          >
            <stop offset="0%" stopColor={colors.color1} stopOpacity="0" />
            <stop offset="50%" stopColor={colors.color1} stopOpacity="0.5" />
            <stop offset="100%" stopColor={colors.color1} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={`grad2-${animationKey}`}
            x1="1"
            y1="0"
            x2="0"
            y2="0"
          >
            <stop offset="0%" stopColor={colors.color2} stopOpacity="0" />
            <stop offset="50%" stopColor={colors.color2} stopOpacity="0.5" />
            <stop offset="100%" stopColor={colors.color2} stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Top Curves */}
        <motion.path
          key={`path1-${animationKey}`}
          initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            pathOffset: [0, 0, 1, 1],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: duration,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            times: [0, 0.3, 0.7, 1],
          }}
          d="M 100 100 Q 300 0 500 100 T 900 100"
          fill="none"
          stroke={`url(#grad1-${animationKey})`}
          strokeWidth={strokeWidth}
        />
        <motion.path
          key={`path2-${animationKey}`}
          initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            pathOffset: [0, 0, 1, 1],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: duration,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            delay: 0.5,
            times: [0, 0.3, 0.7, 1],
          }}
          d="M 0 200 Q 200 100 400 200 T 800 200"
          fill="none"
          stroke={`url(#grad2-${animationKey})`}
          strokeWidth={strokeWidth}
        />
        {/* Bottom Curves */}
        <motion.path
          key={`path3-${animationKey}`}
          initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            pathOffset: [0, 0, 1, 1],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: duration,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            delay: 1,
            times: [0, 0.3, 0.7, 1],
          }}
          d="M 100 600 Q 300 500 500 600 T 900 600"
          fill="none"
          stroke={`url(#grad1-${animationKey})`}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};
