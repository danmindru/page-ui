import { Button } from '@/components/shared/ui/button';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function Component() {
  return (
    <LandingProductFeature
      title="One-click API Integration"
      descriptionComponent={
        <>
          With our API integration capability, seamlessly connect our app with
          all popular providers.
          <Button variant="outlineSecondary" asChild>
            <a href="#">Check out our SDK</a>
          </Button>
        </>
      }
      withBackground
      variant="secondary"
      imageSrc="/static/images/product-sample.webp"
      imageAlt="Screenshot of the product"
      imagePosition="center"
      textPosition="center"
    />
  );
}
