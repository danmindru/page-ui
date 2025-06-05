import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/shared/ui/button';
import clsx from 'clsx';

const IosAppStoreWhite = dynamic(() => import('./buttons/IosAppStoreBlack'));
const IosAppStoreBlack = dynamic(() => import('./buttons/IosAppStoreWhite'));
const MacAppStoreWhite = dynamic(() => import('./buttons/MacAppStoreBlack'));
const MacAppStoreBlack = dynamic(() => import('./buttons/MacAppStoreWhite'));
const MicrosoftWhite = dynamic(() => import('./buttons/MicrosoftStoreBlack'));
const MicrosoftBlack = dynamic(() => import('./buttons/MicrosoftStoreWhite'));
const GooglePlayWhite = dynamic(() => import('./buttons/GooglePlayStoreBlack'));
const GooglePlayBlack = dynamic(() => import('./buttons/GooglePlayStoreWhite'));

const STORE_IMAGES = {
  'ios-appstore': {
    black: IosAppStoreWhite,
    white: IosAppStoreBlack,
  },
  'mac-appstore': {
    black: MacAppStoreWhite,
    white: MacAppStoreBlack,
  },
  'microsoft-store': {
    black: MicrosoftWhite,
    white: MicrosoftBlack,
  },
  'google-playstore': {
    black: GooglePlayWhite,
    white: GooglePlayBlack,
  },
};

const STORE_NAMES = {
  'ios-appstore': 'iOS AppStore',
  'mac-appstore': 'Mac AppStore',
  'microsoft-store': 'Microsoft Store',
  'google-playstore': 'Google Play Store',
};

export interface LandingAppStoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appStore: keyof typeof STORE_IMAGES;
  variant?: 'white' | 'black';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  asChild?: boolean;
}

/**
 * A button that show various app store download badges.
 */
export const LandingAppStoreButton = ({
  appStore,
  variant = 'black',
  size = 'default',
  className = '',
  children,
  asChild,
  ...props
}: LandingAppStoreButtonProps) => {
  const storeName = STORE_NAMES[appStore];

  const SvgComponent = STORE_IMAGES[appStore][variant];

  return (
    <Button
      type="button"
      className={clsx(
        '!p-0 relative inline-flex items-center justify-center cursor-pointer transition-opacity duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
        className,
      )}
      aria-label={`Download from ${storeName}`}
      {...props}
      size={size}
      variant={'ghost'}
      tabIndex={0}
      asChild={asChild}
    >
      {asChild ? (
        children ? (
          React.cloneElement(
            children as React.ReactElement,
            {},
            <SvgComponent aria-label={`${storeName} button`} />,
          )
        ) : (
          <span>
            <SvgComponent aria-label={`${storeName} button`} />
          </span>
        )
      ) : (
        <SvgComponent aria-label={`${storeName} button`} />
      )}
    </Button>
  );
};
