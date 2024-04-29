import { clsx } from 'clsx';
import { CheckIcon } from 'lucide-react';

export interface KeyPoint {
  title: string;
  description: string;
}

/**
 * A component meant to be used in the description of LandingProductFeature as bullet points.
 * Descriptions can be enhanced with bullet points to highlight key features. This component is used to display those bullet points.
 */
export const LandingProductFeatureKeyPoints = ({
  className,
  keyPoints,
  variant = 'primary',
}: {
  className?: string;
  keyPoints: KeyPoint[];
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <dl
      className={clsx(
        'max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-500 lg:max-w-md',
        className,
      )}
    >
      {keyPoints.map((keyPoint, index) => {
        return (
          <div key={index} className="">
            <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
              <CheckIcon
                className={clsx(
                  'h-5 w-5 inline -mt-0.5',
                  variant === 'primary'
                    ? 'text-primary-500'
                    : 'text-secondary-500',
                )}
              />{' '}
              {keyPoint.title}.
            </dt>{' '}
            <dd className="inline">{keyPoint.description}</dd>
          </div>
        );
      })}
    </dl>
  );
};
