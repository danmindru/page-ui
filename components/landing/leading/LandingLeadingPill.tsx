'use client';

import { convertToRgba } from '@/lib/utils';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * A flexible pill component for landing pages that can display text with optional left/right components.
 * Supports various color variants, backgrounds, and can be clickable (link or button).
 */
export const LandingLeadingPill = ({
  className,
  textVariant = 'default',
  borderVariant = 'default',
  backgroundVariant = 'default',
  withBackground = false,
  withBorder = true,
  borderWidth = 1,
  text,
  textComponent,
  children,
  textStyle = 'default',
  leftComponent,
  rightComponent,
  href,
  onClick,
}: {
  className?: string;
  textVariant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'lightGray'
    | 'darkGray'
    | 'white'
    | 'black';
  borderVariant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'lightGray'
    | 'darkGray'
    | 'pinkRainbow'
    | 'purpleRainbow'
    | 'yellowRainbow'
    | 'greenRainbow';
  backgroundVariant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'glass'
    | 'primaryGlass'
    | 'secondaryGlass';
  withBackground?: boolean;
  withBorder?: boolean;
  borderWidth?: number;
  text?: string;
  textComponent?: React.ReactNode;
  children?: React.ReactNode;
  textStyle?: 'default' | 'capitalize' | 'uppercase';
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) => {
  const isClickable = href || onClick;
  const isRainbowBorder = borderVariant.includes('Rainbow');
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [colors, setColors] = useState({
    primaryMain: '',
    secondaryMain: '',
  });
  const colorsRef = useRef(colors);
  const [gradientId] = useState(
    () =>
      `gradient-${borderVariant}-${Math.random().toString(36).substr(2, 9)}`,
  );

  const isGlass =
    backgroundVariant === 'glass' ||
    backgroundVariant === 'primaryGlass' ||
    backgroundVariant === 'secondaryGlass';

  const generateNewColors = useCallback(() => {
    if (!containerRef.current) return;

    const computedStyle = getComputedStyle(containerRef.current);
    const primaryMain = computedStyle.getPropertyValue('--primary-main').trim();
    const secondaryMain = computedStyle
      .getPropertyValue('--secondary-main')
      .trim();

    // Only update if values have actually changed
    if (
      primaryMain !== colorsRef.current.primaryMain ||
      secondaryMain !== colorsRef.current.secondaryMain
    ) {
      const newColors = { primaryMain, secondaryMain };
      colorsRef.current = newColors;
      setColors(newColors);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      generateNewColors();
    }, 100);
  }, [generateNewColors]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      generateNewColors();
    });

    const interval = setInterval(() => {
      generateNewColors();
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [generateNewColors]);

  // Update dimensions when content changes
  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setDimensions({ width: rect.width, height: rect.height });
          if (rect.width > 0 && rect.height > 0) {
            setIsVisible(true);
          }
        }
      };

      const timer = setTimeout(updateDimensions, 0);

      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(containerRef.current);

      return () => {
        clearTimeout(timer);
        resizeObserver.disconnect();
      };
    }
  }, [children, textComponent, text, leftComponent, rightComponent]);

  const textVariantClasses = {
    default: 'text-gray-700 dark:text-gray-300',
    primary: 'text-primary-900 dark:text-primary-100',
    secondary: 'text-secondary-900 dark:text-secondary-100',
    lightGray: 'text-gray-600 dark:text-gray-400',
    darkGray: 'text-gray-800 dark:text-gray-200',
    white: 'text-white dark:text-black',
    black: 'text-black dark:text-white',
  };

  const backgroundVariantClasses = {
    default: `bg-gray-300/10 dark:bg-gray-700/10`,
    primary: `bg-primary-100/10 dark:bg-primary-700/10`,
    secondary: `bg-secondary-100/10 dark:bg-secondary-700/10`,
    glass: `backdrop-blur-sm bg-gray-400/10 dark:bg-gray-700/10`,
    primaryGlass: `backdrop-blur-sm bg-primary-300/10 dark:bg-primary-900/10`,
    secondaryGlass: `backdrop-blur-sm bg-secondary-300/10 dark:bg-secondary-900/10`,
  };

  const textStyleClasses = {
    capitalize: 'capitalize',
    uppercase: 'uppercase tracking-wider',
  };

  const hoverClasses = isClickable
    ? 'hover:!opacity-70 transition-all duration-200 cursor-pointer hover:shadow-md'
    : '';

  const borderStroke = useMemo(() => {
    if (isRainbowBorder) {
      return `url(#${gradientId})`;
    }

    if (borderVariant === 'default' && isGlass) {
      switch (backgroundVariant) {
        case 'glass':
          return 'rgb(229 231 235 / 0.5)';
        case 'primaryGlass':
          return colors.primaryMain
            ? convertToRgba({ color: colors.primaryMain, opacity: 0.5 })
            : 'rgb(229 231 235 / 0.5)';
        case 'secondaryGlass':
          return colors.secondaryMain
            ? convertToRgba({ color: colors.secondaryMain, opacity: 0.5 })
            : 'rgb(229 231 235 / 0.5)';
      }
    }

    switch (borderVariant) {
      case 'primary':
        return colors.primaryMain
          ? convertToRgba({ color: colors.primaryMain, opacity: 0.5 })
          : 'rgb(229 231 235 / 0.5)';
      case 'secondary':
        return colors.secondaryMain
          ? convertToRgba({ color: colors.secondaryMain, opacity: 0.5 })
          : 'rgb(229 231 235 / 0.5)';
      case 'lightGray':
        return 'rgb(156 163 175 / 0.5)';
      case 'darkGray':
        return 'rgb(75 85 99 / 0.5)';
      default:
        return 'rgb(229 231 235 / 0.5)';
    }
  }, [
    isRainbowBorder,
    borderVariant,
    isGlass,
    backgroundVariant,
    colors,
    gradientId,
  ]);

  const rainbowGradient = useMemo(() => {
    if (!isRainbowBorder) return null;

    const gradients = {
      pinkRainbow: ['#ff619d', '#ff8bb7', '#e161ff'],
      purpleRainbow: ['#9c27b0', '#3f51b5', '#2196f3'],
      yellowRainbow: ['#eab308', '#ff5722', '#8b5cf6'],
      greenRainbow: ['#4caf50', '#00bcd4', '#9c27b0'],
    };

    const gradientColors =
      gradients[borderVariant as keyof typeof gradients] ||
      gradients.pinkRainbow;

    return {
      id: gradientId,
      colors: gradientColors,
    };
  }, [isRainbowBorder, borderVariant, gradientId]);

  const contentToRender = children || textComponent || text;

  const svgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  };

  const SvgElement = ({ className }: { className?: string }) => {
    return dimensions.width > 0 && dimensions.height > 0 ? (
      <motion.svg
        className={clsx('absolute inset-0 pointer-events-none', className)}
        width={dimensions.width}
        height={dimensions.height}
        aria-hidden="true"
        variants={svgVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <defs>
          {rainbowGradient && (
            <linearGradient
              id={rainbowGradient.id}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              {rainbowGradient.colors.map((color, index) => (
                <stop
                  key={index}
                  offset={`${
                    (index / (rainbowGradient.colors.length - 1)) * 100
                  }%`}
                  stopColor={color}
                />
              ))}
            </linearGradient>
          )}
        </defs>
        <rect
          x={borderWidth / 2}
          y={borderWidth / 2}
          width={dimensions.width - borderWidth}
          height={dimensions.height - borderWidth}
          rx={dimensions.height / 2}
          ry={dimensions.height / 2}
          fill="none"
          stroke={borderStroke}
          strokeWidth={borderWidth}
        />
      </motion.svg>
    ) : (
      <></>
    );
  };

  const pillContent = (
    <div className="relative inline-flex">
      {withBorder && <SvgElement />}
      {isGlass && withBorder && <SvgElement className="z-10" />}

      <motion.div
        ref={containerRef}
        className={clsx(
          'inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium relative',
          withBackground && backgroundVariantClasses[backgroundVariant],
          textVariantClasses[textVariant],
          hoverClasses,
          className,
        )}
        variants={contentVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {leftComponent && (
          <span className="inline-flex items-center justify-center flex-shrink-0">
            {leftComponent}
          </span>
        )}

        {contentToRender && (
          <span
            className={clsx(
              'flex-1 text-center truncate',
              textStyleClasses[textStyle],
            )}
          >
            {children || textComponent || <span>{text}</span>}
          </span>
        )}

        {rightComponent && (
          <span className="inline-flex items-center justify-center flex-shrink-0">
            {rightComponent}
          </span>
        )}
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {pillContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} type="button">
        {pillContent}
      </button>
    );
  }

  return pillContent;
};
