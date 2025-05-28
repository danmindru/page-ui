import React from 'react';
import clsx from 'clsx';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import { LandingProductCard, ProductCardProps } from './LandingProductCard';

export interface LandingProductSectionProps {
  title?: string;
  titleComponent?: React.ReactNode;
  description?: string;
  descriptionComponent?: React.ReactNode;
  products?: ProductCardProps[];
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  gridClassName?: string;
  gridColumns?: 3 | 4;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  backgroundGlowVariant?: 'primary' | 'secondary';
  variant?: 'primary' | 'secondary';
  textPosition?: 'center' | 'left';
}

/**
 * A flexible product grid section component for displaying product cards.
 * Supports both programmatic products array and declarative children components.
 */
export function LandingProductCardSection({
  title,
  titleComponent,
  description,
  descriptionComponent,
  products = [],
  children,
  className = '',
  innerClassName = '',
  gridClassName = '',
  gridColumns = 3,
  withBackground = false,
  withBackgroundGlow = false,
  backgroundGlowVariant = 'primary',
  variant = 'primary',
  textPosition = 'center',
}: LandingProductSectionProps) {
  const hasChildrenToRender = React.Children.count(children) > 0;

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
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-3/4 pointer-events-none">
          <GlowBg
            className={clsx(
              'w-full lg:w-3/4 h-auto z-0 dark:opacity-50 opacity-100',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'container-wide w-full px-6 flex flex-col relative',
          textPosition === 'center'
            ? 'items-center text-center'
            : 'items-start text-left',
          innerClassName,
        )}
      >
        {titleComponent ||
          (title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              {title}
            </h2>
          ))}

        {descriptionComponent ||
          (description && (
            <p className="text-muted-foreground max-w-2xl mb-8">
              {description}
            </p>
          ))}

        <div
          className={clsx(
            'w-full grid grid-cols-1 md:grid-cols-2',
            gridColumns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4',
            'gap-6',
            gridClassName,
          )}
        >
          {hasChildrenToRender
            ? children
            : products.map((product, index) => (
                <LandingProductCard key={index} {...product} />
              ))}
        </div>
      </div>
    </section>
  );
}
