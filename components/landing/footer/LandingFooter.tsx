import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { OrbitIcon } from 'lucide-react';
import { GlowBg } from '@/components/shared/ui/glow-bg';

/**
 * A footer component meant to be used in the landing page.
 * It shows a footer with a title, description, and can render columns of links etc.
 */
export const LandingFooter = ({
  className,
  children,
  title,
  description,
  footnote,
  logoComponent,
  withBackground = false,
  withBackgroundGlow = false,
  withBackgroundGradient = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
}: {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  footnote?: string | React.ReactNode;
  logoComponent?: React.ReactNode;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  withBackgroundGradient?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
}) => {
  const columnNumber = React.Children.count(children);

  return (
    <footer
      className={clsx(
        'mt-auto w-full bg-gradient-to-r',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow ? 'relative overflow-hidden' : '',
        withBackgroundGradient
          ? 'from-gray-50/5 via-gray-100/60 to-gray-50/5 backdrop-blur-sm dark:from-slate-700/5 dark:via-slate-700/60 dark:to-slate-700/5'
          : '',
        className,
      )}
    >
      {withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2 pointer-events-none">
          <GlowBg
            className={clsx('w-full h-auto z-0 dark:opacity-50 opacity-100')}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'flex flex-col gap-4 justify-between items-center w-full p-6',
        )}
      >
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 mt-12  p-6 max-w-full container-wide">
          <div className="w-full flex flex-col gap-4 md:max-w-xs lg:max-w-sm">
            <Link href="/">
              {logoComponent || (
                <div className="flex items-center gap-3 justify-start">
                  <OrbitIcon className="h-8 w-8 text-primary-900 dark:text-primary-100" />

                  <div className="hidden text-2xl font-semibold font-display sm:flex gap-2 h-full">
                    Page <span className="font-bold">UI</span>
                  </div>
                </div>
              )}
            </Link>

            {title ? (
              <div className="text-lg font-semibold">{title}</div>
            ) : null}

            {description ? (
              <p className="text-sm opacity-70">{description}</p>
            ) : null}
          </div>

          <div
            className={clsx(
              'grid md:grid-cols-2 gap-12 items-start mt-6 md:mt-0',
              columnNumber === 3 ? 'md:grid-cols-3' : '',
              columnNumber === 4 ? 'lg:grid-cols-4' : '',
            )}
          >
            {children}
          </div>
        </div>
      </div>

      {footnote ? (
        <div>
          <hr
            className="w-full my-4 border-0 bg-gradient-to-r from-white/5 via-black/10 to-white/5 dark:from-black/5 dark:via-white/30 darK:to-black/5"
            style={{ height: '1px' }}
          />

          <div className="py-8 px-2 flex flex-col items-center">
            <div className="w-full text-center lg:flex lg:justify-center p-4 mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
              {footnote}
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
};
