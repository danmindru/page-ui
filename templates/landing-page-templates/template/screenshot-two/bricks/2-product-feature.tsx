import { Button } from '@/components/shared/ui/button';

import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export default function Component() {
  const keyPoints = [
    {
      title: 'Fast',
      description:
        'Capture screenshots in seconds. No more waiting. No more fiddling with scripts.',
    },
    {
      title: 'Secure',
      description:
        '100% encrypted and secure. Your data is safe with us, always. Privacy first.',
    },
    {
      title: 'Support',
      description:
        '24/7 customer support. We are here to help you at any time of the day. Just ask.',
    },
  ];

  return (
    <LandingProductFeature
      title="Crystal clear captures"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints keyPoints={keyPoints} />

          <Button className="mt-8" asChild>
            <a href="#">Try now for free</a>
          </Button>

          <p className="text-sm">Premium support included.</p>
        </>
      }
      imageSrc="/static/images/backdrop-8.webp"
      imageAlt="Screenshot of the product"
      imagePosition="left"
      imagePerspective="right"
    />
  );
}
