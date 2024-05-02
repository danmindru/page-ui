'use client';
import { cn } from '@/lib/utils';

export const StepCard = ({
  title,
  description,
  children,
  labels,
  className,
  variant = 'default',
  stepNumber,
}: {
  title: string | React.ReactNode;
  description: string;
  children: React.ReactNode;
  labels?: string[];
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'black';
  stepNumber?: number;
}) => {
  return (
    <>
      <style>
        {`
          .content h1, .content h2, .content h3, .content h4, .content h5, .content h6, .content p {
            margin: 0;
          }
        `}
      </style>
      <div
        className={cn(
          'group flex flex-col relative no-underline px-4 py-6 shadow-sm transition-all rounded-md',
          variant === 'primary' ? 'bg-primary-900' : '',
          variant === 'secondary' ? 'bg-secondary-900' : '',
          variant === 'black' ? 'bg-black' : '',
          variant === 'default' ? 'bg-gray-300/30 dark:bg-slate-950/90' : '',
          className
        )}
      >
        {stepNumber ? (
          <div className="absolute -top-6 z-10 w-full flex justify-center">
            <p className="py-1 px-2 rounded-md text-xs font-semibold uppercase bg-primary-100/40 text-primary-900 dark:text-white">
              Step {stepNumber}
            </p>
          </div>
        ) : null}

        {title ? (
          <h2 className="relative z-10 m-0 text-2xl my-2 leading-6">{title}</h2>
        ) : null}
        {description ? (
          <p className="relative z-10 text-sm opacity-70">{description}</p>
        ) : null}

        <div className="w-full flex flex-col content">{children}</div>

        <div className="mt-auto flex gap-1">
          {labels?.map((label) => (
            <span
              key={label}
              className={cn(
                'relative z-10 inline-block text-xs shadow-sm px-2 py-1 rounded-md',
                variant === 'primary' ? 'bg-primary-700' : '',
                variant === 'secondary' ? 'bg-secondary-600' : '',
                variant === 'black' ? 'bg-gray-700' : '',
                variant === 'default' ? 'bg-gray-200' : ''
              )}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
