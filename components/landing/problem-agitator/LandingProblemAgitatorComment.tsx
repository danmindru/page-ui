import clsx from 'clsx';

export const LandingProblemAgitatorComment = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        'absolute text-xs font-semibold tracking-wide text-red-500/90 opacity-0 group-hover/agitator:opacity-100 transition-opacity duration-300',
        className,
      )}
    >
      {children}
    </div>
  );
};
