'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import { Source_Sans_3, Montserrat } from 'next/font/google';

const baseFont = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-space-default',
});

const displayFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-space-display',
});

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './front-centre-logo.svg';
import DarkLogo from './front-centre-logo-dark.svg';

import OneSocialProofBand from '@/app/demo/landing-page-templates/template/front-centre/bricks/1-social-proof-band';
import TwoVideoCta from '@/app/demo/landing-page-templates/template/front-centre/bricks/2-video-cta';
import ThreeBand from '@/app/demo/landing-page-templates/template/front-centre/bricks/3-band';
import FourProductFeature from '@/app/demo/landing-page-templates/template/front-centre/bricks/4-product-feature';
import FiveProductFeature from '@/app/demo/landing-page-templates/template/front-centre/bricks/5-product-feature';
import SixProductFeaturesGrid from '@/app/demo/landing-page-templates/template/front-centre/bricks/6-product-features-grid';
import SevenBand from '@/app/demo/landing-page-templates/template/front-centre/bricks/7-band';
import EightTestimonials from '@/app/demo/landing-page-templates/template/front-centre/bricks/8-testimonials';
import NineSaleCta from '@/app/demo/landing-page-templates/template/front-centre/bricks/9-sale-cta';
import TenFaq from '@/app/demo/landing-page-templates/template/front-centre/bricks/10-faq';

const DEMO_NAME = 'front-centre';

export const FrontCentre = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);
  const { setCurrentTheme } = useThemeSwitch();

  setCurrentTheme('light');

  useEffect(() => {
    setThemeByIndex(26);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <BrickProvider>
        <div
          className={cn(
            'w-full flex flex-col items-center',
            `${baseFont.className} ${displayFont.variable} scroll-smooth`,
          )}
        >
          <Brick demo={DEMO_NAME} brick={'1-social-proof-band'}>
            <OneSocialProofBand />
          </Brick>

          <TemplateHeader
            className="absolute md:top-8 mb-0 lg:mb-0 pointer-events-none"
            logo={<Logo className="h-10 w-auto" />}
            logoDark={<DarkLogo className="h-10 w-auto" />}
          />

          <Brick
            demo={DEMO_NAME}
            brick={'2-video-cta'}
            className="first-template-item"
          >
            <TwoVideoCta />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-band'}>
            <ThreeBand />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-product-feature'}>
            <FourProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-product-feature'}>
            <FiveProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-product-features-grid'}>
            <SixProductFeaturesGrid />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-band'}>
            <SevenBand />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'8-testimonials'}>
            <EightTestimonials />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'9-sale-cta'}>
            <NineSaleCta />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'10-faq'}>
            <TenFaq />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
