import { cn } from '@/lib/utils';

export const DemoSubtitle = ({
  className,
  title,
  parent,
  description,
}: {
  className?: string;
  title: string;
  parent?: string;
  description?: string | React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        'relative z-10 p-4 w-auto bg-gray-100/90 dark:bg-slate-900/90 border-b border-gray-500/20 rounded-t-md mt-2',
        className,
      )}
    >
      <h3
        className="font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none fancy-heading fancy-text-purple"
        id={`${
          parent ? `${parent.toLowerCase().replace(/ /g, '-')}-` : ''
        }${title.toLowerCase().replace(/ /g, '-')}`}
      >
        {title}
      </h3>

      {description ? (
        <div className="font-medium text-sm fancy-text-purple">
          {description}
        </div>
      ) : (
        ''
      )}
    </section>
  );
};
