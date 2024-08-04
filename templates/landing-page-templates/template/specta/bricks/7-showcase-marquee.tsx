import { LandingMarquee } from '@/components/landing/LandingMarquee';
import { LandingShowcase } from '@/components/landing/showcase/LandingShowcase';
import Image from 'next/image';

export default function Component() {
  return (
    <>
      <LandingShowcase
        titleComponent={
          <>
            <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
              Monetize
            </p>

            <h2 className="text-4xl font-semibold leading-tight">
              Insert ads and earn money
            </h2>
          </>
        }
        description="Easily monetize your videos with our built-in tools. No need for a third-party service."
        className="-mb-12"
      />

      <LandingMarquee animationDurationInSeconds={100}>
        <Image
          src="/static/images/backdrop-5.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/static/images/backdrop-6.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/static/images/backdrop-9.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/static/images/backdrop-2.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />
      </LandingMarquee>

      <LandingMarquee
        animationDurationInSeconds={110}
        animationDirection="left"
      >
        <Image
          src="/static/images/backdrop-15.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/static/images/backdrop-12.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/static/images/backdrop-14.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />
      </LandingMarquee>
    </>
  );
}
