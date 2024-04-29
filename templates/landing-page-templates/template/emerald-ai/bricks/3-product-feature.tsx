import { Button } from '@/components/shared/ui/button';

import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export default function Component() {
  return (
    <LandingProductFeature
      title="Supercharge Your Efficiency!"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints
            keyPoints={[
              {
                title: 'Intelligent Assistance',
                description:
                  'Receive personalized recommendations and insights tailored to your workflow.',
              },
              {
                title: 'Seamless Collaboration',
                description:
                  'Easily collaborate with team members and clients in real-time.',
              },
              {
                title: 'Advanced Customization',
                description:
                  'Tailor your app to fit your unique requirements with extensive customization options.',
              },
            ]}
          />

          <Button className="mt-8" asChild>
            <a href="#">Try now for free</a>
          </Button>

          <p className="text-sm">7 day free trial, no credit card required.</p>
        </>
      }
      imageSrc="/static/images/backdrop-19.webp"
      imageAlt="Screenshot of the product"
      imagePosition="left"
      imagePerspective="bottom"
    />
  );
}
