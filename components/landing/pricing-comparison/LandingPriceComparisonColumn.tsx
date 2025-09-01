import { clsx } from 'clsx';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';

/**
 * A component meant to be used to show a comparison column in the landing page,
 * typically used with LandingPriceComparisonSection.
 */
export const LandingPriceComparisonColumn = ({
  className,
  children,
  header,
  headerComponent,
  footer,
  footerComponent,
  featured = false,
  ctaText,
  ctaTextComponent,
  href,
  onClick,
  variant = 'primary',
}: {
  className?: string;
  children: React.ReactNode;
  header?: string | React.ReactNode;
  headerComponent?: React.ReactNode;
  footer?: string | React.ReactNode;
  footerComponent?: React.ReactNode;
  featured?: boolean;
  ctaText?: string;
  ctaTextComponent?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}) => {
  const hasCta = ctaText || ctaTextComponent;

  return (
    <div
      className={clsx(
        'flex flex-col min-w-0 relative',
        featured
          ? 'z-20 border border-gray-100/50 dark:border-gray-800/50 justify-center -ml-1 -mt-6 h-[calc(100%+3rem)] w-[calc(100%+1rem)] shadow-2xl rounded-lg bg-white dark:bg-black'
          : 'bg-gray-50 dark:bg-gray-950',
        variant === 'primary'
          ? 'shadow-primary-900/20 dark:shadow-primary-100/10'
          : '',
        variant === 'secondary'
          ? 'shadow-secondary-900/20 dark:shadow-secondary-100/10'
          : '',
        className,
      )}
    >
      <div className="relative z-10 flex flex-col">
        {(header || headerComponent) && (
          <div
            className={clsx(
              'px-4 py-6 text-center',
              featured ? 'rounded-t-lg pt-9 line-clamp-2' : '',
              !hasCta ? '!pt-6' : '',
            )}
          >
            {header ? (
              <div className="flex flex-col items-center gap-2">
                {typeof header === 'string' ? (
                  <h3 className="text-lg font-semibold">{header}</h3>
                ) : (
                  header
                )}
              </div>
            ) : (
              headerComponent
            )}
          </div>
        )}

        {children}

        {(footer || footerComponent || ctaText) && (
          <div
            className={clsx(
              '-mt-[1px] px-4 py-6 border-t border-gray-100 dark:border-gray-800',
              featured
                ? 'rounded-b-lg border-gray-100/50 dark:border-gray-800/50'
                : '',
            )}
          >
            {footer ? (
              <div className="text-center">
                {typeof footer === 'string' ? (
                  <div className="text-2xl font-bold">{footer}</div>
                ) : (
                  footer
                )}
              </div>
            ) : (
              footerComponent
            )}

            {ctaText && (href || onClick) ? (
              <Button
                size="lg"
                className="w-full mt-4"
                variant={variant}
                asChild
              >
                <Link href={href || '#'} onClick={onClick}>
                  {ctaText}
                </Link>
              </Button>
            ) : (
              ctaTextComponent
            )}
          </div>
        )}
      </div>
    </div>
  );
};
