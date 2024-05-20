'use client';

import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import { Cabin } from 'next/font/google';

const baseFont = Cabin({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  variable: '--font-space-default',
});

import Logo from './screenshot-two-logo.svg';
import DarkLogo from './screenshot-two-logo-dark.svg';

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';

import OneImageCta from '@/app/demo/landing-page-templates/template/screenshot-two/bricks/1-image-cta';
import TwoProductFeature from '@/app/demo/landing-page-templates/template/screenshot-two/bricks/2-product-feature';
import ThreeProductFeature from '@/app/demo/landing-page-templates/template/screenshot-two/bricks/3-product-feature';
import FourProductVideoFeature from '@/app/demo/landing-page-templates/template/screenshot-two/bricks/4-product-video-feature';
import FiveSaleCta from '@/app/demo/landing-page-templates/template/screenshot-two/bricks/5-sale-cta';
import SixProductFeature from '@/app/demo/landing-page-templates/template/screenshot-two/bricks/6-product-feature';
import SevenTestimonials from '@/app/demo/landing-page-templates/template/screenshot-two/bricks/7-testimonials';
import EightFaq from '@/app/demo/landing-page-templates/template/screenshot-two/bricks/8-faq';

const DEMO_NAME = 'screenshot-two';

export const ScreenshotTwo = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);

  useEffect(() => {
    setThemeByIndex(10);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <BrickProvider>
        <div
          className={cn(
            'w-full flex flex-col items-center',
            `${baseFont.variable} scroll-smooth`,
          )}
        >
          <TemplateHeader
            className="mb-0 lg:mb-0 pointer-events-none"
            logo={<Logo className="h-10 w-auto" />}
            logoDark={<DarkLogo className="h-10 w-auto" />}
          />

          <Brick demo={DEMO_NAME} brick={'1-image-cta'}>
            <OneImageCta />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'2-product-feature'}>
            <TwoProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-product-feature'}>
            <ThreeProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-product-video-feature'}>
            <FourProductVideoFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-sale-cta'}>
            <FiveSaleCta />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-product-feature'}>
            <SixProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-testimonials'}>
            <SevenTestimonials />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'8-faq'}>
            <EightFaq />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
