import { cn } from '@/lib/utils';
import { SparklesIcon } from 'lucide-react';

export const Protip = ({
  className,
  title,
  description,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden flex flex-col text-sm p-6 bg-primary-100/30 dark:bg-purple-900/30 rounded-md',
        className,
      )}
    >
      {title ? <p className="m-0 text-lg font-semibold">{title}</p> : null}

      {description ? (
        <p className="flex gap-1 relative z-10 not-prose">
          <SparklesIcon className="absolute opacity-20 -right-4 -top-9 -z-10 flex-shrink-0 inline-block w-8 h-8 rotate-12 text-primary-500 dark:text-primary-400" />

          <SparklesIcon className="absolute opacity-20 right-0 -bottom-10 -z-10 flex-shrink-0 inline-block w-14 h-14 rotate-12 text-primary-500 dark:text-primary-400" />

          <span className="relative z-10">{description}</span>
        </p>
      ) : null}

      {children ? <div className="flex gap-1">{children}</div> : null}
    </div>
  );
};
