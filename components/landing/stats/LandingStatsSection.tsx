import clsx from 'clsx';
import { LandingStatItem } from '@/components/landing/stats/LandingStatItem';
import { GlowBg } from '@/components/shared/ui/glow-bg';

/**
 * A component that displays a grid of statistics.
 * Can be configured to show preset stats or custom stats.
 */
export function LandingStatsSection({
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  stats,
  variant = 'default',
  withBackground = false,
  withBackgroundGlow = false,
  backgroundGlowVariant = 'primary',
  columnsDesktop = 3,
  columnsMobile = 1,
  hasBorders = true,
  textPosition = 'center',
  children,
}: {
  className?: string;
  innerClassName?: string;
  title?: string;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  stats?: Array<{ value: string; label?: string; description: string }>;
  variant?: 'primary' | 'secondary' | 'default';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  backgroundGlowVariant?: 'primary' | 'secondary';
  columnsDesktop?: 2 | 3 | 4;
  columnsMobile?: 1 | 2;
  hasBorders?: boolean;
  textPosition?: 'center' | 'left';
  children?: React.ReactNode;
}) {
  return (
    <section
      className={clsx(
        'w-full flex flex-col justify-center items-center py-12 lg:py-16',
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
            className={clsx(
              'w-full lg:w-3/4 h-auto z-0 dark:opacity-50 opacity-100',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'container-wide w-full flex flex-col relative',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
      >
        {(title || titleComponent) && (
          <div
            className={clsx(
              'flex flex-col gap-4 mb-12 p-6',
              textPosition === 'center'
                ? 'items-center text-center max-w-xl'
                : 'items-start',
            )}
          >
            {title ? (
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                {title}
              </h2>
            ) : (
              titleComponent
            )}

            {description ? (
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                {description}
              </p>
            ) : (
              descriptionComponent
            )}
          </div>
        )}

        <div
          className={clsx(
            'w-full grid border-l border-t border-gray-200 dark:border-gray-800',
            columnsMobile === 1 ? 'grid-cols-1' : 'grid-cols-2',
            columnsDesktop === 2 ? 'md:grid-cols-2' : '',
            columnsDesktop === 3 ? 'md:grid-cols-3' : '',
            columnsDesktop === 4 ? 'md:grid-cols-4' : '',
            !hasBorders && 'border-none',
          )}
        >
          {stats?.map((stat, index) => {
            // Calculate if this is the last item in a row for mobile and desktop
            const isLastInMobileRow =
              columnsMobile === 1 ? true : index % 2 === 1;
            const isLastInDesktopRow =
              (columnsDesktop === 2 && index % 2 === 1) ||
              (columnsDesktop === 3 && index % 3 === 2) ||
              (columnsDesktop === 4 && index % 4 === 3);

            // Calculate if this is in the last row
            const totalRows = Math.ceil(stats.length / columnsDesktop);
            const currentRow = Math.floor(index / columnsDesktop) + 1;
            const isLastRow = currentRow === totalRows;

            return (
              <LandingStatItem
                key={index}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                variant={variant}
                hasBorder={hasBorders}
                className={clsx(
                  hasBorders && 'md:last:border-r-0 md:last:border-b-0',
                  hasBorders && isLastInMobileRow && 'border-r-0 sm:border-r',
                  hasBorders && isLastInDesktopRow && 'md:border-r-0',
                  hasBorders && isLastRow && 'md:border-b-0',
                )}
              />
            );
          })}
        </div>

        {children}
      </div>
    </section>
  );
}
