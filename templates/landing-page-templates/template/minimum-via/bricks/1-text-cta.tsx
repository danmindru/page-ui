import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

import { Button } from '@/components/shared/ui/button';

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
    <LandingPrimaryTextCtaSection
      title={
        <>
          Plain language.
          <br /> Great results.
        </>
      }
      description="We use plain language, creative concepts, and an obsession with positive brand experiences to connect our clients with their audience in a meaningful, memorable way."
      variant="secondary"
    >
      <Button size="xl" variant="secondary" asChild>
        <a href="#">Hire us</a>
      </Button>

      <LandingSocialProof
        className="w-full justify-center mt-12"
        showRating
        numberOfUsers={6000}
        suffixText="happy customers"
        avatarItems={avatarItems}
        disableAnimation
      />
    </LandingPrimaryTextCtaSection>
  );
}
