import { Button } from '@/components/shared/ui/button';

import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export default function Component() {
  const keyPoints = [
    {
      title: 'Searchable',
      description: 'Find the perfect clip, every time',
    },
    {
      title: 'Scalable',
      description: 'Import videos from 20+ platforms',
    },
    {
      title: 'Shareable',
      description: 'Easily give everyone on your team access',
    },
  ];

  return (
    <LandingProductFeature
      titleComponent={
        <>
          <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
            Manage
          </p>

          <h2 className="text-4xl font-semibold">
            All your videos in one place
          </h2>
        </>
      }
      descriptionComponent={
        <>
          <p>
            No more chaos. One centralized location to manage every video
            project, whether you have 1 video or 100. Plus, invite your whole
            team to add, edit, and share content.
          </p>
          <LandingProductFeatureKeyPoints
            variant="secondary"
            keyPoints={keyPoints}
            className="mt-4"
          />
          <Button className="mt-8" variant="secondary" asChild>
            <a href="#">Sign up for free</a>
          </Button>
        </>
      }
      imageSrc="/static/images/backdrop-24.webp"
      imageAlt="Screenshot of the product"
      imagePosition="left"
      imagePerspective="none"
      zoomOnHover={false}
      withBackground
      variant="secondary"
    />
  );
}
