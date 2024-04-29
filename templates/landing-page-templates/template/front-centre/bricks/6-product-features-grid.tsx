import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function Component() {
  return (
    <LandingProductFeaturesGrid
      title="Explore our courses"
      description="Dive deep into coding with our interactive projects, honing your skills through hands-on experience."
      withBackground={false}
    >
      <LandingProductFeature
        title="Portfolio Building"
        description="Craft a standout portfolio showcasing your skills and projects, setting yourself apart in the competitive job market."
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Sample image"
      />

      <LandingProductVideoFeature
        title="Career Guidance"
        description="Get expert advice on building a successful career in front-end development, from resume crafting to job interview tips."
        autoPlay={false}
        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
      />

      <LandingProductVideoFeature
        title="Feedback & Support"
        description="Receive personalized feedback from instructors and access dedicated support to overcome challenges and keep progressing."
        autoPlay={false}
        videoSrc="https://cache.shipixen.com/features/2-generate-content-with-ai.mp4"
      />

      <LandingProductVideoFeature
        title="Interactive Quizzes"
        description="Test your knowledge and reinforce learning with interactive quizzes that make studying fun and effective."
        autoPlay={false}
        videoSrc="https://cache.shipixen.com/features/3-theme-and-logo.mp4"
      />
    </LandingProductFeaturesGrid>
  );
}
