import React from 'react';
import clsx from 'clsx';
import { LandingBentoGridItem, BentoGridItem } from './LandingBentoGridItem';

export interface LandingBentoGridSectionProps {
  title?: string;
  titleComponent?: React.ReactNode;
  description?: string;
  descriptionComponent?: React.ReactNode;
  items?: BentoGridItem[];
  children?: React.ReactNode;
  className?: string;
  gridClassName?: string;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  backgroundGlowVariant?: 'primary' | 'secondary';
  variant?: 'default' | 'primary' | 'secondary';
  textPosition?: 'center' | 'left';
}

/**
 * A flexible bento grid section component for creating visually appealing grid layouts.
 * Supports both programmatic items array and declarative children components.
 */
export function LandingBentoGridSection({
  title,
  titleComponent,
  description,
  descriptionComponent,
  items = [],
  children,
  className = '',
  gridClassName = '',
  withBackground = false,
  withBackgroundGlow = false,
  backgroundGlowVariant = 'primary',
  variant = 'default',
  textPosition = 'center',
}: LandingBentoGridSectionProps) {
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
          <div
            className={clsx(
              'w-full lg:w-3/4 h-auto z-0 dark:opacity-50 opacity-100 rounded-full blur-3xl',
              backgroundGlowVariant === 'primary'
                ? 'bg-primary-200/30 dark:bg-primary-900/30'
                : 'bg-secondary-200/30 dark:bg-secondary-900/30',
            )}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'container-wide w-full px-6 flex flex-col relative',
          textPosition === 'center'
            ? 'items-center text-center'
            : 'items-start text-left',
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
            'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bento',
            variant,
            gridClassName,
          )}
        >
          {hasChildrenToRender
            ? children
            : items.map((item, index) => (
                <LandingBentoGridItem
                  key={index}
                  title={item.title}
                  titleComponent={item.titleComponent}
                  description={item.description}
                  descriptionComponent={item.descriptionComponent}
                  content={item.content}
                  colSpan={item.colSpan}
                  rowSpan={item.rowSpan}
                  className={item.className}
                  href={item.href}
                  variant={item.variant}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
