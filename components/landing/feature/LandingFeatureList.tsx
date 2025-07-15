import { clsx } from 'clsx';
import { LandingFeature } from '@/components/landing/feature/LandingFeature';
import { GlowBg } from '@/components/shared/ui/glow-bg';

export interface FeatureListItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * A component meant to be used on the landing page.
 * It displays a grid list of features.
 *
 * Each feature has a title, description and icon.
 */
export const LandingFeatureList = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  featureItems,
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  featureItems?: FeatureListItem[];
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex justify-center items-center gap-8 py-12 lg:py-16 flex-col',
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
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2">
          <GlowBg
            className={clsx('w-full lg:w-2/3 h-auto z-0')}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div className={clsx('container-wide w-full px-6 relative z-10')}>
        {titleComponent || (title && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-xs sm:max-w-none fancyHeading">
            {title}
          </h2>
        ))}
        {descriptionComponent || (description && (
          <p className="mt-6 md:text-xl">{description}</p>
        ))}

        <div
          className={clsx(
            'mt-12 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12',
            innerClassName,
          )}
        >
          {featureItems
            ? featureItems.map((featureItem, index) => (
                <LandingFeature
                  key={index}
                  title={featureItem.title}
                  description={featureItem.description}
                  icon={featureItem.icon}
                  variant={variant}
                />
              ))
            : children}
        </div>
      </div>
    </section>
  );
};
