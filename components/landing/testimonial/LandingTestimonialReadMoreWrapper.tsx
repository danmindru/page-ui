'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/shared/ui/button';

/**
 * Wraps the testimonial section in the landing page, and adds a "Read more" button (truncates to the given height).
 */
export const LandingTestimonialReadMoreWrapper = ({
  children,
  className,
  size = 'lg',
  variant = 'primary',
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div
      className={clsx(
        'relative w-full flex justify-center items-start overflow-hidden',
        className,

        size === 'lg'
          ? readMore
            ? 'h-auto'
            : 'h-[200vh] sm:h-[150vh] lg:h-[1200px] xl:h-[1100px]'
          : '',
        size === 'md'
          ? readMore
            ? 'h-auto'
            : 'h-[150vh] sm:h-[100vh] lg:h-[800px] xl:h-[700px]'
          : '',
        size === 'sm'
          ? readMore
            ? 'h-auto'
            : 'h-[100vh] sm:h-[50vh] lg:h-[600px] xl:h-[500px]'
          : '',
      )}
    >
      {children}

      {readMore ? null : (
        <>
          <div
            className={clsx(
              'pointer-events-none z-20 absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-gray-100 via-gray-100/40 dark:from-gray-950 dark:via-gray-950/60',
            )}
          />
          <div className="z-20 absolute bottom-12 left-0 right-0 flex justify-center items-center">
            <Button
              variant={variant}
              className="backdrop-blur-sm"
              onClick={() => setReadMore(true)}
            >
              Read more testimonials
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
