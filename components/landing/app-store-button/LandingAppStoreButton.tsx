import React from 'react';
import dynamic from 'next/dynamic';
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

type BaseProps = {
  appStore: keyof typeof STORE_IMAGES;
  variant?: 'white' | 'black';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  className?: string;
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: never;
  };

type LinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    onClick?: never;
    target?: string;
  };

export type LandingAppStoreButtonProps = ButtonProps | LinkProps;

/**
 * A button that show various app store download badges.
 */
export const LandingAppStoreButton = (props: LandingAppStoreButtonProps) => {
  const {
    appStore,
    variant = 'black',
    size = 'default',
    className = '',
  } = props;

  const storeName = STORE_NAMES[appStore];
  const SvgComponent = STORE_IMAGES[appStore][variant];

  const commonClasses = clsx(
    '!p-0 relative inline-flex items-center justify-center cursor-pointer transition-opacity duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
    size === 'sm' && 'h-10',
    size === 'default' && 'h-12',
    size === 'lg' && 'h-14',
    size === 'xl' && 'h-16',
    className,
  );

  const content = <SvgComponent aria-label={`${storeName} button`} />;

  if ('href' in props && props.href) {
    const { href, target, onClick } = props;
    return (
      <a
        href={href}
        className={commonClasses}
        aria-label={`Download from ${storeName}`}
        target={target}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  const { onClick } = props as ButtonProps;

  return (
    <button
      type="button"
      className={commonClasses}
      aria-label={`Download from ${storeName}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
