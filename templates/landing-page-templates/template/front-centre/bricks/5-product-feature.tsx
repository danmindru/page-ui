import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';

import { Button } from '@/components/shared/ui/button';

export default function Component() {
  return (
    <LandingProductFeature
      titleComponent={
        <>
          <LandingProductHuntAward
            title="#1 Product of the week"
            subtitle="DevTools"
          />

          <h2 className="text-4xl font-semibold leading-tight">
            Interactive Projects
          </h2>
        </>
      }
      descriptionComponent={
        <>
          <p>
            No tech skills? No problem! <br />
            Our app lets you create tailor-made solutions effortlessly.
            <br />
            Save time and frustration while reaching your development goals.
          </p>

          <Button className="mt-8" variant="secondary" asChild>
            <a href="#">Try now for free</a>
          </Button>
          <p className="text-sm">Get started with our free tier.</p>
        </>
      }
      imageSrc="/static/images/product-sample.webp"
      withBackground
      withBackgroundGlow
      variant="secondary"
      backgroundGlowVariant="secondary"
      imagePosition="center"
      textPosition="center"
    />
  );
}
