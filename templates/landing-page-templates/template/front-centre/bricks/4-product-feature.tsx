import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

import { Button } from '@/components/shared/ui/button';

export default function Component() {
  const keyPoints = [
    {
      title: 'Engaging Tutorials',
      description:
        'Learn at your own pace with our easy-to-follow tutorials, designed for beginners and seasoned developers alike.',
    },
    {
      title: 'Live Coding Sessions',
      description:
        'Participate in live coding sessions led by experienced instructors, gaining insights and tips in real-time.',
    },
    {
      title: 'Interactive Quizzes',
      description:
        'Test your knowledge and reinforce learning with interactive quizzes that make studying fun and effective.',
    },
  ];

  return (
    <LandingProductFeature
      title="Streamlined Learning Paths"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints keyPoints={keyPoints} />

          <Button className="mt-8" asChild>
            <a href="#">Get started free</a>
          </Button>

          <p className="text-sm">No credit card required.</p>
        </>
      }
      imageSrc="/static/images/backdrop-22.webp"
      imageAlt="Screenshot of the product"
      imagePosition="left"
      imagePerspective="bottom"
    />
  );
}
