import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';

import { Button } from '@/components/shared/ui/button';
import { colors } from '@/data/config/colors';

const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 35"
    className={className}
  >
    <path
      d="M17.377 12.311c-.881.042-1.788-.07-2.556-.452-.768-.38-1.378-1.058-1.485-1.836-.106-.774.362-1.62 1.181-1.914.817-.293 1.898.104 2.134.856-.01-.714-.01-1.465.367-2.095.378-.629 1.278-1.074 2.01-.774.51.21.795.723.84 1.22.042.497-.11.99-.265 1.471.155-.81 1.304-1.275 2.162-.965.859.31 1.327 1.207 1.214 2.02-.113.814-.72 1.527-1.472 2.004a4.787 4.787 0 0 1-4.13.465Z"
      fill="#FBB18C"
      className="animate-wiggle "
    />
    <path
      d="M10.739 33.484c-2.02-1.413-3.343-3.246-4.315-5.125-1.455-2.82-2.188-5.889-1.387-8.835.8-2.946 3.278-5.75 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.679 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.447-3.389-.317-6.845-.265-11.343-.32Z"
      fill="#CAD61B"
    />
    <mask
      id="a"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="24"
      height="23"
    >
      <path
        d="M10.739 33.484c-2.02-1.414-3.343-3.247-4.315-5.125-1.455-2.82-2.188-5.89-1.387-8.835.8-2.947 3.278-5.751 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.678 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.446-3.389-.316-6.845-.264-11.343-.32Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M12.888 10.472c-6.248 7.858-6.283 18.717-.087 26.6"
        stroke="#A9B136"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
    </g>
    <mask
      id="b"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="24"
      height="23"
    >
      <path
        d="M10.739 33.484c-2.02-1.414-3.343-3.247-4.315-5.125-1.455-2.82-2.188-5.89-1.387-8.835.8-2.947 3.278-5.751 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.678 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.446-3.389-.316-6.845-.264-11.343-.32Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#b)">
      <path
        d="M22.082 9.862c3.253 8.342 2.54 17.675-1.959 25.62"
        stroke="#A9B136"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
    </g>
    <mask
      id="c"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="24"
      height="23"
    >
      <path
        d="M10.739 33.484c-2.02-1.414-3.343-3.247-4.315-5.125-1.455-2.82-2.188-5.89-1.387-8.835.8-2.947 3.278-5.751 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.678 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.446-3.389-.316-6.845-.264-11.343-.32Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#c)">
      <path
        d="M16.67 9.656c-3.73 8.164-4.476 17.225-2.113 25.726"
        stroke="#A9B136"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
    </g>
    <mask
      id="d"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="24"
      height="23"
    >
      <path
        d="M10.739 33.484c-2.02-1.414-3.343-3.247-4.315-5.125-1.455-2.82-2.188-5.89-1.387-8.835.8-2.947 3.278-5.751 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.678 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.446-3.389-.316-6.845-.264-11.343-.32Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#d)">
      <path
        d="M18.183 8.633A87.576 87.576 0 0 1 16.45 37.72"
        stroke="#A9B136"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
    </g>
    <path
      d="M4 33.58a4 4 0 0 1 4-4h16.316a4 4 0 0 1 4 4V34H4v-.42Z"
      fill="#BB712C"
    />
    <path fill="#92541B" d="M0 34h32v1H0z" />
  </svg>
);

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
        title="Beautiful Garden Designs in Minutes"
        description="AI-powered garden design and landscaping. Tailored for your region. No design skills required."
        autoPlay
        controls={false}
        textPosition="center"
        videoPosition="center"
        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
        withBackground
        variant="secondary"
        leadingComponent={
          <div className="flex items-center">
            <LogoIcon className="h-24 w-auto" />
          </div>
        }
      >
        <div className="w-full mt-6 flex flex-col justify-center gap-4">
          <Button size="xl" className="p-7 text-xl" variant="secondary" asChild>
            <a href="#">Try Gnomie for free</a>
          </Button>
          <p className="text-sm opacity-50">No credit card required</p>
        </div>
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
