import clsx from 'clsx';
import { GlowBg } from '@/components/shared/ui/glow-bg';

/**
 * A component that displays vision and mission statements.
 */
export function LandingVisionMissionSection({
  className,
  innerClassName,
  title,
  titleComponent,
  visionTitle,
  visionDescription,
  missionTitle,
  missionDescription,
  variant = 'primary',
  withBackground = false,
  withBackgroundGlow = false,
  backgroundGlowVariant = 'primary',
  textPosition = 'left',
  children,
}: {
  className?: string;
  innerClassName?: string;
  title?: string;
  titleComponent?: React.ReactNode;
  visionTitle?: string;
  visionDescription?: string | React.ReactNode;
  missionTitle?: string;
  missionDescription?: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  backgroundGlowVariant?: 'primary' | 'secondary';
  textPosition?: 'center' | 'left';
  children?: React.ReactNode;
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
            className={clsx(
              'w-full lg:w-1/2 h-auto z-0 dark:opacity-50 opacity-100',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'container-wide w-full p-6 flex flex-col relative',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <div
            className={clsx(
              'flex flex-col gap-4 lg:col-span-1',
              textPosition === 'center'
                ? 'items-center text-center'
                : 'items-start',
            )}
          >
            {titleComponent || (title && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                {title}
              </h2>
            ))}
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {visionTitle}
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                {visionDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {missionTitle}
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                {missionDescription}
              </p>
            </div>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
