import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';

export default function Component() {
  return (
    <LandingSaleCtaSection
      title="No more complexity, just simplicity"
      description="Our AI-powered task prioritization feature automatically organizes your to-do list based on deadlines, importance, and your work patterns, ensuring you focus on the most critical tasks first."
      ctaHref="https://gum.co/product"
      ctaLabel="Sign up now"
      withBackgroundGlow
    />
  );
}
