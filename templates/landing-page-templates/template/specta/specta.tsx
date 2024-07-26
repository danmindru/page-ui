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
  weight: '600',
  variable: '--font-space-display',
});

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './specta-logo.svg';

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';
import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import OneVideoCta from '@/app/demo/landing-page-templates/template/specta/bricks/1-video-cta';
import LandingPageMarquee from '@/components/landing/LandingMarquee';
import {
  ChromeIcon,
  FigmaIcon,
  GithubIcon,
  FramerIcon,
  TwitchIcon,
  TwitterIcon,
  GitlabIcon,
  InstagramIcon,
  SlackIcon,
} from 'lucide-react';
import { LandingTestimonialInline } from '@/components/landing/testimonial/LandingTestimonialInline';
import { LandingTestimonialInlineItem } from '@/components/landing/testimonial/LandingTestimonialInlineItem';

const DEMO_NAME = 'specta';

export const Specta = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);
  const { setCurrentTheme } = useThemeSwitch();

  setCurrentTheme('light');

  useEffect(() => {
    setThemeByIndex(18);
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

          <LandingPageMarquee withBackground>
            <ChromeIcon className="w-12 h-12 mx-8" />
            <FigmaIcon className="w-12 h-12 mx-8" />
            <GithubIcon className="w-12 h-12 mx-8" />
            <FramerIcon className="w-12 h-12 mx-8" />
            <TwitchIcon className="w-12 h-12 mx-8" />
            <TwitterIcon className="w-12 h-12 mx-8" />
            <GitlabIcon className="w-12 h-12 mx-8" />
            <InstagramIcon className="w-12 h-12 mx-8" />
            <SlackIcon className="w-12 h-12 mx-8" />
          </LandingPageMarquee>

          <LandingTestimonialInline>
            <LandingTestimonialInlineItem
              name="John Doe"
              text="I've already seen a tangible impact on engagement and growth"
              suffix="Marketing at Google"
            />

            <LandingTestimonialInlineItem
              name="Jane Doe"
              text="Best app on the market without a doubt"
            />

            <LandingTestimonialInlineItem
              name="Alice Doe"
              text="I've created twenty videos in two days without any issues"
              suffix="CEO of Instagram"
            />

            <LandingTestimonialInlineItem
              name="Guido Ross"
              text="I've been able to automate my entire workflow. 6/5 stars"
              suffix="DevOps at Meta"
            />
          </LandingTestimonialInline>
        </div>
      </BrickProvider>
    </div>
  );
};
