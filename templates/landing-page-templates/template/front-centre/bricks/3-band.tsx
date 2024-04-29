import { ChromeIcon, FigmaIcon, FramerIcon, GithubIcon } from 'lucide-react';
import { LandingBandSection } from '@/components/landing/LandingBand';

export default function Component() {
  return (
    <LandingBandSection
      title="Used by the best"
      description="Used by Google, Fortune 500 companies and industry leaders worldwide."
      supportingComponent={
        <>
          <ChromeIcon className="w-12 h-12" />
          <FigmaIcon className="w-12 h-12" />
          <GithubIcon className="w-12 h-12" />
          <FramerIcon className="w-12 h-12" />
        </>
      }
    />
  );
}
