import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

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
    <LandingSaleCtaSection
      title="No more complexity, just simplicity"
      description="Introducing the revolutionary way to capture digital stills without the headache of herding browser windows or deciphering the enigma of edge cases. With a single API call, you can let your screenshot dreams fly, leaving the grunt work to us. "
      footerComponent={
        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy developers"
          avatarItems={avatarItems}
        />
      }
      ctaHref="https://gum.co/product"
      ctaLabel="Sign up now"
      withBackground
      withBackgroundGlow
    />
  );
}
