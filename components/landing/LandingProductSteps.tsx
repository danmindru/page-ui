import { GlowBg } from '@/components/shared/ui/glow-bg';
import clsx from 'clsx';
import { Children } from 'react';

/**
 * A component meant to be used in the landing page.
 * It displays a title, description and a list of horizontal steps with a LandingProductFeature and/or LandingProductVideoFeature (in any combination, passed as children).
 * Use for more than 3 steps.
 */
export const LandingProductSteps = ({
  className,
  children,
  title,
  titleComponent,
  description,
  descriptionComponent,
  withBackground = true,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  containerType = 'wide',
  display = 'list',
}: {
  className?: string;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  containerType?: 'narrow' | 'wide' | 'ultrawide';
  display?: 'list' | 'grid';
}) => {
  return (
    <section
      className={clsx(
        'w-full flex justify-center items-center gap-8 p-6 py-12 lg:py-16 flex-col',
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
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2 pointer-events-none">
          <GlowBg
            className={clsx('w-full lg:w-2/3 h-auto z-0')}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      {title || description || titleComponent || descriptionComponent ? (
        <div
          className={clsx(
            'relative w-full flex flex-col sm:items-center',
            `container-${containerType}`,
          )}
        >
          {titleComponent ||
            (title && (
              <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-tight max-w-sm sm:max-w-none">
                {title}
              </h2>
            ))}

          {descriptionComponent ||
            (description && (
              <p className="w-full mt-6 md:text-xl">{description}</p>
            ))}
        </div>
      ) : null}

      <div
        className={clsx(
          '!p-0 w-full relative isolate gap-6 steps',
          `container-${containerType}`,
          variant,
          display === 'list'
            ? 'list flex flex-col'
            : 'sgrid grid lg:grid-cols-3',
        )}
      >
        {Children.map(children, (child, index) => (
          <div
            className={clsx(
              'contents step',
              display === 'list' && index % 2 === 1 ? 'odd' : '',
              display === 'list' && index % 2 === 0 ? 'even' : '',
            )}
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};
