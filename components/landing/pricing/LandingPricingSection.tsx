import clsx from 'clsx';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import React from 'react';

/**
 * A component meant to be used in the landing page.
 * It shows a pricing section with a title, description, and can render columns of pricing plans.
 */
export const LandingPricingSection = ({
  children,
  className,
  title,
  titleComponent,
  description,
  descriptionComponent,
  textPosition = 'center',
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
}: {
  children?: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
}) => {
  const columnNumber = React.Children.count(children);

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
        withBackgroundGlow ? 'relative overflow-hidden' : '',
        className,
      )}
    >
      {withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-2/3 pointer-events-none">
          <GlowBg
            className={clsx('w-full h-auto z-0 dark:opacity-50 opacity-100')}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'w-full p-6 flex flex-col items-center relative',
          textPosition === 'center' ? 'justify-center' : 'md:max-w-2xl',
        )}
      >
        <div
          className={clsx(
            'w-full flex flex-col gap-4',
            textPosition === 'center'
              ? 'md:max-w-lg xl:max-w-2xl items-center text-center'
              : 'items-start',
          )}
        >
          {titleComponent || (title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              {title}
            </h2>
          ))}

          {descriptionComponent || (description && (
            <p className="md:text-lg -mt-3">{description}</p>
          ))}
        </div>

        <div
          className={clsx(
            'isolate mt-12 grid mx-auto max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none text-left',
            columnNumber === 2 ? 'lg:grid-cols-2' : '',
            columnNumber === 3 ? 'lg:grid-cols-3' : '',
            columnNumber === 4 ? 'lg:grid-cols-4' : '',
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
