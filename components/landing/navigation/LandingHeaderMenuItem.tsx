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
}: {
  href?: string;
  label?: string | React.ReactNode;
  type?: 'button' | 'link' | 'icon-button';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
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
        <Link href={href}>{label}</Link>
      </Button>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        'transition-colors',
        variant === 'primary'
          ? 'text-primary hover:text-primary-500'
          : 'text-secondary hover:text-secondary-500',
        className,
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
