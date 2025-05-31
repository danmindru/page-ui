'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { convertToRgba } from '@/lib/utils';

export const LandingMouseHighlightCtaBg = ({
  className,
  variant = 'default',
  size = '600px',
  trackingDomElement,
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  size?: string;
  trackingDomElement?: HTMLElement; // If passed, will track the mouse position relative to this element instead of the parent element
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const getBgColor = () => {
    if (!domRef.current) {
      return 'rgba(177, 177, 177, 0.5)';
    }

    const computedStyle = getComputedStyle(domRef.current);

    switch (variant) {
      case 'primary': {
        const primaryColor = computedStyle
          .getPropertyValue('--primary-lighter')
          .trim();
        return convertToRgba({ color: primaryColor, opacity: 0.5 });
      }
      case 'secondary': {
        const secondaryColor = computedStyle
          .getPropertyValue('--secondary-lighter')
          .trim();
        return convertToRgba({ color: secondaryColor, opacity: 0.5 });
      }
      default:
        return 'rgba(177, 177, 177, 0.5)';
    }
  };

  useEffect(() => {
    const element = domRef.current;
    const parentElement =
      trackingDomElement || element?.parentElement?.parentElement;
    if (!parentElement) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = parentElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    };

    parentElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, [domRef, trackingDomElement]);

  return (
    <div
      ref={domRef}
      className={clsx('w-full h-full transition-all duration-500', className)}
      style={{
        background: `radial-gradient(${size} at ${mousePosition.x}px ${
          mousePosition.y
        }px, ${getBgColor()}, transparent 80%)`,
      }}
    />
  );
};
