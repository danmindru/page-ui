'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './minimum-via-logo.svg';
import DarkLogo from './minimum-via-logo-dark.svg';

import OneTextCta from '@/app/demo/landing-page-templates/template/minimum-via/bricks/1-text-cta';
import TwoFeaturesGrid from '@/app/demo/landing-page-templates/template/minimum-via/bricks/2-features-grid';
import ThreeProductFeature from '@/app/demo/landing-page-templates/template/minimum-via/bricks/3-product-feature';
import FourFeaturesGrid from '@/app/demo/landing-page-templates/template/minimum-via/bricks/4-features-grid';
import FiveBand from '@/app/demo/landing-page-templates/template/minimum-via/bricks/5-band';
import SixTestimonial from '@/app/demo/landing-page-templates/template/minimum-via/bricks/6-testimonial';
import SevenCta from '@/app/demo/landing-page-templates/template/minimum-via/bricks/7-cta';
import EightFaq from '@/app/demo/landing-page-templates/template/minimum-via/bricks/8-faq';

const DEMO_NAME = 'minimum-via';

export const MinimumVia = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);
  const setFonts = useThemeStore((state) => state.setFonts);
  const { setCurrentTheme } = useThemeSwitch();

  useEffect(() => {
    setFonts({
      default: {
        name: 'Roboto Slab',
        variableFont: true,
      },

      display: {
        name: 'Roboto Serif',
        variableFont: false,
        weights: [300, 400, 700],
      },
    });
    setThemeByIndex(32);
    setCurrentTheme('light');
  }, []);

  return (
    <div className={cn('w-full flex flex-col items-center')}>
      <BrickProvider>
        <div className={cn('w-full flex flex-col items-center scroll-smooth')}>
          <TemplateHeader
            hideMenuItems
            className="mb-0 lg:mb-0 pointer-events-none"
            logo={<Logo className="h-10 w-auto" />}
            logoDark={<DarkLogo className="h-10 w-auto" />}
          />

          <Brick demo={DEMO_NAME} brick={'1-text-cta'}>
            <OneTextCta />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'2-features-grid'}>
            <TwoFeaturesGrid />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-product-feature'}>
            <ThreeProductFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-features-grid'}>
            <FourFeaturesGrid />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-band'}>
            <FiveBand />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-testimonial'}>
            <SixTestimonial />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-cta'}>
            <SevenCta />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'8-faq'}>
            <EightFaq />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
