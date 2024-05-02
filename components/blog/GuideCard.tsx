import { cn } from '@/lib/utils';
import { ArrowDownToDotIcon } from 'lucide-react';
import { cloneElement } from 'react';

export const GuideCard = ({
  href,
  title,
  description,
  labels,
  className,
  iconClassName,
  iconComponent,
  variant = 'primary',
  teaser = false,
}: {
  href: string;
  title: string;
  description: string;
  labels?: string[];
  className?: string;
  iconClassName?: string;
  iconComponent?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'black';
  teaser?: boolean;
}) => {
  const icon = iconComponent ? iconComponent : <ArrowDownToDotIcon />;

  return (
    <a
      href={href}
      className={cn(
        'group flex flex-col gap-4 relative no-underline text-white dark:text-white hover:text-white dark:hover:text-white p-4 shadow-sm hover:shadow-lg transition-all rounded-md',
        variant === 'primary' ? 'bg-primary-900 hover:bg-primary-900/90' : '',
        variant === 'secondary'
          ? 'bg-secondary-900 hover:bg-secondary-800'
          : '',
        variant === 'black' ? 'bg-black hover:bg-black/90' : '',
        teaser ? 'pointer-events-none grayscale' : '',
        className
      )}
    >
      {cloneElement(icon as React.ReactElement, {
        className: cn(
          'group-hover:scale-110 duration-500 transition-all absolute opacity-20 right-3 bottom-3 flex-shrink-0 inline-block w-14 h-14 rotate-12',
          variant === 'primary' ? 'text-primary-400' : '',
          variant === 'secondary' ? 'text-secondary-400' : '',
          variant === 'black' ? 'text-gray-100' : '',
          iconClassName
        ),
      })}

      <p className="relative z-10 m-0 text-lg leading-6">
        {title}
        {teaser ? (
          <span className="inline-block m-1 text-xs uppercase bg-blue-500 px-2 py-1 rounded-md">
            Coming soon
          </span>
        ) : null}
      </p>
      <p className="relative z-10 m-0 -mt-4 text-xs opacity-70">
        {description}
      </p>

      <div className="mt-auto flex gap-1">
        {labels?.map((label) => (
          <span
            key={label}
            className={cn(
              'relative z-10 inline-block text-xs shadow-sm px-2 py-1 rounded-md',
              variant === 'primary' ? 'bg-primary-700' : '',
              variant === 'secondary' ? 'bg-secondary-600' : '',
              variant === 'black' ? 'bg-gray-700' : ''
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </a>
  );
};
