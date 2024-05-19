import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import {
  LandingPrimaryTextCtaSection,
  LandingPrimaryVideoCtaSection,
} from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import LatestArticles from '@/components/blog/LatestArticles';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

import {
  BookOpenCheckIcon,
  ClipboardIcon,
  GithubIcon,
  HeartHandshakeIcon,
  LayoutPanelLeftIcon,
  LibraryIcon,
  MoonIcon,
  PaintbrushIcon,
  SparklesIcon,
  VenetianMaskIcon,
} from 'lucide-react';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import Image from '@/components/shared/Image';
import { CtaButton } from '@/components/shared/ui/cta-button';

const testimonialItems = [
  {
    name: 'Philipp K.',
    text: "Is this like TailwindUI components (which cost $300) But it's free And it's optimized for conversion?",
    handle: '@philkellr',
    imageSrc: '/static/images/people/phil.webp',
    url: 'https://www.producthunt.com/posts/page-ui?comment=3462586',
  },
  {
    name: 'Deven B.',
    text: 'This looks amazing 🤩',
    handle: '@devenbhooshan',
    imageSrc: '/static/images/people/deven.webp',
    url: 'https://www.producthunt.com/posts/page-ui?comment=3462473',
  },
  {
    name: 'Isa T.',
    text: 'Love the themeable and responsive design plus the dark mode.',
    handle: '@isacoding',
    imageSrc: '/static/images/people/isa.webp',
    url: 'https://x.com/isacoding/status/1786314708191965553',
  },
  {
    name: 'João A.',
    text: 'This is genius. Easily add those great components to any project!',
    handle: '@joao_aguiam',
    imageSrc: '/static/images/people/joao.webp',
    url: 'https://www.producthunt.com/posts/page-ui?comment=3462497',
  },

  {
    name: 'Aman W.',
    text: "As someone who's dabbled in React, anything that cuts down on design time is a blessing.",
    handle: '@aman_wen',
    imageSrc: '/static/images/people/aman.webp',
    url: 'https://www.producthunt.com/posts/page-ui?comment=3462453',
    featured: true,
  },

  {
    name: 'Matthias N.',
    text: 'This is everything you need and more. Such a great product',
    handle: '@mnewme',
    imageSrc: '/static/images/people/matt.webp',
    url: 'https://www.producthunt.com/posts/page-ui?comment=3462475',
  },

  {
    name: 'Dany',
    text: 'Sorry guys, all my upcoming apps will look fire now.',
    handle: '@majorbaguette',
    imageSrc: '/static/images/people/dany.webp',
    url: 'https://www.producthunt.com/posts/page-ui?comment=3462564',
  },
  {
    name: 'Dima R.',
    text: 'This is extremely useful!!!',
    handle: '@dima_rubanov',
    imageSrc: '/static/images/people/dima.webp',
    url: 'https://www.producthunt.com/posts/page-ui?comment=3462477',
  },
  {
    name: 'Michael A.',
    text: 'This looks amazing, as a Frontend Developer who sometimes struggles with building interfaces due to a lack of proper design, using this it will 10x my flow. Love it!',
    handle: '@michael_adrian',
    imageSrc: '/static/images/people/michael.webp',
    url: 'https://www.producthunt.com/posts/page-ui?comment=3462526',
  },
  {
    name: 'Adarsh G.',
    text: 'This is amazing [...] Gonna use it always🚀',
    handle: '@Adarsh____gupta',
    imageSrc: '/static/images/people/adarsh.webp',
    url: 'https://x.com/Adarsh____gupta/status/1786275544532914642',
  },
  {
    name: 'SnackStack',
    text: 'This is such a marketing powerhouse',
    handle: '@stonedFractals',
    imageSrc: '/static/images/people/snack.webp',
    url: 'https://x.com/stonedFractals/status/1786225130034614344',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      {/* <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Fast, reliable, and secure
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          Easy to use, easy to love
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand> */}
      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryVideoCtaSection
        titleComponent={
          <h1 className="text-4xl lg:text-5xl lg:leading-14 font-semibold md:max-w-2xl">
            Landing page components that{' '}
            <span className="fancy-text-purple dark:fancy-text-blue">
              look great & convert
            </span>
          </h1>
        }
        description="Page UI is a set of landing page components & templates that you can copy & paste into you codebase. Made for React & built on top of TailwindCSS."
        textPosition="left"
        withBackground
        videoSrc="https://cache.shipixen.com/page-ui%2F1-launch-templates.mp4"
        autoPlay
        loop
        // leadingComponent={<LandingProductHuntAward />}
      >
        <CtaButton size="xl" asChild>
          <a href="/docs/installation">Get Started</a>
        </CtaButton>

        <Button size="xl" asChild variant="outlinePrimary">
          <a
            href="https://github.com/danmindru/page-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-4 h-4 text-black dark:text-white mr-2" />
            Read more
          </a>
        </Button>

        <LandingDiscount
          discountValueText="Free & open source"
          animated={false}
        />
        {/*
        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={[
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
          ]}
        /> */}
      </LandingPrimaryVideoCtaSection>

      <LandingProductVideoFeature
        titleComponent={
          <h2 className="text-4xl font-semibold">
            Building & designing landing pages is hard
          </h2>
        }
        descriptionComponent={
          <p className="mt-4 md:text-xl">
            Page UI is{' '}
            <span className="font-display md:text-xl italic">
              landing pages on easy mode
            </span>
            .<br className="hidden sm:inline-block" />{' '}
            <span className="fancy-text-purple">Copy any section</span> of a
            template and own it forever
            <br className="hidden sm:inline-block" /> in your codebase.
          </p>
        }
        textPosition="center"
        videoPosition="center"
        videoSrc="https://cache.shipixen.com/page-ui%2F2-full-bricks-teaser.mp4"
        autoPlay={false}
        loop
        // leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" asChild variant={'secondary'}>
          <a href="https://shipixen.com/demo/landing-page-templates/template/emerald-ai">
            <VenetianMaskIcon className="w-4 h-4 text-black dark:text-white mr-2" />
            Steal this template
          </a>
        </Button>

        <p className="opacity-70 text-sm mt-2">
          Try out 🥷 thief mode and copy any section with a click!
        </p>
      </LandingProductVideoFeature>

      <div className="w-full relative flex items-center justify-end overflow-hidden bg-primary-100/20 dark:bg-primary-900/10">
        <LandingProductFeature
          className="z-10"
          descriptionComponent={
            <div className="md:bg-white/80 dark:md:bg-black/80 md:backdrop-blur-xl md:rounded-md md:shadow-md md:p-6 xl:p-8 max-w-lg">
              <h2 className="text-4xl font-semibold">Inspired by the best</h2>
              <p>
                We've analyzed 10s of landing pages that convert and distilled
                them into a set of components that you can use in your projects.
              </p>
              <LandingProductFeatureKeyPoints
                keyPoints={[
                  {
                    title: 'Social proof',
                    description:
                      'Increase trust with testimonials, reviews, and ratings.',
                  },
                  {
                    title: 'Feature highlights',
                    description:
                      'Show off your product with beautiful feature sections.',
                  },
                  {
                    title: 'Dark mode & themes',
                    description:
                      'Never ship too late & choose from tons of themes to match your brand.',
                  },
                ]}
              />

              <Button asChild className="mt-6">
                <a href="/docs/installation">Get Started</a>
              </Button>

              <p className="text-sm mt-4">
                Compatible with React, Next.js, and more.
              </p>
            </div>
          }
        />

        <Image
          src="/static/images/template-collection.webp"
          alt="Page UI template collection examples"
          width={2000}
          height={2000}
          className="hidden md:flex absolute w-screen max-w-[800px]"
        />
      </div>

      <LandingProductVideoFeature
        title="Learn by example"
        descriptionComponent={
          <>
            <p>
              Page UI documentation has houndreds of examples that you can copy
              and modify.
              <br />
              Start from a blank slate to create, start by example to innovate.
            </p>

            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'World-class docs',
                  description:
                    'Explore in-depth docs, props and code samples for each component.',
                },
                {
                  title: 'Themes at your fingertips',
                  description:
                    'Switch between themes straight 👀 in the docs. You got that right.',
                },
                {
                  title: 'Templates for days',
                  description:
                    'We are constantly adding new templates and components to the library.',
                },
              ]}
            />

            <div className="flex gap-3 mt-6">
              <Button asChild>
                <a href="https://shipixen.com/demo/landing-page-component-examples">
                  Examples
                </a>
              </Button>

              <Button asChild variant="outlinePrimary">
                <a href="https://shipixen.com/demo/landing-page-templates">
                  Templates
                </a>
              </Button>
            </div>

            <p className="text-sm mt-4">
              All templates and components are free to use and open source.
            </p>
          </>
        }
        videoSrc="https://cache.shipixen.com/page-ui%2F3-theme-docs.mp4"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
      />

      {/* <LandingProductFeature
        title="Technical Excellence"
        descriptionComponent={
          <>
            <p>
              Specifically made for React and integrated with Shadcn UI, our
              components strive for technical superiority. Expect stable code,
              reliable performance, and brilliant compatibility. No more
              worrying about inconsistent behavior or compatibility issues.
            </p>

            <Button asChild variant="outlinePrimary">
              <a href="/read-more">Read more</a>
            </Button>

            <p className="text-sm">First month is on us.</p>
          </>
        }
        imageSrc="/static/images/backdrop-5.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
        variant="secondary"
      /> */}

      {/* <LandingBandSection
        title="4.9/5 stars"
        description="Our customers love our product."
        supportingComponent={
          <LandingSocialProof
            showRating
            numberOfUsers={99}
            avatarItems={[
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
            ]}
          />
        }
      /> */}

      {/* <LandingProductFeature
        title="Page Master"
        descriptionComponent={
          <>
            Design with purpose, code with simplicity
            <Button asChild variant="outlinePrimary">
              <a href="/read-more">Read more</a>
            </Button>
          </>
        }
        withBackground
        variant="secondary"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      /> */}

      <LandingSaleCtaSection
        title="Ship that landing page today"
        description="Get started with Page UI and transform your landing pages into high-converting, visually stunning websites with ease."
        ctaHref={'/docs/installation'}
        ctaLabel={'Get Started'}
        secondaryCtaHref="https://github.com/danmindru/page-ui"
        secondaryCtaLabel="Github"
        withBackgroundGlow
      />

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          titleComponent={
            <>
              <h2 className="text-4xl font-semibold">
                From Code to Conversion: Real Stories from Real Users
              </h2>
            </>
          }
          description="These are the voices of the folks who have incorporated Page UI into their workflow. But don't take our word for it. Read about their experiences straight from their keyboards."
          testimonialItems={testimonialItems}
          withBackgroundGlow
          withBackground
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingFeatureList
        title="Page UI is a new way to build landing pages"
        description="What's old is new again. Page UI is a fresh approach to creating landing pages inspired by Shadcn UI. Have complete control over your components by copying and pasting them into your codebase. No packages, no dependencies, no fuss. Just beautiful, high-converting landing pages."
        featureItems={[
          {
            title: 'Easy Copy & Paste',
            description:
              'Simply pick your preferred components and paste them into your React codebase. That’s it!',
            icon: <ClipboardIcon />,
          },
          {
            title: 'Free Templates',
            description:
              'Access a variety of professionally designed templates, inspired by the best in the industry.',
            icon: <LayoutPanelLeftIcon />,
          },
          {
            title: 'Thief Mode 🥷',
            description:
              'Turn on Thief Mode to copy any section of a template with a single click. Steal like an artist!',
            icon: <VenetianMaskIcon />,
          },
          {
            title: 'React-Compatible',
            description:
              'All Page UI components are made for React, making integration into your projects a breeze.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Based on Shadcn UI',
            description:
              'Page UI is built on top of Shadcn UI & TailwindCSS. Take your favorite UI library to the next level.',
            icon: <BookOpenCheckIcon />,
          },
          {
            title: 'Themeable',
            description:
              'All components are themeable, allowing you to match your brand’s look and feel with ease.',
            icon: <PaintbrushIcon />,
          },
          {
            title: 'Dark mode',
            description:
              'Dark mode is built in and ready to use. No more "I shipped too late", you\'ll ship just in time.',
            icon: <MoonIcon />,
          },
          {
            title: 'World-Class Docs',
            description:
              'Explore in-depth docs, props and code samples for each component. Or change themes straight in the docs.',
            icon: <LibraryIcon />,
          },
          {
            title: 'Free and Open Source',
            description:
              "All templates and components are free to use and open source. We're in this together.",
            icon: <HeartHandshakeIcon />,
          },
        ]}
        withBackground
      />

      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions About Page UI"
        description="We've collected some of the most common queries about our robust landing page components and templates to help you better understand what Page UI offers."
        faqItems={[
          {
            question: "What makes Page UI's landing page components unique?",
            answer:
              'Our landing page components are meticulously crafted for React, and based on products that have proven to convert. They are designed to be easy to use, highly customizable, and visually appealing, making them the perfect choice for developers looking to create high-converting landing pages.',
          },
          {
            question: 'Do I need specific coding skills to use Page UI?',
            answer:
              "As long as you're familiar with basic React development, you'll find Page UI incredibly easy to use. We’ve designed our components to be plug-and-play, enabling you to incorporate them into your project with minimal hassle.",
          },
          {
            question: 'Can I customize Page UI templates to match my brand?',
            answer:
              'Absolutely. Page UI components and templates are designed to be fully customizable. This allows you to effortlessly establish a consistent look and feel across your landing pages that aligns with your brand identity. Check out our documentation to see available customization options.',
          },
          {
            question: 'Are Page UI components responsive?',
            answer:
              '100 percent. Page UI components are built with responsiveness in mind. They are designed to look great and function seamlessly across all devices and screen sizes, ensuring that your landing pages are accessible to all users.',
          },
          {
            question: 'Is this really free?',
            answer: (
              <>
                Yes, Page UI is free and open source. Any component and template
                is free to use and modify for commercial purposes. We also offer
                an app called <a href="https://shipixen.com">Shipixen</a> that
                sets everything up for you, can generate your initial copy with
                AI and help you with themes.
              </>
            ),
          },
        ]}
      />

      <div className="w-full flex flex-col items-center bg-primary-100/20 dark:bg-primary-900/10">
        <section className="w-full p-6 container-wide mt-12">
          <LatestArticles />
        </section>
      </div>
    </div>
  );
}
