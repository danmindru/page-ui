import React from 'react';
import clsx from 'clsx';
import { LandingBentoGridItem, ItemVariant } from './LandingBentoGridItem';
import { ColorVariant } from './LandingBentoGridIconItem';

/**
 * A specialized bento grid item with optional top text, center large number, and bottom text.
 * Each text and the number can have different color variants (default, primary, secondary).
 */
export function LandingBentoGridNumberItem({
  topText,
  topTextComponent,
  number,
  bottomText,
  bottomTextComponent,
  colSpan,
  rowSpan,
  className,
  href,
  variant = 'default',
  children,
  ...props
}: {
  topText?: string;
  topTextComponent?: React.ReactNode;
  number?: string | number;
  bottomText?: string;
  bottomTextComponent?: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  className?: string;
  href?: string;
  variant?: ItemVariant;
  children?: React.ReactNode;
}) {
  const content = (
    <div className="w-full h-full flex flex-col justify-center gap-3">
      {topTextComponent || (
        <div
          className={clsx(
            'flex items-start justify-center text-sm text-center',
            variant === 'primary' && 'text-primary-500 dark:text-primary-400',
            variant === 'secondary' &&
              'text-secondary-500 dark:text-secondary-400',
            variant === 'default' && 'text-foreground',
          )}
        >
          {topText}
        </div>
      )}

      {number !== undefined && (
        <div
          className={clsx(
            'text-3xl xl:text-5xl font-bold flex items-center justify-center',
            variant === 'primary' && 'text-primary-500 dark:text-primary-400',
            variant === 'secondary' &&
              'text-secondary-500 dark:text-secondary-400',
            variant === 'default' && 'text-foreground',
          )}
        >
          {number}
        </div>
      )}

      {bottomTextComponent || (
        <div
          className={clsx(
            'flex items-end justify-center text-sm text-center',
            variant === 'primary' && 'text-primary-500 dark:text-primary-400',
            variant === 'secondary' &&
              'text-secondary-500 dark:text-secondary-400',
            variant === 'default' && 'text-muted-foreground',
          )}
        >
          {bottomText}
        </div>
      )}
    </div>
  );

  return (
    <LandingBentoGridItem
      content={content}
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={className}
      href={href}
      variant={variant}
      {...props}
    >
      {children}
    </LandingBentoGridItem>
  );
}
