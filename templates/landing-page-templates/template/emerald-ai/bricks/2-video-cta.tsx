import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';

export default function Component() {
  const avatarItems = [
    {
      imageSrc: 'https://picsum.photos/id/64/100/100',
      name: 'John Doe',
    },
    {
      imageSrc: 'https://picsum.photos/id/65/100/100',
      name: 'Jane Doe',
    },
    {
      imageSrc: 'https://picsum.photos/id/669/100/100',
      name: 'Alice Doe',
    },
  ];

  return (
    <LandingPrimaryVideoCtaSection
      title="Transform Your Business Today"
      description="Say goodbye to inefficiencies and hello to success with our groundbreaking AI app. Streamline your workflow, boost productivity, and maximize revenue effortlessly."
      autoPlay
      controls={false}
      videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
      withBackground
      withBackgroundGlow
      variant="secondary"
      backgroundGlowVariant="secondary"
      leadingComponent={<LandingProductHuntAward />}
    >
      <Button size="xl" variant="secondary" asChild>
        <a href="#">Buy Now</a>
      </Button>

      <Button size="xl" variant="outlineSecondary">
        <a href="#">Learn More</a>
      </Button>

      <LandingDiscount
        discountValueText="$350 off"
        discountDescriptionText="for the first 10 customers (2 left)"
      />

      <LandingSocialProof
        className="w-full mt-12"
        showRating
        numberOfUsers={99}
        suffixText="happy users"
        avatarItems={avatarItems}
      />
    </LandingPrimaryVideoCtaSection>
  );
}
