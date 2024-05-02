import { cn } from '@/lib/utils';

export const DemoTitle = ({
  className,
  title,
  description,
}: {
  className?: string;
  title: string;
  description?: string | React.ReactNode;
}) => {
  return (
    <section
      className={cn('relative z-10 w-full p-6 container-wide', className)}
    >
      <h2
        className="text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-5xl fancy-heading fancy-text-purple"
        id={title.toLowerCase().replace(/ /g, '-')}
      >
        {title}
      </h2>

      {description ? (
        <div className="font-medium md:text-xl fancy-text-purple">
          {description}
        </div>
      ) : (
        ''
      )}
    </section>
  );
};
