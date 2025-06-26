import { clsx } from 'clsx';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';

/**
 * A component meant to be used as a child of LandingHeader.
 * It represents a single navigation item, which can be a link or a button.
 */
export const LandingHeaderMenuItem = ({
  href = '#',
  label = '',
  type = 'link',
  onClick,
  variant = 'primary',
  className,
  children,
}: {
  href?: string;
  label?: string | React.ReactNode;
  type?: 'button' | 'link' | 'icon-button';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  children?: React.ReactNode;
}) => {
  if (type === 'button' || type === 'icon-button') {
    return (
      <Button
        asChild
        onClick={onClick}
        variant={variant}
        className={clsx(
          type === 'icon-button' && 'rounded-full p-2',
          className,
        )}
      >
        <Link href={href}>{children || label}</Link>
      </Button>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        'transition-colors font-medium',
        variant === 'primary'
          ? 'text-black dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'
          : 'text-black dark:text-gray-200 hover:text-secondary-500 dark:hover:text-secondary-500',
        className,
      )}
      onClick={onClick}
    >
      {children || label}
    </Link>
  );
};
