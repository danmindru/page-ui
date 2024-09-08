import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

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

export default function Component() {
  return (
    <LandingSaleCtaSection
      title="Transform Your Garden Today"
      descriptionComponent={
        <>
          <p>
            Join thousands of gardeners who are reimagining their outdoor spaces
            with Gnomie. From planning to planting, we’re here to help every
            step of the way.
          </p>

          <LandingSocialProof
            className="w-full mt-6"
            showRating
            numberOfUsers={110000}
            suffixText="happy gardeners"
            avatarItems={avatarItems}
            size="medium"
            disableAnimation
          />
        </>
      }
      ctaHref="#"
      ctaLabel="Get started in minutes"
    />
  );
}
