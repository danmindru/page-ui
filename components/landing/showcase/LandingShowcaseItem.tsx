import { LandingRating } from '@/components/landing/rating/LandingRating';
import { LandingAvatar } from '@/components/landing/social-proof/LandingAvatar';
import { clsx } from 'clsx';

/**
 * Use this component to display a single showcase item; usually wraps a logo or avatar etc.
 *
 * Should be used with the `LandingShowcase` component.
 */
export const LandingShowcaseItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        'flex-shrink-0 flex items-center justify-center w-full h-full p-1 rounded-lg bg-white dark:bg-black border-primary-500/10 border-2 aspect-square',
        className,
      )}
    >
      {children}
    </div>
  );
};
