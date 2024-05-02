import { LandingRating } from '@/components/landing/rating/LandingRating';
import clsx from 'clsx';
import { CheckCheckIcon, GiftIcon, TrophyIcon, Wand2Icon } from 'lucide-react';

/**
 * Shows a social proof/key feature/milestone item with an optional graphic.
 *
 * Meant to be used inside a `LandingSocialProofBand`.
 */
export const LandingSocialProofBandItem = ({
  className,
  graphic = 'checkmark',
  customGraphic,
  children,
}: {
  className?: string;
  graphic?: 'none' | 'checkmark' | 'gift' | 'magic' | 'trophy' | 'rating';
  customGraphic?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className={clsx('flex items-center justify-start gap-0.5', className)}>
      {graphic ? (
        <>
          {graphic === 'checkmark' ? (
            <CheckCheckIcon className="w-4 h-4 text-green-500 mr-1.5" />
          ) : null}
          {graphic === 'magic' ? (
            <Wand2Icon className="w-4 h-4 text-yellow-500 mr-1.5" />
          ) : null}

          {graphic === 'trophy' ? (
            <TrophyIcon className="w-4 h-4 text-yellow-500 mr-1.5" />
          ) : null}

          {graphic === 'gift' ? (
            <GiftIcon className="w-4 h-4 text-green-500 mr-1.5" />
          ) : null}

          {graphic === 'rating' ? (
            <LandingRating size="small" className="mr-1.5" />
          ) : null}
        </>
      ) : null}

      {customGraphic}

      <span className="text-xs">{children}</span>
    </div>
  );
};
