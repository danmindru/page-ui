import { Button } from '@/components/shared/ui/button';

import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export default function Component() {
  const keyPoints = [
    {
      title: 'Sharp',
      description:
        'Prepare to dazzle your audience with screenshots so sharp, they might just cut through the digital clutter.',
    },
    {
      title: 'Retina',
      description:
        "From Apple's retina display to your custom screen size wishes, we render them all in full-page glory, lazy loaded images included.",
    },
    {
      title: 'Free trial',
      description:
        "First 1000 are on us, because we think you'll love it. No credit card required. Cancel anytime.",
    },
  ];

  return (
    <LandingProductFeature
      title="Pixel-Perfect Precision"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints
            variant="secondary"
            keyPoints={keyPoints}
          />

          <Button className="mt-8" variant="secondary" asChild>
            <a href="#">Try now for free</a>
          </Button>

          <p className="text-sm">First 1000 screenshots are on us.</p>
        </>
      }
      imageSrc="/static/images/backdrop-20.webp"
      imageAlt="Screenshot of the product"
      imagePosition="right"
      imagePerspective="none"
      withBackground
      variant="secondary"
    />
  );
}
