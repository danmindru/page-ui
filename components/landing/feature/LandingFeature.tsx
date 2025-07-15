import clsx from 'clsx';

/**
 * This component is meant to be used in the landing page, in the features list.
 *
 * Describes a single feature, with a title, description and icon.
 * Use this to highlight a feature or key aspect of your product.
 */
export const LandingFeature = ({
  className,
  title,
  description,
  titleComponent,
  descriptionComponent,
  icon,
  variant = 'primary',
}: {
  className?: string;
  title?: string;
  description?: string;
  titleComponent?: React.ReactNode;
  descriptionComponent?: React.ReactNode;
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <div className={clsx('flex flex-col gap-4 py-4', className)}>
      <div
        className={clsx(
          'flex items-center justify-center w-16 h-16 rounded-md',
          variant === 'primary'
            ? 'bg-primary-100/30 border border-primary-100/70 dark:border-primary-900 dark:bg-primary-900/70 text-primary-500'
            : 'bg-secondary-100/30 border border-secondary-100/70 dark:border-secondary-900 dark:bg-secondary-900/70 text-secondary-500',
        )}
        aria-describedby="icon"
      >
        {icon}
      </div>

      {titleComponent || (title && (
        <h3 className="text-lg font-semibold">{title}</h3>
      ))}

      {descriptionComponent || (description && (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {description}
        </p>
      ))}
    </div>
  );
};
