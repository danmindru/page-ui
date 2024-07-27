import {
  ChromeIcon,
  FramerIcon,
  TwitchIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  AirplayIcon,
  CctvIcon,
  Tv2Icon,
} from 'lucide-react';

import { LandingShowcase } from '@/components/landing/showcase/LandingShowcase';
import { LandingShowcaseItem } from '@/components/landing/showcase/LandingShowcaseItem';

export default function Component() {
  return (
    <LandingShowcase
      titleComponent={
        <>
          <p className="-mt-12 text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
            Import
          </p>

          <h2 className="text-4xl font-semibold">Add footage from anywhere</h2>
        </>
      }
      description="All your video assets in one place. Import your existing footage from any device or platform."
      className="mt-8"
    >
      <LandingShowcaseItem>
        <YoutubeIcon className="w-11 h-11" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <TwitchIcon className="w-11 h-11" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <ChromeIcon className="w-11 h-11" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <InstagramIcon className="w-11 h-11" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <TwitterIcon className="w-11 h-11" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <FramerIcon className="w-11 h-11" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <AirplayIcon className="w-11 h-11" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <CctvIcon className="w-11 h-11" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <Tv2Icon className="w-11 h-11" />
      </LandingShowcaseItem>
    </LandingShowcase>
  );
}
