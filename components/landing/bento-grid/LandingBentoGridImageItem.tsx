import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { LandingBentoGridItem, ItemVariant } from './LandingBentoGridItem';

/**
 * A specialized bento grid item with optional top text, center image, and bottom text.
 * Text elements can have different color variants (default, primary, secondary).
 */
export function LandingBentoGridImageItem({
  topText,
  topTextComponent,
  imageSrc,
  imageAlt = '',
  imageComponent,
  imageFill = true,
  imageHeight = 400,
  imageWidth = 400,
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
  imageSrc?: string;
  imageAlt?: string;
  imageComponent?: React.ReactNode;
  imageFill?: boolean;
  imageHeight?: number;
  imageWidth?: number;
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

      {imageComponent ||
        (imageSrc && (
          <div
            className={clsx(
              'flex items-center justify-center relative overflow-hidden rounded-md',
              imageFill && '-mx-6',
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              height={imageHeight}
              width={imageWidth}
              className={clsx(imageFill ? 'w-full' : 'object-cover')}
            />
          </div>
        ))}

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
