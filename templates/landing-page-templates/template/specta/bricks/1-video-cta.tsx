import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

import { Button } from '@/components/shared/ui/button';
import { colors } from '@/data/config/colors';

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
    <>
      <LandingPrimaryVideoCtaSection
        title="Create & edit stunning videos with AI"
        description="Specta is a revolutionary AI-powered video editing tool that automates the entire video creation process, making it easy to produce professional videos. With no skills required."
        autoPlay
        controls={false}
        textPosition="center"
        videoPosition="center"
        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
        withBackground
        variant="secondary"
        leadingComponent={
          <p className="font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
            Video Editing and Shorts made Easy
          </p>
        }
      >
        <div className="w-full mt-6 flex justify-center gap-4">
          <Button size="xl" className="p-7 text-xl" variant="secondary" asChild>
            <a href="#">Start free today</a>
          </Button>
        </div>

        <LandingSocialProof
          className="w-full mt-6 justify-center"
          showRating
          numberOfUsers={12000}
          suffixText="happy users"
          avatarItems={avatarItems}
          size="large"
          disableAnimation
        />
      </LandingPrimaryVideoCtaSection>

      {/* Background gradient */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
            ` <svg xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a" cx="50%" cy="56.6%" r="50%" fx="50%" fy="56.6%" gradientUnits="userSpaceOnUse"><stop offset="0%" style="stop-color:${colors.primary.dark};stop-opacity:0.1"/><stop offset="54.99%" style="stop-color:${colors.primary.darker};stop-opacity:0.1"/><stop offset="100%" style="stop-color:${colors.secondary.darker};stop-opacity:0.1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>`,
          )}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      ></div>
    </>
  );
}
