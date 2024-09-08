'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import {
  Inter,
  Merriweather,
  Nunito_Sans,
  Poppins,
  Syne,
} from 'next/font/google';

const baseFont = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  variable: '--font-space-default',
});

const displayFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-space-display',
});

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './gnomie-ai-logo.svg';

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';
import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import OneVideoCta from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/1-video-cta';
import TwoExampleCarousel from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/2-example-carousel';
import ThreeProductTour from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/3-product-tour';
import FourProductTour from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/4-product-tour';
import FiveFeatureGrid from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/5-features-grid';
import SixExampleCarousel from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/6-example-carousel';
import SevenTestimonials from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/7-testimonials';
import EightPricing from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/8-pricing';
import NineSaleCta from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/9-sale-cta';
import TenFaq from '@/app/demo/landing-page-templates/template/gnomie-ai/bricks/10-faq';

const DEMO_NAME = 'gnomie-ai';

export const GnomieAi = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);
  const { setCurrentTheme } = useThemeSwitch();

  useEffect(() => {
    setThemeByIndex(34);
    setCurrentTheme('light');
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <BrickProvider>
        <div
          className={cn(
            'w-full flex flex-col items-center',
            `${baseFont.variable} ${displayFont.variable} scroll-smooth`,
          )}
        >
          <TemplateHeader
            className="absolute mb-0 lg:mb-0 pointer-events-none"
            logo={<Logo className="h-9 w-auto" />}
            logoDark={<Logo className="h-9 w-auto" />}
          />

          <Brick
            demo={DEMO_NAME}
            brick={'1-video-cta'}
            className="first-template-item"
          >
            <OneVideoCta />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-example-carousel'}>
            <TwoExampleCarousel />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-product-tour'}>
            <ThreeProductTour />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-product-tour'}>
            <FourProductTour />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-feature-grid'}>
            <FiveFeatureGrid />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-example-carousel'}>
            <SixExampleCarousel />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'8-testimonials'}>
            <SevenTestimonials />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'9-pricing'}>
            <EightPricing />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'10-sale-cta'}>
            <NineSaleCta />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'11-faq'}>
            <TenFaq />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
