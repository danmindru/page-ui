import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
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
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Fast, reliable, and secure
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          Easy to use, easy to love
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryTextCtaSection
        title="Landing page components that look good and convert well"
        description="Page UI is a set of landing page components & templates that you can copy & paste into you codebase. Made for React & built on top of Shadcn UI."
        textPosition="left"
        withBackground
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" asChild>
          <a href="/signup">Get Started</a>
        </Button>

        <Button size="xl" asChild variant="outlinePrimary">
          <a href="/read-more">Read more</a>
        </Button>

        <LandingDiscount
          discountValueText="30% off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

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
        />
      </LandingPrimaryTextCtaSection>

      <LandingProductFeature
        title="Craft with Ease"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Easy Copy & Paste',
                  description:
                    'Simply pick your preferred components and paste them into your React codebase. No complex instructions!',
                },
                {
                  title: 'Ready-to-Use Templates',
                  description:
                    'Access a variety of professionally designed templates, ready to enhance your landing page experience.',
                },
                {
                  title: 'React-Compatible',
                  description:
                    'All Page UI components are made for React, making integration into your projects a breeze.',
                },
              ]}
            />

            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>

            <p className="text-sm">
              7 day free trial, no credit card required.
            </p>
          </>
        }
        imageSrc="/static/images/backdrop-19.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
      />

      <LandingProductFeature
        title="Design Freedom"
        descriptionComponent={
          <>
            <p>
              Our set of components and templates opens a world of design
              possibilities. No restrictions, no limits, just creative freedom.
              Spanning a range of styles and functionalities, our plug-and-play
              components let you do more and design better - all without the
              stress.
            </p>

            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Based on Shadcn UI',
                  description:
                    'Page UI is built on top of the trusted Shadcn UI, offering robust, scalable, and reliable components.',
                },
                {
                  title: 'Hassle-Free Customization',
                  description:
                    'Easily tailor the look and feel of your landing pages to match your brand, no design experience required.',
                },
                {
                  title: 'Superior Load Times',
                  description:
                    'Our components prioritize speed and user experience. Expect faster load times and more satisfied visitors.',
                },
              ]}
            />

            <Button asChild variant="outlinePrimary">
              <a href="/read-more">Read more</a>
            </Button>

            <p className="text-sm">Get started with our free tier.</p>
          </>
        }
        imageSrc="/static/images/backdrop-20.webp"
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
      />

      <LandingProductFeature
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
      />

      <LandingBandSection
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
      />

      <LandingProductFeature
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
      />

      <LandingSaleCtaSection
        title="Join the Revolution"
        description="The clock is ticking and it is high time to step into the future with Page UI. Redefine your development process, enhance your productivity, and watch as the magic unfolds. Make the smart decision, make the Page UI decision."
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackgroundGlow
      />

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="From Code to Conversion: Real Stories from Real Users"
          description="These are the voices of the folks who have incorporated Page UI into their workflow, transforming the way they code and captivating their audience. But don't take our word for it. Read about their experiences straight from their keyboards."
          testimonialItems={[
            {
              name: 'Aaron P.',
              text: "With Page UI, my dev time has been halved, and I've seen a significant uptick in visitor engagement. It's like having a design team in my codebase.",
              handle: '@aaron_p.',
              imageSrc: 'https://picsum.photos/id/64/100/100',
            },
            {
              name: 'Bella Q.',
              text: 'Simplicity is the keyword here. I just copy, paste, and voila! Instant, high-conversion landing pages. New standard in my toolkit.',
              handle: '@bella_q.',
              imageSrc: 'https://picsum.photos/id/65/100/100',
            },
            {
              name: 'Carlos R.',
              text: 'React components made easy. With Page UI, I get beautiful landing pages that load fast and keep visitors around. Great service!',
              handle: '@carlos_r.',
              imageSrc: 'https://picsum.photos/id/669/100/100',
              featured: true,
            },
            {
              name: 'Diana S.',
              text: "Building on Shadcn UI was a delight, but add Page UI to the mix? Now that's a game changer. Clean code. Pretty pages. Couldn't ask for more.",
              handle: '@diana_s.',
              imageSrc: 'https://picsum.photos/id/829/100/100',
            },
            {
              name: 'Edward T.',
              text: "Page UI boosts my productivity sky high. The solution I've been seeking to improve the look of my landing pages without the extra headache.",
              handle: '@edward_t.',
              imageSrc: 'https://picsum.photos/100/100.webp?random=2',
            },
            {
              name: 'Felicia U.',
              text: "My favorite part? The copious template options. There's always a design that marries well with my project's feel and my users' needs. Page UI rocks!",
              handle: '@felicia_u.',
              imageSrc: 'https://picsum.photos/100/100.webp?random=3',
            },
          ]}
          withBackgroundGlow
          withBackground
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingFeatureList
        title="Discover Landing Page Success with Page UI"
        description="Experience a new way of building landing pages that aren’t just visually appealing, but are also high performing when it comes to conversion rate. Explore Page UI!"
        featureItems={[
          {
            title: 'Easy Copy & Paste',
            description:
              'Simply pick your preferred components and paste them into your React codebase. No complex instructions!',
            icon: <LayersIcon />,
          },
          {
            title: 'Ready-to-Use Templates',
            description:
              'Access a variety of professionally designed templates, ready to enhance your landing page experience.',
            icon: <LineChartIcon />,
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
              'Page UI is built on top of the trusted Shadcn UI, offering robust, scalable, and reliable components.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Hassle-Free Customization',
            description:
              'Easily tailor the look and feel of your landing pages to match your brand, no design experience required.',
            icon: <ZapIcon />,
          },
          {
            title: 'Superior Load Times',
            description:
              'Our components prioritize speed and user experience. Expect faster load times and more satisfied visitors.',
            icon: <ThumbsUpIcon />,
          },
          {
            title: 'SEO-Friendly',
            description:
              'Want to climb up search rankings? All our components are SEO-optimized, giving your pages the edge.',
            icon: <ChromeIcon />,
          },
          {
            title: 'Technical Support',
            description:
              "Receive prompt, professional support whenever you need it. We're here to ensure seamless integration.",
            icon: <FigmaIcon />,
          },
          {
            title: 'Regular Updates',
            description:
              'Stay ahead of industry advancements with free, regular updates to our component sets and templates.',
            icon: <FramerIcon />,
          },
        ]}
      />

      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions About Page UI"
        description="We've collected some of the most common queries about our robust landing page components and templates to help you better understand what Page UI offers."
        faqItems={[
          {
            question: "What makes Page UI's landing page components unique?",
            answer:
              'Our landing page components are meticulously crafted for React, ensuring seamless integration with your existing codebase. Furthermore, all our components are built on the cutting-edge Shadcn UI, which promises unbeatable performance and usability.',
          },
          {
            question: 'Do I need specific coding skills to use Page UI?',
            answer:
              "As long as you're familiar with basic React development, you'll find Page UI incredibly easy to use. We’ve designed our components to be plug-and-play, enabling you to incorporate them into your project with minimal hassle.",
          },
          {
            question: 'Can I customize Page UI templates to match my brand?',
            answer:
              'Absolutely. Page UI components and templates are designed to be fully customizable. This allows you to effortlessly establish a consistent look and feel across your landing pages that aligns with your brand identity.',
          },
        ]}
        withBackground
      />

      <section className="wide-container mt-12">
        <LatestArticles />
      </section>
    </div>
  );
}
