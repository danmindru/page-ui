import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';

export default function Component() {
  return (
    <LandingSaleCtaSection
      title="Unlock Your Front-End Potential"
      description={
        'Take your development journey to the next level with our comprehensive front-end learning center.'
      }
      ctaHref="https://gum.co/product"
      ctaLabel="Sign up now"
      withBackgroundGlow
    />
  );
}
