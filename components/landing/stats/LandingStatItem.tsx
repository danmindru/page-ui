import clsx from 'clsx';

/**
 * A component for displaying a single statistic item with value and description.
 */
export function LandingStatItem({
  className,
  value,
  label,
  description,
  variant = 'default',
  hasBorder = true,
}: {
  className?: string;
  value: string;
  label?: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'default';
  hasBorder?: boolean;
}) {
  return (
    <dl
      className={clsx(
        'flex flex-col items-start p-8',
        hasBorder && 'border-l',
        hasBorder && variant === 'primary'
          ? 'border-primary-100/30 dark:border-primary-900/30'
          : '',
        hasBorder && variant === 'secondary'
          ? 'border-secondary-100/30 dark:border-secondary-900/30'
          : '',
        className,
      )}
    >
      <dt
        className={clsx(
          'flex items-center gap-2 flex-wrap text-xl lg:text-2xl font-bold mb-6',
          variant === 'primary' ? 'text-primary-900 dark:text-primary-100' : '',
          variant === 'secondary'
            ? 'text-secondary-900 dark:text-secondary-100'
            : '',
          variant === 'default' ? 'text-gray-900 dark:text-gray-100' : '',
        )}
      >
        <span className="text-2xl lg:text-3xl font-normal">{value}</span>
        {label && <span>{label}</span>}
      </dt>
      <dd className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        {description}
      </dd>
    </dl>
  );
}
