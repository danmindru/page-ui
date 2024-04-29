import { Button } from '@/components/shared/ui/button';

import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export default function Component() {
  return (
    <LandingProductVideoFeature
      title="Smart when you need it"
      descriptionComponent={
        <>
          <p>
            No tech skills? No problem! Our app lets you create tailor-made
            solutions effortlessly.
          </p>

          <LandingProductFeatureKeyPoints
            variant="secondary"
            keyPoints={[
              {
                title: 'Rock-Solid Security',
                description:
                  'Rest assured, your data is safe with our top-notch security measures.',
              },
              {
                title: 'Automatic Updates',
                description:
                  'Never miss out on the latest features - our app updates itself automatically!',
              },
              {
                title: 'Scalability on Demand',
                description:
                  'Grow your app along with your business needs, effortlessly expanding to meet demand.',
              },
            ]}
          />
          <Button className="mt-8" variant="secondary" asChild>
            <a href="#">Try now for free</a>
          </Button>
          <p className="text-sm">Get started with our free tier.</p>
        </>
      }
      videoSrc="https://cache.shipixen.com/features/4-deploy-to-vercel-with-1-click.mp4"
      videoPosition="right"
      withBackground
      withBackgroundGlow
      variant="secondary"
      backgroundGlowVariant="secondary"
    />
  );
}
