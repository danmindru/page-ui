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
      titleComponent={
        <>
          <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
            It takes 1 minute
          </p>

          <h2 className="text-4xl font-semibold">
            The faster, easier way to create videos
          </h2>
        </>
      }
      descriptionComponent={
        <>
          <p>
            Jump in today and see how easy it is to create stunning videos with
            Snappy.
          </p>

          <LandingSocialProof
            className="w-full mt-6"
            showRating
            numberOfUsers={25000}
            suffixText="happy users"
            avatarItems={avatarItems}
            disableAnimation
          >
            <p className="text-xs">loved by 25,000+ editors</p>
          </LandingSocialProof>
        </>
      }
      ctaHref="https://gum.co/product"
      ctaLabel="Sign up now"
      withBackgroundGlow
      withBackground
    />
  );
}
