import { GlowBg } from '@/components/shared/ui/glow-bg';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

/**
 * A component meant to be used in the landing page.
 * It displays text and a grid of logos, optionally showcasing the companies that use the product, integrations etc.
 */
export const LandingShowcase = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  textPosition = 'left',
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  textPosition?: 'left' | 'right';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
}) => {
  return (
    <section
      className={clsx(
        'w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow ? 'overflow-x-hidden' : '',
        className,
      )}
    >
      <div
        className={clsx(
          'grid gap-8 items-center relative wide-container lg:grid-cols-2',
          innerClassName,
        )}
      >
        <div
          className={clsx(
            'flex flex-col gap-4',
            textPosition === 'right' && 'order-2 lg:order-1',
          )}
        >
          {title ? (
            <h2 className="text-4xl font-semibold">{title}</h2>
          ) : (
            titleComponent
          )}

          {description ? (
            <p className="mt-4 md:text-xl">{description}</p>
          ) : (
            descriptionComponent
          )}
        </div>

        {withBackgroundGlow ? (
          <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
            <GlowBg
              className={clsx(
                'w-full lg:w-1/2 h-auto z-0 dark:opacity-50 -top-1/3',
              )}
              variant={backgroundGlowVariant}
            />
          </div>
        ) : null}

        {children ? (
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
};
