'use client';

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

interface ShapeConfig {
  id: number;
  width: number;
  height: number;
  rotate: number;
  delay: number;
  x: string;
  y: string;
  colorIndex: number;
}

const ElegantShape = memo(
  ({
    config,
    shapeType,
    isInView,
    animationDuration,
    gradientColor,
  }: {
    config: ShapeConfig;
    shapeType: string;
    isInView: boolean;
    animationDuration: number;
    gradientColor: string;
  }) => {
    const getShapeStyles = useCallback((shapeType: string) => {
      const baseClasses =
        'absolute inset-0 backdrop-blur-[2px] border-2 border-slate-400/[0.2] dark:border-white/[0.15] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(120,120,120,0.2),transparent_70%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]';

      switch (shapeType) {
        case 'rectangle':
          return `${baseClasses} rounded-lg`;
        case 'triangle':
          return baseClasses;
        case 'square':
          return `${baseClasses} rounded-lg`;
        case 'circle':
          return `${baseClasses} rounded-full`;
        case 'ellipse':
        default:
          return `${baseClasses} rounded-full`;
      }
    }, []);

    return (
      <motion.div
        initial={{
          opacity: 0,
          y: -150,
          rotate: config.rotate - 15,
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : -150,
          rotate: config.rotate,
        }}
        transition={{
          duration: 2.4,
          delay: config.delay,
          ease: [0.23, 0.86, 0.39, 0.96],
          opacity: { duration: 1.2 },
        }}
        className={clsx('absolute', config.x, config.y)}
      >
        <motion.div
          animate={
            isInView
              ? {
                  y: [0, 15, 0],
                }
              : { y: 0 }
          }
          transition={{
            duration: animationDuration,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: config.delay + 2.4, // Start floating after entrance animation completes
          }}
          style={{
            width: config.width,
            height: config.height,
          }}
          className="relative"
        >
          <div
            className={clsx(
              getShapeStyles(shapeType),
              'transition-all transition-duration-[2000ms]',
            )}
            style={{
              backgroundImage: `linear-gradient(to right, ${gradientColor})`,
              ...(shapeType === 'triangle'
                ? {
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  }
                : {}),
            }}
          />
        </motion.div>
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison - only re-render if shape properties change, not gradients
    return (
      prevProps.config.id === nextProps.config.id &&
      prevProps.shapeType === nextProps.shapeType &&
      prevProps.isInView === nextProps.isInView &&
      prevProps.animationDuration === nextProps.animationDuration &&
      prevProps.gradientColor === nextProps.gradientColor
    );
  },
);

ElegantShape.displayName = 'ElegantShape';

export const LandingShapesCtaBg = ({
  className,
  variant = 'default',
  shapeType = 'rectangle',
  shapeCount = 5,
  animationSpeed = 'normal',
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  shapeType?: 'ellipse' | 'rectangle' | 'triangle' | 'square' | 'circle';
  shapeCount?: number;
  animationSpeed?: 'slow' | 'normal' | 'fast';
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [gradientColors, setGradientColors] = useState({
    color1: 'rgba(107, 114, 128, 0.15)', // gray-500
    color2: 'rgba(115, 115, 115, 0.15)', // neutral-500
    color3: 'rgba(100, 116, 139, 0.15)', // slate-500
  });

  // Generate shapes once and keep them stable
  const shapes = useMemo((): ShapeConfig[] => {
    const isSquare = ['square', 'triangle', 'circle'].includes(shapeType);
    const baseShapes = [
      {
        id: 1,
        width: isSquare ? 140 : 600,
        height: 140,
        rotate: 12,
        delay: 0.3,
        x: 'left-[-10%] md:left-[-5%]',
        y: 'top-[20%] md:top-[25%]',
      },
      {
        id: 2,
        width: isSquare ? 120 : 500,
        height: 120,
        rotate: -15,
        delay: 0.5,
        x: 'right-[-10%] md:right-[-5%]',
        y: 'top-[70%] md:top-[75%]',
      },
      {
        id: 3,
        width: isSquare ? 80 : 300,
        height: 80,
        rotate: -8,
        delay: 0.4,
        x: 'left-[0] md:left-[5%]',
        y: 'bottom-[5%] md:bottom-[10%]',
      },
      {
        id: 4,
        width: isSquare ? 60 : 200,
        height: 60,
        rotate: 20,
        delay: 0.6,
        x: 'right-[5%] md:right-[10%]',
        y: 'top-[10%] md:top-[15%]',
      },
      {
        id: 5,
        width: isSquare ? 40 : 150,
        height: 40,
        rotate: -25,
        delay: 0.7,
        x: 'left-[20%] md:left-[25%]',
        y: 'top-[0%] md:top-[5%]',
      },
    ];

    return baseShapes.slice(0, shapeCount).map((shape, index) => ({
      ...shape,
      colorIndex: index % 3,
    }));
  }, [shapeCount]); // Remove gradientColors from dependencies

  const generateNewColors = useCallback(() => {
    if (!domRef.current) return;

    const computedStyle = getComputedStyle(domRef.current);

    let newColors;
    switch (variant) {
      case 'primary': {
        const primaryMain = computedStyle
          .getPropertyValue('--primary-main')
          .trim();
        const primaryDarker = computedStyle
          .getPropertyValue('--primary-darker')
          .trim();

        // Convert the CSS variable colors to rgba
        const color1 = convertToRgba({ color: primaryDarker, opacity: 0.3 });
        const color2 = convertToRgba({ color: primaryMain, opacity: 0.1 });
        const color3 = convertToRgba({ color: primaryDarker, opacity: 0.6 });

        newColors = {
          color1: color1 || 'rgba(107, 114, 128, 0.15)',
          color2: color2 || 'rgba(107, 114, 128, 0.20)',
          color3: color3 || 'rgba(107, 114, 128, 0.10)',
        };
        break;
      }
      case 'secondary': {
        const secondaryLighter = computedStyle
          .getPropertyValue('--secondary-lighter')
          .trim();
        const secondaryMain = computedStyle
          .getPropertyValue('--secondary-main')
          .trim();
        const secondaryDarker = computedStyle
          .getPropertyValue('--secondary-darker')
          .trim();

        const color1 = convertToRgba({
          color: secondaryLighter,
          opacity: 0.15,
        });
        const color2 = convertToRgba({ color: secondaryMain, opacity: 0.2 });
        const color3 = convertToRgba({ color: secondaryDarker, opacity: 0.1 });

        newColors = {
          color1: color1 || 'rgba(115, 115, 115, 0.15)',
          color2: color2 || 'rgba(115, 115, 115, 0.20)',
          color3: color3 || 'rgba(115, 115, 115, 0.10)',
        };
        break;
      }
      default: {
        // Default neutral colors
        newColors = {
          color1: 'rgba(107, 114, 128, 0.15)', // gray-500
          color2: 'rgba(115, 115, 115, 0.15)', // neutral-500
          color3: 'rgba(100, 116, 139, 0.15)', // slate-500
        };
        break;
      }
    }
    setGradientColors(newColors);
  }, [variant]);

  const getAnimationDuration = useCallback(() => {
    switch (animationSpeed) {
      case 'slow':
        return 16;
      case 'fast':
        return 8;
      case 'normal':
      default:
        return 12;
    }
  }, [animationSpeed]);

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
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      >
        {isInView &&
          shapes.map((shape) => {
            const gradients = [
              gradientColors.color1,
              gradientColors.color2,
              gradientColors.color3,
            ];
            const gradientColor = gradients[shape.colorIndex];

            return (
              <ElegantShape
                key={shape.id}
                config={shape}
                shapeType={shapeType}
                isInView={isInView}
                animationDuration={getAnimationDuration()}
                gradientColor={gradientColor}
              />
            );
          })}
      </motion.div>
    </div>
  );
};
