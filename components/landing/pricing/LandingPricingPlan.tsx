'use client';

import { Button } from '@/components/shared/ui/button';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import { clsx } from 'clsx';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';

/**
 * A component meant to be used to show a pricing plan in the landing page, typically used with LandingPricingSection.
 */
export const LandingPricingPlan = ({
  className,
  children,
  title,
  titleComponent,
  description,
  descriptionComponent,
  href = '#',
  onClick = () => {},
  ctaText = 'Get started',
  price,
  discountPrice,
  priceSuffix,
  featured,
  highlighted,
  soldOut,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string;
  titleComponent?: React.ReactNode;
  description?: string;
  descriptionComponent?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  ctaText?: string;
  price: string;
  discountPrice?: string;
  priceSuffix?: string;
  featured?: boolean;
  highlighted?: boolean;
  soldOut?: boolean;
}) => {
  return (
    <div
      className={clsx(
        'max-w-xs border rounded-3xl p-8 xl:p-10 relative overflow-hidden',
        highlighted
          ? 'bg-white dark:bg-gray-900/80 border-primary-500/50 dark:border-primary-700/50'
          : '',
        featured
          ? 'bg-gray-900 border-gray-900 dark:bg-gray-100 dark:border-gray-100'
          : '',
        !featured && !highlighted
          ? 'bg-white dark:bg-gray-900/80 border-gray-300/70 dark:border-gray-700'
          : '',

        className,
      )}
    >
      {highlighted ? (
        <>
          <div
            className="absolute pointer-events-none left-0 top-0 w-full h-full bg-primary-100/5"
            aria-hidden
          ></div>

          <div
            className="absolute pointer-events-none left-0 top-0 w-full h-full bg-primary-100/30 dark:bg-primary-100/5 mix-blend-hard-light dark:mix-blend-soft-light"
            aria-hidden
          ></div>

          <div
            className="hidden lg:flex justify-center w-full h-full absolute left-0 -top-[45%] pointer-events-none"
            aria-hidden
          >
            <GlowBg
              className={clsx('w-full h-auto z-0 dark:opacity-50 opacity-100')}
              variant="primary"
            />
          </div>
        </>
      ) : null}

      <div className="relative z-10">
        {title ? (
          <h3
            className={clsx(
              'text-2xl font-bold tracking-tight',
              featured ? 'w-full text-white dark:text-black' : '',
            )}
          >
            {title}
          </h3>
        ) : (
          titleComponent
        )}

        {description ? (
          <p
            className={clsx(
              'w-full text-sm leading-6',
              featured
                ? 'text-gray-300 dark:text-gray-500'
                : 'text-gray-600 dark:text-gray-400',
            )}
          >
            {description}
          </p>
        ) : (
          descriptionComponent
        )}

        <p className="mt-6 flex items-baseline gap-x-1">
          <span
            className={clsx(
              featured ? 'text-white dark:text-black' : '',
              'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight',
              discountPrice ? 'line-through' : '',
            )}
          >
            {price}
          </span>

          <span className={clsx(featured ? 'text-white dark:text-black' : '')}>
            {discountPrice}
          </span>

          {priceSuffix ? (
            <span
              className={clsx(
                featured
                  ? 'text-gray-300 dark:text-gray-500'
                  : 'dark:text-gray-400 text-gray-600',
                'text-sm font-semibold leading-6',
              )}
            >
              {priceSuffix}
            </span>
          ) : null}
        </p>

        <Button
          size="lg"
          disabled={soldOut}
          className={clsx(
            'w-full',
            featured || soldOut ? 'grayscale' : '',
            !highlighted && !featured ? 'bg-gray-100 dark:bg-gray-600' : '',
            soldOut ? 'opacity-50 pointer-events-none' : '',
          )}
          variant={highlighted ? 'default' : 'outline'}
          asChild
        >
          <Link href={href} onClick={onClick} className={'flex mt-6 shadow-sm'}>
            {soldOut ? 'Sold out' : ctaText}
          </Link>
        </Button>

        {Array.isArray(children) ? (
          <ul
            className={clsx(
              featured
                ? 'text-gray-300 dark:text-gray-500'
                : 'text-gray-700 dark:text-gray-400',
              'mt-8 space-y-3 text-sm leading-6 xl:mt-10',
            )}
          >
            {children.map((child, index) => (
              <li key={index} className="flex gap-x-3">
                <CheckIcon
                  className={clsx(
                    featured ? 'text-white dark:text-black' : '',
                    highlighted ? 'text-primary-500' : 'text-gray-500',
                    'h-6 w-5 flex-none',
                  )}
                  aria-hidden="true"
                />
                {child}
              </li>
            ))}
          </ul>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
