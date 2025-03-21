import { clsx } from 'clsx';

/**
 * A component meant to be used with LandingFooter.
 * It shows a title and a column of links or other content.
 *
 * LandingFooters can have between 1-4 columns.
 */
export const LandingFooterColumn = ({
  className,
  children,
  title,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4 justify-center w-full text-xs',
        className,
      )}
    >
      <p className="text-slate-900 dark:text-slate-100 font-light text-base">
        {title}
      </p>

      <div className="flex flex-col flex-wrap gap-4 justify-center w-full">
        {children}
      </div>
    </div>
  );
};
