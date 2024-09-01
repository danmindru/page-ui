'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import { Archivo } from 'next/font/google';

const baseFont = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-space-default',
});

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';

import Logo from './emerald-ai-logo.svg';
import LogoDark from './emerald-ai-logo-dark.svg';

import OneSocialProofBand from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/1-social-proof-band';
import TwoVideoFeature from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/2-video-cta';
import ThreeProductFeature from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/3-product-feature';
import FourVideoFeature from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/4-video-feature';
import FiveProductFeature from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/5-product-feature';
import SixBand from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/6-band';
import SevenProductFeature from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/7-product-feature';
import EightProductFeature from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/8-sale-cta';
import NineTestimonials from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/9-testimonials';
import TenFeatureList from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/10-feature-list';
import ElevenFaq from '@/app/demo/landing-page-templates/template/emerald-ai/bricks/11-faq';
import { useThemeStore } from '@/components/bricks/state/theme-state';

const DEMO_NAME = 'emerald-ai';

export const EmeraldAi = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);

  useEffect(() => {
    setThemeByIndex(13);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <BrickProvider>
        <div
          className={cn(
            'w-full flex flex-col items-center',
            `${baseFont.className} scroll-smooth`,
          )}
        >
          <Brick demo={DEMO_NAME} brick={'1-social-proof-band'}>
            <OneSocialProofBand />
          </Brick>

          <TemplateHeader
            className="mb-0 lg:mb-0 pointer-events-none"
            logo={<Logo className="h-10 w-auto" />}
            logoDark={<LogoDark className="h-10 w-auto" />}
          />

          <Brick demo={DEMO_NAME} brick={'2-video-cta'}>
            <TwoVideoFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-product-feature'}>
            <ThreeProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-video-feature'}>
            <FourVideoFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-product-feature'}>
            <FiveProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-band'}>
            <SixBand />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-product-feature'}>
            <SevenProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'8-sale-cta'}>
            <EightProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'9-testimonials'}>
            <NineTestimonials />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'10-feature-list'}>
            <TenFeatureList />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'11-faq'}>
            <ElevenFaq />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
