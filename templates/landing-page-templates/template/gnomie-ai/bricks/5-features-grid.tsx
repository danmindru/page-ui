import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function Component() {
  return (
    <LandingProductFeaturesGrid
      title="Your garden, reimagined"
      description="See how Gnomie AI completely transformed our customers' gardens, making them more beautiful and easier to maintain."
      withBackground={false}
      variant="secondary"
    >
      <LandingProductVideoFeature
        title="Desert Oasis in Phoenix, Arizona"
        description="Before: A barren, rocky yard with minimal shade and sparse vegetation. After: A serene desert garden with drought-resistant plants that thrive in the intense Arizona heat."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://cache.shipixen.com/features/21-run-locally.mp4"
      />

      <LandingProductVideoFeature
        title="Cottage Garden in the English Countryside"
        description="Before: An overgrown, unstructured garden with random patches of grass and weeds. After: A picturesque cottage garden bursting with color and charm, inspired by classic English gardens."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
      />

      <LandingProductVideoFeature
        title="Tropical Paradise in Miami, Florida"
        description="Before: A plain, grassy lawn with little shade and no defined garden areas. After: A vibrant tropical paradise filled with lush, exotic plants that thrive in Miami's humid climate."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://cache.shipixen.com/features/2-generate-content-with-ai.mp4"
      />

      <LandingProductVideoFeature
        title="Coastal Retreat in Santa Monica, California"
        description="Before: A dry, sandy yard with sparse, struggling plants. After: A stylish, drought-tolerant coastal garden that thrives in Santa Monica's Mediterranean climate."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://cache.shipixen.com/features/3-theme-and-logo.mp4"
      />
    </LandingProductFeaturesGrid>
  );
}
