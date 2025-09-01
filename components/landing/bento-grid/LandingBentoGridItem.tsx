import React from 'react';
import clsx from 'clsx';

export type ItemVariant = 'default' | 'primary' | 'secondary';

export interface BentoGridItem {
  title?: string;
  titleComponent?: React.ReactNode;
  description?: string;
  descriptionComponent?: React.ReactNode;
  content?: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: ItemVariant;
  children?: React.ReactNode;
}

/**
 * Individual, generic grid item for the bento grid layout.
 * Supports custom sizing through colSpan and rowSpan props.
 * Can render as a link or div based on href prop.
 */
export function LandingBentoGridItem({
  title,
  titleComponent,
  description,
  descriptionComponent,
  content,
  colSpan = 1,
  rowSpan = 1,
  className = '',
  href,
  variant = 'default',
  children,
  ...props
}: BentoGridItem) {
  const isInteractive = href || props.onClick;

  const gridItemClasses = clsx(
    'flex flex-col p-4 rounded-xl border shadow-sm transition-all duration-200 overflow-hidden',
    variant === 'default' && 'bg-slate-100/40 dark:bg-slate-900/20',
    variant === 'primary' && 'bg-primary-100/20 dark:bg-primary-900/10',
    variant === 'secondary' && 'bg-secondary-100/20 dark:bg-secondary-900/10',
    colSpan === 1 ? 'col-span-1' : '',
    colSpan === 2 ? 'col-span-1 md:col-span-2' : '',
    colSpan === 3 ? 'col-span-1 md:col-span-2 lg:col-span-3' : '',
    colSpan === 4 ? 'col-span-1 md:col-span-2 lg:col-span-4' : '',
    rowSpan === 1 ? 'row-span-1' : '',
    rowSpan === 2 ? 'row-span-2' : '',
    rowSpan === 3 ? 'row-span-3' : '',
    isInteractive &&
      'hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800 cursor-pointer',

    // When inside a bento container with variant
    '[.primary_&]:bg-primary-100/30 [.primary_&]:dark:bg-primary-900/20',
    '[.secondary_&]:bg-secondary-100/30 [.secondary_&]:dark:bg-secondary-900/20',

    className,
  );

  const contentElement = (
    <>
      {content}
      {titleComponent ||
        (title && (
          <h3 className="text-xl font-semibold mt-4 truncate">{title}</h3>
        ))}
      {descriptionComponent ||
        (description && (
          <p className="text-muted-foreground mt-2 line-clamp-3">
            {description}
          </p>
        ))}
      {children}
    </>
  );

  const Component = href ? 'a' : 'div';
  const hrefProps = href ? { href } : {};

  return (
    <Component className={gridItemClasses} {...hrefProps} {...props}>
      {contentElement}
    </Component>
  );
}
