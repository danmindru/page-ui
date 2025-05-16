import { clsx } from 'clsx';
import { cloneElement, ReactElement } from 'react';
import { CheckIcon, LucideIcon } from 'lucide-react';

type Child = ReactElement<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export interface KeyPoint {
  title: string;
  description?: string;
}

/**
 * Display a list of key points with an icon.
 * Can be used with a Product Feature or a standalone component.
 */
export const LandingProductFeatureKeyPoints = ({
  className,
  iconClassName,
  keyPoints,
  variant = 'primary',
  descriptionStyle = 'block',
  icon,
}: {
  className?: string;
  iconClassName?: string;
  keyPoints: KeyPoint[];
  variant?: 'primary' | 'secondary';
  descriptionStyle?: 'inline' | 'block';
  icon?: React.ReactNode | SVGSVGElement | LucideIcon;
}) => {
  const iconClass = clsx(
    'h-5 w-5 inline -mt-0.5',
    variant === 'primary' ? 'text-primary-500' : 'text-secondary-500',
    iconClassName,
  );

  const iconAsReactNode = icon as Child;

  const iconWithProps = icon ? (
    cloneElement(iconAsReactNode, {
      className: (iconAsReactNode?.props?.className || '').concat(
        ` ${iconClass}`,
      ),
    })
  ) : (
    <CheckIcon className={iconClass} />
  );

  return (
    <dl
      className={clsx(
        'mt-10 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-500 lg:max-w-md',
        className,
      )}
    >
      {keyPoints.map((keyPoint, index) => {
        return (
          <div
            key={index}
            className={clsx(
              'last:mb-0',
              keyPoint.description ? 'mb-8' : 'mb-2',
            )}
          >
            <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
              {iconWithProps} {keyPoint.title}.
            </dt>{' '}
            {keyPoint.description ? (
              <dd
                className={clsx(descriptionStyle === 'inline' ? 'inline' : '')}
              >
                {keyPoint.description}
              </dd>
            ) : null}
          </div>
        );
      })}
    </dl>
  );
};
