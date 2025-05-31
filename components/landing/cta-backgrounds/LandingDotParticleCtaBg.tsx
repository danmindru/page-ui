'use client';

import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingDotParticleCtaBg = ({
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

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();

    const particles: Particle[] = [];
    const particleCount = 100;

    const getParticleColor = () => {
      const computedStyle = getComputedStyle(canvas);

      switch (variant) {
        case 'primary': {
          const primaryColor = computedStyle
            .getPropertyValue('--primary-main')
            .trim();
          return convertToRgba({ color: primaryColor, opacity: 0.5 });
        }
        case 'secondary': {
          const secondaryColor = computedStyle
            .getPropertyValue('--secondary-main')
            .trim();
          return convertToRgba({ color: secondaryColor, opacity: 0.5 });
        }
        default:
          return 'rgba(177, 177, 177, 0.5)';
      }
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = (Math.random() * 2 + 0.1) * 1.5;
        this.speedX = (Math.random() * 2 - 1) * 0.25;
        this.speedY = (Math.random() * 2 - 1) * 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = getParticleColor();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [variant]);

  return (
    <canvas ref={canvasRef} className={clsx('h-full w-full', className)} />
  );
};
