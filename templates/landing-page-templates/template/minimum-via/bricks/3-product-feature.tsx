import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function Component() {
  return (
    <LandingProductFeature
      title="Hire us for your next project"
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
