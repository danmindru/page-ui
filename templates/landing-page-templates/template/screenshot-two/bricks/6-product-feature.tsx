import { Button } from '@/components/shared/ui/button';

import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function Component() {
  return (
    <LandingProductFeature
      title="Automate and Elevate"
      descriptionComponent={
        <>
          Superb documentation, ready-made SDKs, and no-code magic. <br />
          You're free to focus on what truly matters.
          <Button variant="secondary" asChild>
            <a href="#">Check out our SDK</a>
          </Button>
        </>
      }
      imageSrc="/static/images/product-sample.webp"
      imageAlt="Screenshot of the product"
      imagePosition="center"
      textPosition="center"
    />
  );
}
