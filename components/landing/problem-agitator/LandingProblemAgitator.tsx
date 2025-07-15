import { LandingProblemAgitatorItem } from '@/components/landing/problem-agitator/LandingProblemAgitatorItem';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import clsx from 'clsx';
import { Children, ReactElement, cloneElement, Fragment } from 'react';

type Child = ReactElement<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

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
          d="M12.5 112c3.9-.9 7.7-1.7 12-2.7-.3 2.6-1.9 4.1-3.7 4.7-5.4 1.8-10.9 3.5-16.5 4.7-3.2.7-4.9-1.6-3.9-4.7 1.6-5.2 3.5-10.3 5.3-15.5.1-.3.2-.7.4-.8.7-.5 1.5-.8 2.3-1.2.3.7 1 1.4.9 2-.3 2.1-.8 4.1-1.2 6.1-.2 1.1-.5 2.1 0 3.7 1.2-1.1 2.5-2.2 3.7-3.3 23.8-23.8 28.8-59.5 12.7-89.1-2.1-3.8-4.6-7.3-6.9-11-.8-1.3-1.5-2.6-2.3-3.9.2-.3.5-.5.7-.8.9.3 2.1.4 2.7 1.1 2.1 2.2 4.2 4.4 6 6.9 18 24.8 18.7 59.3 1.5 86-3.3 5.1-7.5 9.6-11.3 14.3-.8 1-1.7 1.8-2.6 2.7-.1.2 0 .5.2.8Z"
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
  withBackground = true,
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
  const childrenWithProps = Children.map(children, (child) => {
    if (!child) {
      return null;
    }

    if (typeof child !== 'object') {
      return child;
    }

    const reactChild = child as Child;
    const reactChildType = reactChild?.type;

    return cloneElement(reactChild, {
      className: ''.concat(''),
      ...(reactChildType === LandingProblemAgitatorItem ? {} : {}),
    });
  });

  const childNumber = Children.count(children);

  const rotationClassesThree = {
    0: 'rotate-[220deg] items-center -translate-y-[15px] -translate-x-[30px]',
    1: 'rotate-[-45deg] items-center -translate-y-[15px] translate-x-[30px]',
    2: 'rotate-[90deg] items-center justify-center translate-y-[60px]',
  };

  const rotationClassesFour = {
    0: 'rotate-[220deg] items-center -translate-y-[15px] -translate-x-[30px]',
    1: 'rotate-[-45deg] items-center -translate-y-[15px] translate-x-[30px]',
    2: 'rotate-[45deg] items-center translate-x-[30px] translate-y-[30px]',
    3: 'rotate-[120deg] items-center translate-y-[45px]',
  };

  const renderGridItems = () => {
    if (!childrenWithProps) return null;

    if (childNumber === 3) {
      return (
        <>
          {/* Row 1 */}
          <Arrow className={clsx(rotationClassesThree[0])} />
          {childrenWithProps[0]}
          <Arrow className={clsx(rotationClassesThree[1])} />

          {/* Row 2 */}
          {childrenWithProps[2]}
          <Arrow className={clsx(rotationClassesThree[2])} />
          {childrenWithProps[1]}
        </>
      );
    } else {
      return (
        <>
          {/* Row 1 */}
          <Arrow className={clsx(rotationClassesFour[0])} />
          {childrenWithProps[0]}
          <Arrow className={clsx(rotationClassesFour[1])} />

          {/* Row 2 */}
          {childrenWithProps[3]}
          <div></div>
          {childrenWithProps[1]}

          {/* Row 3 */}
          <Arrow className={clsx(rotationClassesFour[3])} />
          {childrenWithProps[2]}
          <Arrow className={clsx(rotationClassesFour[2])} />
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
            textPosition === 'center'
              ? 'items-center text-center'
              : 'items-start',
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
          'relative isolate grid grid-cols-3 gap-4 mt-8',
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
          {cliffhangerComponent || (cliffhanger && (
            <p className="text-3xl font-medium">{cliffhanger}</p>
          ))}
        </div>
      ) : null}
    </section>
  );
};
