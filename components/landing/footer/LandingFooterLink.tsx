import clsx from 'clsx';
import Link from 'next/link';

/**
 * A component meant to be used with LandingFooter / LandingFooterColumn.
 * It shows a title and a column of links or other content.
 */
export const LandingFooterLink = ({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'transition-colors text-xs',
        variant === 'primary' ? 'text-primary hover:text-primary-500' : null,
        variant === 'secondary'
          ? 'text-secondary hover:text-secondary-500'
          : null,
        className,
      )}
    >
      {children}
    </Link>
  );
};
