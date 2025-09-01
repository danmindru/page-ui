import clsx from 'clsx';

export const LandingProblemAgitatorItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        className,
        'relative h-full flex items-center justify-center text-lg font-semibold w-40 text-center group/agitator cursor-pointer hover:scale-105 transition-all duration-300',
      )}
    >
      {children}
    </div>
  );
};
