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
import { TemplateListItem } from '@/components/shared/TemplateListItem';

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
  SquareArrowOutUpRightIcon,
  VenetianMaskIcon,
} from 'lucide-react';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import Image from '@/components/shared/Image';
import { CtaButton } from '@/components/shared/ui/cta-button';
import Link from 'next/link';

const testimonialItems = [
  // {
  //   name: 'Philipp K.',
  //   text: "Is this like TailwindUI components (which cost $300) But it's free And it's optimized for conversion?",
  //   handle: '@philkellr',
  //   imageSrc: '/static/images/people/phil.webp',
  //   url: 'https://www.producthunt.com/posts/page-ui?comment=3462586',
  // },
  // {
  //   name: 'Deven B.',
  //   text: 'This looks amazing 🤩',
  //   handle: '@devenbhooshan',
  //   imageSrc: '/static/images/people/deven.webp',
  //   url: 'https://www.producthunt.com/posts/page-ui?comment=3462473',
  // },
  // {
  //   name: 'João A.',
  //   text: 'This is genius. Easily add those great components to any project!',
  //   handle: '@joao_aguiam',
  //   imageSrc: '/static/images/people/joao.webp',
  //   url: 'https://www.producthunt.com/posts/page-ui?comment=3462497',
  // },

  // {
  //   name: 'Aman W.',
  //   text: "As someone who's dabbled in React, anything that cuts down on design time is a blessing.",
  //   handle: '@aman_wen',
  //   imageSrc: '/static/images/people/aman.webp',
  //   url: 'https://www.producthunt.com/posts/page-ui?comment=3462453',
  //   featured: true,
  // },

  // {
  //   name: 'Matthias N.',
  //   text: 'This is everything you need and more. Such a great product',
  //   handle: '@mnewme',
  //   imageSrc: '/static/images/people/matt.webp',
  //   url: 'https://www.producthunt.com/posts/page-ui?comment=3462475',
  // },

  // {
  //   name: 'Dany',
  //   text: 'Sorry guys, all my upcoming apps will look fire now.',
  //   handle: '@majorbaguette',
  //   imageSrc: '/static/images/people/dany.webp',
  //   url: 'https://www.producthunt.com/posts/page-ui?comment=3462564',
  // },
  // {
  //   name: 'Dima R.',
  //   text: 'This is extremely useful!!!',
  //   handle: '@dima_rubanov',
  //   imageSrc: '/static/images/people/dima.webp',
  //   url: 'https://www.producthunt.com/posts/page-ui?comment=3462477',
  // },
  // {
  //   name: 'Michael A.',
  //   text: 'This looks amazing, as a Frontend Developer who sometimes struggles with building interfaces due to a lack of proper design, using this it will 10x my flow. Love it!',
  //   handle: '@michael_adrian',
  //   imageSrc: '/static/images/people/michael.webp',
  //   url: 'https://www.producthunt.com/posts/page-ui?comment=3462526',
  // },
  {
    name: 'Isa T.',
    text: 'Love the themeable and responsive design plus the dark mode.',
    handle: '@isacoding',
    imageSrc: '/static/images/people/isa.webp',
    url: 'https://x.com/isacoding/status/1786314708191965553',
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

  {
    name: 'Manoj R',
    text: 'I have tried this, simple and easy to customize. It can save a lot of time for Indie makers like me. Keep up the great work Dan!',
    handle: '@manoj_11',
    imageSrc: '/static/images/people/1.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3708772',
  },

  {
    name: 'Tony Han',
    text: 'Incredible product! Open source? Steal Mode? These are some super interesting ideas. Bravo for shipping this master piece!',
    handle: '@tonyhanded',
    imageSrc: '/static/images/people/2.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3710253',
  },

  {
    name: 'David Gutiérrez',
    text: 'Those are some well-designed tailwindcss templates! Dan has a great eye for design, so I expect this to become an industry standard soon 💪',
    handle: '@_dgut',
    imageSrc: '/static/images/people/3.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3708590',
  },

  {
    name: 'René N',
    text: 'Really nice and awesome looking templates! I will need to check this out next time I launch a project 😍',
    handle: '@rene_nielsen_dk',
    imageSrc: '/static/images/people/4.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3708708',
  },

  {
    name: 'Zulkar Naim',
    text: "[...] looks amazing and incredibly useful. I'll use it to streamline my workflow and boost productivity. Keep up the fantastic work!",
    handle: '@zulkarnaim',
    imageSrc: '/static/images/people/5.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3709121',
  },

  {
    name: 'Lera Kuntsevich',
    text: 'The most beautiful thing I ever saw',
    handle: '@lera_kuntsevich1',
    imageSrc: '/static/images/people/15.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3710153',
    featured: true,
  },

  {
    name: 'Bon',
    text: '[...] an exceptionally unique product. Page UI is beautifully designed and is also free and open-source. #1!',
    handle: '@bonvisions',
    imageSrc: '/static/images/people/6.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3709867',
  },

  {
    name: 'Maia Buljeta',
    text: 'This is so awesome! Wow! As a developer, this really makes my day. Thank you for creating this! These templates will make my pages look perfect.',
    handle: '@maia_buljeta',
    imageSrc: '/static/images/people/7.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3710345',
    featured: true,
  },

  {
    name: 'Mycolaos',
    text: 'What can be best than free and complete out-of-the box templates integrated with your favorite framework? Only templates that are made with so much care as PageUI.',
    handle: '@mycolaos',
    imageSrc: '/static/images/people/8.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3718910',
  },

  {
    name: 'Yeddie',
    text: 'Love this. This fills a need for specific template components that are missing from the big component libraries. Super excited to add to my project.',
    handle: '@helloyeddie',
    imageSrc: '/static/images/people/9.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3710240',
  },

  {
    name: 'Muhammad Ali Zulfaqar',
    text: "Thank you for the amazing idea, now i can make my own landing page with no hassle and in an instant. I will explore and start using it for my own startup. Thank you again, you're great people",
    handle: '@muhammad_ali_zulfaqar',
    imageSrc: '/static/images/people/10.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3712529',
  },

  {
    name: 'Ricardo Hagar',
    text: 'Awesome Launch! And thanks for making this open-source, as someone that excels at backend rather than frontend this can be useful for me in the future!',
    handle: '@ricardohagar',
    imageSrc: '/static/images/people/11.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3648828',
  },

  {
    name: 'Max',
    text: "That's gonna be really useful for someone like me who is really bad in design:)",
    handle: '@maxrush',
    imageSrc: '/static/images/people/13.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3709033',
  },

  {
    name: 'Blank',
    text: 'Wow, this is super cool, Dan! Love the idea of Page UI making it easier for us to create unique landing pages. The integration with Shadcn UI and TailwindCSS sounds like a game-changer! Your work is always so polished and inspiring, it\'s awesome to see you pushing boundaries with fresh concepts like "steal this template." I think making it open source is a brilliant move – it really encourages collaboration! Can\'t wait to see what else you come up with!',
    handle: '@blankwebdev',
    imageSrc: '/static/images/people/14.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3708955',
  },

  {
    name: 'Justin Kroeger',
    text: 'I’ve been looking for a shadcn/ui style library for landing pages this is awesome Dan!',
    handle: '@_justindev',
    imageSrc: '/static/images/people/16.webp',
    url: 'https://twitter.com/_justindev/status/1786410977342132531',
  },

  {
    name: 'Akash Pandey',
    text: 'Just checked it out, the dark mode and responsive design are impressive. Looking forward to the upcoming templates',
    handle: '@heyakash_design',
    imageSrc: '/static/images/people/17.webp',
    url: 'https://twitter.com/heyakash_design/status/1786440599878369753',
  },

  {
    name: 'Zenda',
    text: 'Beautiful UI! Free and open source is very great! Thank you for your dedication.',
    handle: '@zenda1122',
    imageSrc: '/static/images/people/12.webp',
    url: 'https://www.producthunt.com/posts/page-ui-2?comment=3708898',
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
        videoSrc="https://cache.shipixen.com/page-ui/36-landing-page-fonts-templates-and-themes.mp4"
        autoPlay={true}
        loop
        leadingComponent={
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.producthunt.com/posts/page-ui-2"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-all"
            >
              <LandingProductHuntAward place={1} size="small" />
            </a>

            <a
              href="https://www.producthunt.com/posts/page-ui-2"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-all hidden sm:block"
            >
              <LandingProductHuntAward
                place={'Developer Tools'}
                title="#1 Product of the week"
                placeClassName="px-3 !text-sm"
                size="small"
              />
            </a>
          </div>
        }
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

      <section className="mt-12 w-full bg-white dark:bg-black/70 flex items-center justify-center p-4 md:p-6 gap-6">
        <section className={'ultrawide-container gap-6'}>
          <div className="flex flex-col max-w-3xl">
            <h2 className="text-2xl md:text-4xl leading-snug font-bold">
              Inspired by the best
            </h2>

            <p className="text-sm my-4 max-w-2xl">
              Designing a website is hard. Making a sale is hard. We've spent
              months painstakingly analyzing the most successful SaaS landing
              pages to create{' '}
              <span className="fancy-text-purple font-semibold">
                templates that convert
              </span>{' '}
              ― copy & paste any section in your app.
            </p>

            <a
              className="relative z-10 flex items-center gap-2 text-purple-600 dark:text-purple-300 transition-all hover:text-purple-800 dark:hover:text-purple-200"
              href="/demo/landing-page-templates"
            >
              <SquareArrowOutUpRightIcon className="w-4 h-4" />
              <span className="text-sm">See all templates</span>
            </a>
          </div>
        </section>
      </section>

      <div className="w-full relative flex flex-col items-center gap-12 py-12">
        <section
          className={'ultrawide-container flex flex-col gap-16 ml-8 md:ml-0'}
        >
          <TemplateListItem
            name="Gnomie AI"
            description="A landing page template for a B2C AI SaaS app, featuring carousel examples and product tours."
            imageUrls={[
              '/static/images/shipixen/templates/demo/gnomie-1.webp',
              '/static/images/shipixen/templates/demo/gnomie-2.webp',
              '/static/images/shipixen/templates/demo/gnomie-3.webp',
            ]}
            tags={['AI', 'SaaS', 'carousel', 'product tour', 'B2C']}
            href="https://shipixen.com/demo/landing-page-templates/template/gnomie-ai"
            isNew
          />

          <TemplateListItem
            name="Specta"
            description="A landing page template for a creator platform, featuring a marquee section and a showcase section."
            imageUrls={[
              '/static/images/shipixen/templates/demo/specta-1.jpg',
              '/static/images/shipixen/templates/demo/specta-2.jpg',
              '/static/images/shipixen/templates/demo/specta-3.jpg',
            ]}
            tags={['creator', 'marquee', 'SaaS', 'video', 'playful']}
            href="https://shipixen.com/demo/landing-page-templates/template/specta"
          />

          <TemplateListItem
            name="Minimum Via"
            description="A landing page template for a minimalistic product, or productized agency. Uses text and minimal colors to create a clean look."
            imageUrls={[
              '/static/images/shipixen/templates/demo/minimum-via-1.jpg',
              '/static/images/shipixen/templates/demo/minimum-via-2.jpg',
              '/static/images/shipixen/templates/demo/minimum-via-3.jpg',
            ]}
            tags={['text', 'agency', 'SaaS', 'minimal', 'clean', 'simple']}
            href="https://shipixen.com/demo/landing-page-templates/template/minimum-via"
          />
        </section>

        <div
          className={
            'pointer-events-none z-20 absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-gray-100 via-gray-100/40 dark:from-gray-950 dark:via-gray-950/60'
          }
        />

        <div className="relative z-30">
          <Button asChild>
            <Link href="/demo/landing-page-templates">See all templates</Link>
          </Button>
        </div>
      </div>

      <LandingProductVideoFeature
        title="Learn by example"
        descriptionComponent={
          <>
            <p>
              Page UI documentation has hundreds of examples that you can copy
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
        videoSrc="https://cache.shipixen.com/page-ui/37-new-landing-page-documentation.mp4"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
        autoPlay={false}
      />

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
