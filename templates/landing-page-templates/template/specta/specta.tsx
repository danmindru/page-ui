'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { Inter, Syne } from 'next/font/google';

const baseFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  variable: '--font-space-default',
});

const displayFont = Syne({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600'],
  variable: '--font-space-display',
});

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './specta-logo.svg';

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';
import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import OneVideoCta from '@/app/demo/landing-page-templates/template/specta/bricks/1-video-cta';
import TwoMarquee from '@/app/demo/landing-page-templates/template/specta/bricks/2-marquee';
import ThreeTestimonialInline from '@/app/demo/landing-page-templates/template/specta/bricks/3-testimonial-inline';
import FourProductFeature from '@/app/demo/landing-page-templates/template/specta/bricks/4-product-feature';
import FiveShowcase from '@/app/demo/landing-page-templates/template/specta/bricks/5-showcase';
import SixProductFeature from '@/app/demo/landing-page-templates/template/specta/bricks/6-product-feature';
import SevenShowcaseMarquee from '@/app/demo/landing-page-templates/template/specta/bricks/7-showcase-marquee';
import EightTestimonials from '@/app/demo/landing-page-templates/template/specta/bricks/8-testimonials';
import NineSaleCta from '@/app/demo/landing-page-templates/template/specta/bricks/9-sale-cta';

const DEMO_NAME = 'specta';

export const Specta = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);
  const { setCurrentTheme } = useThemeSwitch();

  useEffect(() => {
    setThemeByIndex(18);
    setCurrentTheme('dark');
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

          <Brick demo={DEMO_NAME} brick={'2-marquee'}>
            <TwoMarquee />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-testimonial-inline'}>
            <ThreeTestimonialInline />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-product-feature'}>
            <FourProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-showcase'}>
            <FiveShowcase />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-product-feature'}>
            <SixProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-showcase-marquee'}>
            <SevenShowcaseMarquee />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'8-testimonials'}>
            <EightTestimonials />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'9-sale-cta'}>
            <NineSaleCta />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
