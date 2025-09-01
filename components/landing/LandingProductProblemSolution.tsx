import { clsx } from 'clsx';
import { CheckIcon, XIcon } from 'lucide-react';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import {
  KeyPoint,
  LandingProductFeatureKeyPoints,
} from '@/components/landing/LandingProductFeatureKeyPoints';

export function LandingProductProblemSolution({
  className,
  title,
  titleComponent,
  description,
  descriptionComponent,
  problems = [],
  solutions = [],
  solutionTitle = 'Solution',
  solutionTitleComponent,
  problemTitle = 'Problem',
  problemTitleComponent,
  variant = 'primary',
  withBackground = false,
  withBackgroundGlow = false,
  backgroundGlowVariant = 'primary',
  textPosition = 'center',
}: {
  className?: string;
  title?: string;
  titleComponent?: React.ReactNode;
  description?: string;
  descriptionComponent?: React.ReactNode;
  problems?: KeyPoint[];
  solutions?: KeyPoint[];
  solutionTitle?: string;
  solutionTitleComponent?: React.ReactNode;
  problemTitle?: string;
  problemTitleComponent?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  backgroundGlowVariant?: 'primary' | 'secondary';
  textPosition?: 'center' | 'left';
}) {
  return (
    <section
      className={clsx(
        'w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
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

      <div
        className={clsx(
          'container-wide w-full px-6 flex flex-col relative',
          textPosition === 'left'
            ? 'items-start text-left'
            : 'items-center text-center',
        )}
      >
        {title || titleComponent || description || descriptionComponent ? (
          <div
            className={clsx(
              'w-full flex flex-col gap-4 mb-10',
              textPosition === 'center'
                ? 'md:max-w-lg xl:max-w-2xl items-center text-center'
                : 'items-start',
            )}
          >
            {titleComponent ||
              (title && (
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  {title}
                </h2>
              ))}

            {descriptionComponent ||
              (description && <p className="md:text-xl">{description}</p>)}
          </div>
        ) : null}

        <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 max-w-2xl">
          {problems.length ? (
            <div
              className={clsx(
                'flex flex-col bg-red-50 dark:bg-red-950 py-6 px-4 rounded-lg',
                textPosition === 'left' ? 'px-6' : '',
              )}
            >
              {problemTitleComponent ||
                (problemTitle && (
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    {problemTitle}
                  </h3>
                ))}

              <LandingProductFeatureKeyPoints
                keyPoints={problems}
                variant={variant}
                icon={<XIcon className="text-red-500 relative top-0.5" />}
                className="!mt-0 text-left"
              />
            </div>
          ) : null}

          {solutions.length ? (
            <div
              className={clsx(
                'flex flex-col bg-green-50 dark:bg-green-950 py-6 px-4 rounded-lg',
                textPosition === 'left' ? 'px-6' : '',
              )}
            >
              {solutionTitleComponent ||
                (solutionTitle && (
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    {solutionTitle}
                  </h3>
                ))}

              <LandingProductFeatureKeyPoints
                keyPoints={solutions}
                variant={variant}
                icon={<CheckIcon className="text-green-500 relative top-0.5" />}
                className="!mt-0 text-left"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
