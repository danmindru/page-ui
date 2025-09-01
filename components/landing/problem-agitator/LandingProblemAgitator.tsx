import { GlowBg } from '@/components/shared/ui/glow-bg';
import clsx from 'clsx';
import { Children } from 'react';

const Arrow = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('h-[120px] flex opacity-20', className)}>
      <svg
        viewBox="0 0 39 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[90px]"
      >
        <path
          d="m13 112 12-3c-1 3-2 4-4 5l-17 5c-3 0-5-2-4-5l6-15v-1l2-1 1 2-1 6v3l4-3c24-24 29-59 13-89L18 5l-3-4 1-1 3 1 6 7c18 25 18 60 1 86l-11 15-3 2v1Z"
          className="fill-black dark:fill-white"
        />
      </svg>
    </div>
  );
};

/**
 * A component meant to be used in the landing page.
 * It displays a title, description and 3 or 4 problem agitators as children.
 */
export const LandingProblemAgitator = ({
  className,
  children,
  title,
  titleComponent,
  description,
  descriptionComponent,
  cliffhanger,
  cliffhangerComponent,
  textPosition = 'center',
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  containerType = 'ultrawide',
}: {
  className?: string;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  cliffhanger?: string | React.ReactNode;
  cliffhangerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  containerType?: 'narrow' | 'wide' | 'ultrawide';
}) => {
  const childrenArray = Children.toArray(children).filter(
    (child) => child != null,
  );
  const childNumber = childrenArray.length;

  const rotationClassesThree = {
    0: 'hidden md:flex items-center rotate-[220deg] -translate-y-[15px] -translate-x-[30px]',
    1: 'items-center justify-center md:justify-start md:rotate-[-45deg] md:-translate-y-[15px] md:translate-x-[30px]',
    2: 'items-center justify-center -scale-x-100 md:scale-x-100 md:rotate-[90deg] md:translate-y-[60px]',
  };

  const rotationClassesFour = {
    0: 'hidden md:flex rotate-[220deg] items-center -translate-y-[15px] -translate-x-[30px]',
    1: 'items-center justify-center md:justify-start md:rotate-[-45deg] md:-translate-y-[15px] md:translate-x-[30px]',
    2: 'items-center justify-center md:justify-start -scale-x-100 md:scale-x-100 md:rotate-[45deg] md:translate-x-[30px] md:translate-y-[30px]',
    3: 'items-center justify-center md:justify-start md:rotate-[120deg] md:translate-y-[45px]',
  };

  const renderGridItems = () => {
    if (!childrenArray.length) return null;

    if (childNumber === 3) {
      return (
        <>
          {/* Row 1 */}
          <Arrow className={clsx(rotationClassesThree[0])} />
          {childrenArray[0]}
          <Arrow className={clsx(rotationClassesThree[1])} />

          {/* Row 2 */}
          {childrenArray[2]}
          <Arrow className={clsx(rotationClassesThree[2])} />
          {childrenArray[1]}
        </>
      );
    } else {
      return (
        <>
          {/* Row 1 */}
          <Arrow className={clsx(rotationClassesFour[0])} />
          {childrenArray[0]}
          <Arrow className={clsx(rotationClassesFour[1])} />

          {/* Row 2 */}
          {childrenArray[3]}
          <div>
            <Arrow className={clsx('md:hidden', rotationClassesFour[2])} />
          </div>
          {childrenArray[1]}

          {/* Row 3 */}
          <Arrow className={clsx(rotationClassesFour[3])} />
          {childrenArray[2]}
          <Arrow className={clsx('hidden md:flex', rotationClassesFour[2])} />
        </>
      );
    }
  };

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
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-3/4 pointer-events-none">
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
            textPosition === 'center'
              ? 'items-center text-center'
              : 'items-start',
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
          'relative isolate md:grid grid-cols-3 gap-4 mt-8',
          childNumber === 3 ? 'grid-rows-2' : 'grid-rows-3',
          `container-${containerType}`,
        )}
      >
        {renderGridItems()}
      </div>

      {cliffhangerComponent || cliffhanger ? (
        <div
          className={clsx(
            'mt-12 w-full flex justify-center items-center',
            textPosition === 'center' ? 'text-center' : 'text-left',
          )}
        >
          {cliffhangerComponent ? (
            cliffhangerComponent
          ) : (
            <p className="text-3xl font-medium">{cliffhanger}</p>
          )}
        </div>
      ) : null}
    </section>
  );
};
