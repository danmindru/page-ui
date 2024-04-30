import clsx from 'clsx';
import Image from '@/components/shared/Image';

export interface SocialProofItem {
  imageSrc: string;
  name: string;
}

interface LandingAvatarProps extends SocialProofItem {
  className?: string;
  width?: number;
  height?: number;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Shows an avatar image.
 */
export const LandingAvatar = ({
  className,
  imageSrc,
  name,
  width = 128,
  height = 128,
  size = 'medium',
}: LandingAvatarProps) => {
  return (
    <Image
      src={imageSrc}
      alt={name}
      width={width}
      height={height}
      className={clsx(
        'rounded-full border-2 border-solid border-primary-100',
        size === 'small' ? 'w-6 h-6' : '',
        size === 'medium' ? 'h-9 w-9' : '',
        size === 'large' ? 'h-16 w-16' : '',
        className,
      )}
    />
  );
};
