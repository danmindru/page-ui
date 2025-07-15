import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import clsx from 'clsx';
import { Children, ReactElement, cloneElement } from 'react';

type Child = ReactElement<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

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
  const childrenWithProps = Children.map(children, (child, index) => {
    if (!child) {
      return null;
    }

    if (typeof child !== 'object') {
      return child;
    }

    const reactChild = child as Child;
    const reactChildType = reactChild?.type;

    const isOdd = index % 2 === 1;
    const mediaPosition = isOdd ? 'left' : 'right';

    return cloneElement(reactChild, {
      className: '!p-0 rounded-xl overflow-hidden',
      minHeight: 0,
      innerClassName: clsx(
        'm-0 lg:m-0 h-full gap-2',
        variant === 'primary'
          ? ' bg-primary-300/10 dark:bg-primary-900/10'
          : ' bg-secondary-300/10 dark:bg-secondary-900/10',
        display === 'grid' ? '!px-0 !pb-0' : '',
      ),
      textClassName: 'p-6',
      imageClassName: clsx(
        'mb-0 !scale-100 rounded-xl',
        display === 'list' ? 'lg:-mb-12 lg:-mt-12' : '',
        display === 'grid' ? 'md:-mt-6' : '',
        reactChild.props.imageClassName,
      ),
      containerType: reactChild.props.containerType || containerType,
      ...(reactChildType === LandingProductFeature
        ? {
            imagePosition: display === 'grid' ? 'center' : mediaPosition,
            imageShadow: reactChild.props.imageShadow || 'hard',
          }
        : {}),
      ...(reactChildType === LandingProductVideoFeature
        ? { videoPosition: display === 'grid' ? 'center' : mediaPosition }
        : {}),
    });
  });

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
          {titleComponent || (title && (
            <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-tight max-w-sm sm:max-w-none">
              {title}
            </h2>
          ))}

          {descriptionComponent || (description && (
            <p className="w-full mt-6 md:text-xl">{description}</p>
          ))}
        </div>
      ) : null}

      <div
        className={clsx(
          '!p-0 relative isolate gap-6',
          `container-${containerType}`,
          display === 'list' ? 'flex flex-col' : 'grid lg:grid-cols-3',
        )}
      >
        {childrenWithProps}
      </div>
    </section>
  );
};
