import clsx from 'clsx';
import {
  LandingAvatar,
  SocialProofItem,
} from '@/components/landing/social-proof/LandingAvatar';
import { LandingRating } from '@/components/landing/rating/LandingRating';

/**
 * Shows social proof with avatars, number of users and an optional rating.
 *
 * Use this to show proof of existing, happy customers & increase trust.
 */
export const LandingSocialProof = ({
  children,
  className,
  avatarItems,
  numberOfUsers = 100,
  suffixText = 'happy users',
  showRating,
  disableAnimation,
  size = 'medium',
}: {
  children?: React.ReactNode;
  className?: string;
  avatarItems: SocialProofItem[];
  numberOfUsers: number;
  suffixText?: string;
  showRating?: boolean;
  disableAnimation?: boolean;
  size?: 'small' | 'medium' | 'large';
}) => {
  const numberText =
    numberOfUsers > 1000
      ? `${(numberOfUsers / 1000).toFixed(0)}k`
      : `${numberOfUsers}`;

  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      <div className={clsx('group/sp flex gap-1')}>
        {avatarItems.map((avatarItem, index) => (
          <LandingAvatar
            key={index}
            size={size === 'small' ? 'medium' : size}
            imageSrc={avatarItem.imageSrc}
            name={avatarItem.name}
            className={clsx(
              'relative',
              !disableAnimation
                ? 'md:group-hover/sp:-ml-0.5 transition-all duration-300'
                : '',
              index === 1 || index === 2 ? `-ml-4` : '',
              index === 3 ? `-ml-5` : '',
              index > 3 ? `-ml-6` : '',
            )}
          />
        ))}

        <div
          className={clsx(
            !disableAnimation
              ? 'md:group-hover/sp:-ml-0.5 transition-all duration-300'
              : '',
            size === 'small' || size === 'medium' ? 'h-9 w-9 text-xs' : '',
            size === 'large' ? 'h-16 w-16 text-base' : '',
            'relative flex items-center justify-center rounded-full border-2 border-solid border-primary-100 -ml-5 bg-primary-100 text-gray-900 dark:text-gray-900',
          )}
        >
          {numberText}+
        </div>
      </div>

      <div className="flex flex-col justify-center gap-1">
        {showRating ? <LandingRating size={size} /> : null}

        {!children ? (
          <p
            className={clsx(
              'max-w-sm',
              size === 'small' || size === 'medium' ? 'text-xs' : '',
              size === 'large' ? 'text-base' : '',
            )}
          >
            from {numberText}+ {suffixText}
          </p>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
