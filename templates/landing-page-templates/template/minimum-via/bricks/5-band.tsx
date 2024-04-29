import { FigmaIcon, FramerIcon, GithubIcon } from 'lucide-react';

import { LandingBandSection } from '@/components/landing/LandingBand';

export default function Component() {
  return (
    <LandingBandSection
      title="Work with the best"
      description="We love the details that make brands happen."
      supportingComponent={
        <>
          <FigmaIcon className="w-12 h-12" />
          <GithubIcon className="w-12 h-12" />
          <FramerIcon className="w-12 h-12" />
        </>
      }
      withBackground={false}
    />
  );
}
