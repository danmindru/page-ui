import { Button } from '@/components/shared/ui/button';

import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';

export default function Component() {
  const keyPoints = [
    {
      title: '99.99991% uptime',
      description:
        'We boast an uptime of 99.99991%, which is basically like saying we are always there for you, except for that one awkward moment every millennium.',
    },
    {
      title: '120k developers',
      description:
        'With over 120k developers hitching a ride on our screenshot bandwagon, it is safe to say we are the go-to for your digital image needs.',
    },
    {
      title: 'Coding language',
      description:
        'Choose your coding language and integrate with the flair of a seasoned chef adding just the right spice to their dish.',
    },
  ];

  return (
    <LandingProductVideoFeature
      title="Developer's Delight"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints
            variant="secondary"
            keyPoints={keyPoints}
          />

          <Button className="mt-8" variant="secondary" asChild>
            <a href="#">Try now for free</a>
          </Button>

          <p className="text-sm">Get started with our free tier.</p>
        </>
      }
      videoSrc="https://cache.shipixen.com/features/4-deploy-to-vercel-with-1-click.mp4"
      videoPosition="left"
    />
  );
}
