'use client';

import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingFlyingParticleCtaBg = ({
  className,
  variant = 'default',
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInside = false;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      mouseX = canvas.width / 2;
      mouseY = canvas.height / 2;
    };

    updateCanvasSize();

    const particles: Particle[] = [];
    const particleCount = 80;

    const getParticleColor = () => {
      const computedStyle = getComputedStyle(canvas);

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

          return [
            convertToRgba({ color: primaryLighter, opacity: 0.6 }),
            convertToRgba({ color: primaryMain, opacity: 0.5 }),
            convertToRgba({ color: primaryDarker, opacity: 0.7 }),
          ];
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

          return [
            convertToRgba({ color: secondaryLighter, opacity: 0.6 }),
            convertToRgba({ color: secondaryMain, opacity: 0.5 }),
            convertToRgba({ color: secondaryDarker, opacity: 0.7 }),
          ];
        }
        default:
          return [
            'rgba(177, 177, 177, 0.6)',
            'rgba(140, 140, 140, 0.5)',
            'rgba(100, 100, 100, 0.7)',
          ];
      }
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      originalSpeedX: number;
      originalSpeedY: number;
      colorIndex: number;
      randomOffsetX: number;
      randomOffsetY: number;
      timeOffsetX: number;
      timeOffsetY: number;
      time: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() * 3 - 1.5) * 0.1;
        this.speedY = (Math.random() * 3 - 1.5) * 0.1;
        this.originalSpeedX = this.speedX;
        this.originalSpeedY = this.speedY;

        this.randomOffsetX = 0;
        this.randomOffsetY = 0;
        this.timeOffsetX = Math.random() * Math.PI * 2; // Random phase offset
        this.timeOffsetY = Math.random() * Math.PI * 2; // Random phase offset
        this.time = 0;

        // Store color index instead of actual color string
        this.colorIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
      }

      update() {
        const mouseInfluence = 0.002;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Increment time for smooth wave movement
        this.time += 0.01;

        this.randomOffsetX = Math.sin(this.time + this.timeOffsetX) * 0.3;
        this.randomOffsetY = Math.cos(this.time * 0.7 + this.timeOffsetY) * 0.3;

        // Calculate mouse influence (only when mouse is inside the container)
        let mouseInfluenceX = 0;
        let mouseInfluenceY = 0;

        if (
          isMouseInside &&
          mouseX > 0 &&
          mouseX < canvas.width &&
          mouseY > 0 &&
          mouseY < canvas.height
        ) {
          mouseInfluenceX = (mouseX - centerX) * mouseInfluence;
          mouseInfluenceY = (mouseY - centerY) * mouseInfluence;
        }

        // Update position with original speed, mouse influence, and smooth wave movement
        this.x +=
          this.originalSpeedX + mouseInfluenceX + this.randomOffsetX * 0.01;
        this.y +=
          this.originalSpeedY + mouseInfluenceY + this.randomOffsetY * 0.01;

        const buffer = 6; // Larger buffer to prevent edge sticking

        if (this.x <= buffer) {
          this.originalSpeedX =
            Math.abs(this.originalSpeedX) + Math.random() * 0.05;
          this.x = buffer + 1;
        } else if (this.x >= canvas.width - buffer) {
          this.originalSpeedX =
            -Math.abs(this.originalSpeedX) - Math.random() * 0.05;
          this.x = canvas.width - buffer - 1;
        }

        if (this.y <= buffer) {
          this.originalSpeedY =
            Math.abs(this.originalSpeedY) + Math.random() * 0.05;
          this.y = buffer + 1;
        } else if (this.y >= canvas.height - buffer) {
          this.originalSpeedY =
            -Math.abs(this.originalSpeedY) - Math.random() * 0.05;
          this.y = canvas.height - buffer - 1;
        }

        // Occasionally add small random changes to prevent too predictable movement
        if (Math.random() < 0.005) {
          this.originalSpeedX += (Math.random() - 0.5) * 0.02;
          this.originalSpeedY += (Math.random() - 0.5) * 0.02;

          this.originalSpeedX = Math.max(
            -0.3,
            Math.min(0.3, this.originalSpeedX),
          );
          this.originalSpeedY = Math.max(
            -0.3,
            Math.min(0.3, this.originalSpeedY),
          );
        }
      }

      draw() {
        if (!ctx) return;

        // Get fresh colors on each draw to reflect CSS variable changes
        const colors = getParticleColor();
        const color = colors[this.colorIndex];

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvasRef.current) return;
      updateCanvasSize();
      init(); // Reinitialize particles with new canvas size
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
      isMouseInside = true;
    };

    const handleMouseLeave = () => {
      isMouseInside = false;
    };

    const parentElement = canvas.parentElement?.parentElement;
    if (!parentElement) return;

    init();
    animate();

    window.addEventListener('resize', handleResize);
    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [variant]);

  return (
    <canvas ref={canvasRef} className={clsx('h-full w-full', className)} />
  );
};
