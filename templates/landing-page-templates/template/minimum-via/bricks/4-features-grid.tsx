import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

import { Button } from '@/components/shared/ui/button';

export default function Component() {
  return (
    <LandingProductFeaturesGrid
      title="Hire us for your next project"
      descriptionComponent={
        <div className="w-full mt-4 text-lg">
          <p>Want words, but don’t want to write them? Let’s chat.</p>

          <Button className="mt-4" variant="secondary" asChild>
            <a href="#">Get in touch</a>
          </Button>
        </div>
      }
      className="grayscale"
      withBackground={false}
    >
      <LandingProductFeature
        title="Jane Doe"
        description="20 years of experience in the industry. She has worked with some of the biggest brands in the world."
        imageSrc="https://picsum.photos/id/64/600/600"
        imageAlt="Sample image"
      />

      <LandingProductFeature
        title="Melissa Adams"
        description="Melissa is a seasoned professional with a keen eye for detail. She is an expert in her field."
        imageSrc="https://picsum.photos/id/65/600/600"
        imageAlt="Sample image"
      />

      <LandingProductFeature
        title="John Doe"
        description="Over 200 projects completed. John is a master of his craft and a pleasure to work with."
        imageSrc="https://picsum.photos/id/669/600/600"
        imageAlt="Sample image"
      />
    </LandingProductFeaturesGrid>
  );
}
