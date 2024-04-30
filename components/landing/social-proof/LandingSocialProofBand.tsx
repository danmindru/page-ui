import clsx from 'clsx';

/**
 * Highlights important features, milestones or testimonials of your product.
 *
 * Use this to highlight key features or social proof. This is usually placed at the top of the page, but you can also use it in between sections or below your primary CTA.
 */
export const LandingSocialProofBand = ({
  className,
  invert,
  children,
}: {
  className?: string;
  invert?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        'w-full py-2',
        invert
          ? 'bg-slate-700 dark:bg-slate-300'
          : 'bg-slate-200 dark:bg-slate-900',
        className,
      )}
    >
      <div
        className={clsx(
          'max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 px-8',
          invert
            ? 'text-gray-300 dark:text-gray-600'
            : 'text-gray-700 dark:text-gray-200',
        )}
      >
        {children}
      </div>
    </div>
  );
};
