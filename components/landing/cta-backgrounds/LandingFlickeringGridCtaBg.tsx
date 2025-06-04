'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingFlickeringGridCtaBg = ({
  className,
  variant = 'default',
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.1,
  maxOpacity = 0.3,
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  maxOpacity?: number;
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const colorsRef = useRef<string[]>([
    'rgba(177, 177, 177,',
    'rgba(34, 34, 34,',
    'rgba(100, 100, 100,',
  ]);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const generateNewColors = useCallback(() => {
    if (!domRef.current) return;

    const computedStyle = getComputedStyle(domRef.current);

    let newColors;
    switch (variant) {
      case 'primary': {
        const primaryLighter = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        const primaryMain = computedStyle
          .getPropertyValue('--primary-main')
          .trim();
        const primaryDarker = computedStyle
          .getPropertyValue('--primary-darker')
          .trim();
        newColors = {
          color1:
            convertToRgba({ color: primaryLighter, opacity: 1 }) ||
            'rgb(177, 177, 177)',
          color2:
            convertToRgba({ color: primaryMain, opacity: 1 }) ||
            'rgb(100, 100, 100)',
          color3:
            convertToRgba({ color: primaryDarker, opacity: 1 }) ||
            'rgb(34, 34, 34)',
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
        newColors = {
          color1:
            convertToRgba({ color: secondaryLighter, opacity: 1 }) ||
            'rgb(177, 177, 177)',
          color2:
            convertToRgba({ color: secondaryMain, opacity: 1 }) ||
            'rgb(100, 100, 100)',
          color3:
            convertToRgba({ color: secondaryDarker, opacity: 1 }) ||
            'rgb(34, 34, 34)',
        };
        break;
      }
      default: {
        const primaryLighter = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        const secondaryMain = computedStyle
          .getPropertyValue('--secondary-main')
          .trim();
        const secondaryDarker = computedStyle
          .getPropertyValue('--secondary-darker')
          .trim();
        newColors = {
          color1:
            convertToRgba({ color: primaryLighter, opacity: 1 }) ||
            'rgb(177, 177, 177)',
          color2:
            convertToRgba({ color: secondaryMain, opacity: 1 }) ||
            'rgb(100, 100, 100)',
          color3:
            convertToRgba({ color: secondaryDarker, opacity: 1 }) ||
            'rgb(34, 34, 34)',
        };
        break;
      }
    }

    // Update the ref with converted colors
    const toRGBA = (color: string) => {
      if (typeof window === 'undefined') {
        return `rgba(0, 0, 0,`;
      }
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext('2d');
      if (!ctx) return 'rgba(255, 0, 0,';
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    colorsRef.current = [
      newColors.color1,
      newColors.color2,
      newColors.color3,
    ].map(toRGBA);
  }, [variant]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.floor(width / (squareSize + gridGap));
      const rows = Math.floor(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      const squareColors = new Uint8Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
        squareColors[i] = Math.floor(Math.random() * 3);
      }

      return { cols, rows, squares, squareColors, dpr };
    },
    [squareSize, gridGap, maxOpacity],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, squareColors: Uint8Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
          squareColors[i] = Math.floor(Math.random() * 3);
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      squareColors: Uint8Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const index = i * rows + j;
          const opacity = squares[index];
          const colorIndex = squareColors[index];
          ctx.fillStyle = `${colorsRef.current[colorIndex]}${opacity})`;
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr,
          );
        }
      }
    },
    [squareSize, gridGap],
  );

  const cycleDuration = 5 * 1000;

  useEffect(() => {
    generateNewColors();
  }, [generateNewColors]);

  useEffect(() => {
    const interval = setInterval(() => {
      generateNewColors();
    }, cycleDuration);
    return () => clearInterval(interval);
  }, [generateNewColors, cycleDuration]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;
    let isInitialized = false;

    const updateCanvasSize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });

      // Only recreate the grid if it's the first time or canvas size changed significantly
      if (
        !isInitialized ||
        !gridParams ||
        Math.abs(
          newWidth - (canvas.style.width ? parseInt(canvas.style.width) : 0),
        ) > 10 ||
        Math.abs(
          newHeight - (canvas.style.height ? parseInt(canvas.style.height) : 0),
        ) > 10
      ) {
        gridParams = setupCanvas(canvas, newWidth, newHeight);
        isInitialized = true;
      } else {
        // Just update the canvas size but keep the existing squares
        const dpr = window.devicePixelRatio || 1;
        canvas.width = newWidth * dpr;
        canvas.height = newHeight * dpr;
        canvas.style.width = `${newWidth}px`;
        canvas.style.height = `${newHeight}px`;
        gridParams.dpr = dpr;
      }
    };

    updateCanvasSize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView || !gridParams) return;

      const deltaTime = Math.min((time - lastTime) / 1000, 0.1); // Cap deltaTime to prevent large jumps
      lastTime = time;

      updateSquares(gridParams.squares, gridParams.squareColors, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.squareColors,
        gridParams.dpr,
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, isInView]);

  return (
    <div ref={domRef} className={clsx('inset-0 opacity-60', className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
      >
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0"
          style={{
            width: canvasSize.width,
            height: canvasSize.height,
          }}
        />
      </motion.div>
    </div>
  );
};
