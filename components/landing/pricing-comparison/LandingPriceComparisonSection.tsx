import clsx from 'clsx';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import React, { Children, cloneElement, ReactElement } from 'react';
import { LandingPriceComparisonColumn } from '@/components/landing/pricing-comparison/LandingPriceComparisonColumn';

type Child = ReactElement<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * A component meant to be used in the landing page.
 * It shows a price comparison section with a title, description, and can render columns of product comparisons.
 * Supports 2-5 columns for product comparison.
 */
export const LandingPriceComparisonSection = ({
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

  const childrenWithProps = Children.map(children, (child, index) => {
    if (!child) {
      return null;
    }

    if (typeof child !== 'object') {
      return child;
    }

    const reactChild = child as Child;
    const reactChildType = reactChild?.type;

    if (reactChildType === LandingPriceComparisonColumn) {
      return cloneElement(reactChild, {
        variant,
      });
    }

    return child;
  });

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
          'container-wide w-full px-6 flex flex-col items-center relative',
          textPosition === 'center' ? 'justify-center' : '',
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
            'isolate mt-12 grid mx-auto w-full',
            columnNumber === 2 ? 'grid-cols-2 max-w-2xl' : '',
            columnNumber === 3 ? 'grid-cols-3' : '',
            columnNumber === 4 ? 'grid-cols-4' : '',
            columnNumber === 5 ? 'grid-cols-5' : '',
            columnNumber > 5 ? 'grid-cols-5' : '',
            'min-w-0',
          )}
          style={{
            gridTemplateColumns:
              columnNumber > 5 ? 'repeat(5, minmax(200px, 1fr))' : undefined,
          }}
        >
          {childrenWithProps}
        </div>
      </div>
    </section>
  );
};
