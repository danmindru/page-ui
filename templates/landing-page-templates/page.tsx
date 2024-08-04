import Header, { FixedMiniHeader } from '@/components/shared/Header';
import Image from 'next/image';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { ToolSelector } from '@/app/(tools)/tool-selector';
import { totalTemplates } from 'consts/stats';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import Link from 'next/link';
import { SquareArrowOutUpRightIcon } from 'lucide-react';

const socialBanner = '/static/images/templatesOgImg.jpg';
const title = 'Landing Page Templates | Shipixen, Next.js & Shadcn UI';
const description =
  'Shipixen templates are a set of pre-configured landing page component combinations that you can easily copy and paste into your own Next.js app. Using React, TypeScript, Shadcn UI and Tailwind CSS.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: './',
    siteName: title,
    images: [socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
    images: [socialBanner],
  },
};

export const TemplateCardItem = ({
  name,
  description,
  imageUrls,
  href,
  tags,
  isComingSoon,
  isNew,
}: {
  name: string;
  description: string;
  imageUrls: string[];
  href: string;
  tags: string[];
  isComingSoon?: boolean;
  isNew?: boolean;
}) => {
  return (
    <a
      className={cn(
        'w-full flex flex-col items-center justify-start bg-white/90 dark:bg-indigo-950/90 border border-gray-200 dark:border-gray-800 shadow-sm rounded-lg transition-all duration-700 overflow-hidden group hover:bg-white dark:hover:bg-indigo-950',
        isComingSoon
          ? 'pointer-events-none'
          : 'hover:shadow-md hover:bg-gray-50 dark:hover:bg-slate-800',
      )}
      href={isComingSoon ? '#' : href}
    >
      <div className="w-full relative">
        {!isComingSoon ? (
          <Image
            src={imageUrls[0]}
            alt={name}
            width={300}
            height={300}
            className="w-full rounded-md group-hover:opacity-80 transition-opacity duration-700"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              Coming Soon
            </span>
          </div>
        )}

        {isNew ? (
          <span className="absolute top-0 right-0 bg-fuchsia-500 text-white text-xs font-semibold px-2 py-1 rounded-bl-md">
            New
          </span>
        ) : null}
      </div>

      <div className="p-6 w-full h-full flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-fuchsia-100 dark:bg-fuchsia-800 dark:text-white text-fuchsia-800 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export const TemplateListItem = ({
  name,
  description,
  imageUrls,
  href,
  tags,
  isComingSoon,
  isNew,
}: {
  name: string;
  description: string;
  imageUrls: string[];
  href: string;
  tags: string[];
  isComingSoon?: boolean;
  isNew?: boolean;
}) => {
  return (
    <div
      className={cn(
        'w-full flex relative z-0 gap-6 items-center justify-between overflow-auto no-scrollbar group',
        isComingSoon ? 'pointer-events-none' : '',
      )}
    >
      <div className="w-48 lg:w-72 flex-shrink-0 flex flex-col justify-center gap-2 self-stretch py-2">
        <h3 className="flex items-center font-semibold">
          <Link href={isComingSoon ? '#' : href}>
            {name}{' '}
            {isNew ? (
              <span className="bg-fuchsia-500 text-white text-xs font-semibold px-2 py-1 relative -top-[2px] rounded-md">
                New
              </span>
            ) : null}
            {isComingSoon ? (
              <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 relative -top-[2px] rounded-md">
                Coming Soon
              </span>
            ) : null}
          </Link>
        </h3>

        <p className="text-xs lg:text-sm">{description}</p>

        <hr className="my-3 w-10 h-0.5 bg-gray-500/30" />

        {!isComingSoon ? (
          <a
            href={href}
            className="relative z-10 flex items-center gap-2 text-purple-600 dark:text-purple-300 grayscale transition-all hover:grayscale-0"
          >
            <SquareArrowOutUpRightIcon className="w-4 h-4" />
            <span className="text-sm">View template</span>
          </a>
        ) : null}
      </div>

      {!isComingSoon ? (
        <a
          href={href}
          className="w-full lg:w-auto flex-shrink-0 flex flex-col relative"
        >
          <div className="flex gap-4">
            <Image
              src={imageUrls[0]}
              alt={name}
              width={175}
              height={175}
              className="w-auto h-44 lg:h-52 rounded-xl group-hover:scale-[0.98] transition-all duration-700"
            />

            <Image
              src={imageUrls[1]}
              alt={name}
              width={175}
              height={175}
              className="w-auto h-44 lg:h-52 rounded-xl group-hover:scale-[0.98] transition-all duration-700 delay-300"
            />

            <Image
              src={imageUrls[2]}
              alt={name}
              width={175}
              height={175}
              className="w-auto h-44 lg:h-52 rounded-xl group-hover:scale-[0.98] transition-all duration-700 delay-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 absolute bottom-2 right-2 z-10">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="opacity-0 shadow-md lg:group-hover:opacity-100 duration-500 transition-all text-[0.6rem] bg-fuchsia-50/90 dark:bg-fuchsia-900/90 backdrop-blur-sm px-2 py-1 rounded-md"
                style={{
                  transitionDelay: `${index * 20}ms`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ) : (
        <div className="hidden w-full sm:flex flex-col relative">
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-xl">
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              Coming Soon
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay ultrawide-container !p-0">
      <section className="flex flex-col w-full pt-24 lg:pt-6 lg:px-6 p-4">
        <ToolSelector
          numberOfComponents={totalTemplates}
          title={'Landing Page Templates'}
          className="w-full justify-stretch"
          dropdownClassName="w-full justify-stretch"
          dropdownTriggerClassName="w-full p-4 lg:w-full text-left lg:text-left"
          headingClassName="text-left lg:text-left"
        />

        <div className="flex flex-col gap-20 pl-4 py-20">
          <TemplateListItem
            name="Specta"
            description="A landing page template for a creator platform, featuring a marquee section and a showcase section."
            imageUrls={[
              '/static/images/shipixen/templates/demo/specta-1.jpg',
              '/static/images/shipixen/templates/demo/specta-2.jpg',
              '/static/images/shipixen/templates/demo/specta-3.jpg',
            ]}
            tags={['creator', 'marquee', 'SaaS', 'video', 'playful']}
            href="/demo/landing-page-templates/template/specta"
            isNew
          />

          <TemplateListItem
            name="Emerald AI"
            description="A landing page template for an AI-powered product, featuring a video in the main CTA."
            imageUrls={[
              '/static/images/shipixen/templates/demo/emerald-1.jpg',
              '/static/images/shipixen/templates/demo/emerald-2.jpg',
              '/static/images/shipixen/templates/demo/emerald-3.jpg',
            ]}
            tags={['video', 'AI', 'SaaS', 'feature list', 'faq', 'classic']}
            href="/demo/landing-page-templates/template/emerald-ai"
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
            href="/demo/landing-page-templates/template/minimum-via"
          />

          <TemplateListItem
            name="Front Centre"
            description="A landing page template for a learning platform, featuring a centered video beneath the fold."
            imageUrls={[
              '/static/images/shipixen/templates/demo/front-centre-1.jpg',
              '/static/images/shipixen/templates/demo/front-centre-2.jpg',
              '/static/images/shipixen/templates/demo/front-centre-3.jpg',
            ]}
            tags={['video', 'education', 'SaaS', 'feature grid', 'colorful']}
            href="/demo/landing-page-templates/template/front-centre"
          />

          <TemplateListItem
            name="ScreenshotTwo"
            description="A landing page template for a developer tool, featuring inline testimonials and a two-column layout with screenshots."
            imageUrls={[
              '/static/images/shipixen/templates/demo/screenshot-two-1.jpg',
              '/static/images/shipixen/templates/demo/screenshot-two-2.jpg',
              '/static/images/shipixen/templates/demo/screenshot-two-3.jpg',
            ]}
            tags={[
              'image',
              'developer',
              'devtool',
              'tool',
              'SaaS',
              'testimonials',
            ]}
            href="/demo/landing-page-templates/template/screenshot-two"
          />

          <TemplateListItem
            name="Portrails"
            description="A landing page template for a B2C SaaS AI app, featuring image hero sections and extensive social proof."
            imageUrls={['/static/images/shipixen/templates/portrails.webp']}
            tags={['image', 'AI', 'SaaS', 'social proof']}
            href="/demo/landing-page-templates/template/portrails"
            isComingSoon
          />

          <TemplateListItem
            name="HoneyDew"
            description="A landing page template for a SaaS product, featuring landing page pricing and extensive feature descriptions."
            imageUrls={['/static/images/shipixen/templates/honey-dew.webp']}
            tags={['pricing', 'SaaS', 'feature list', 'feature grid']}
            href="/demo/landing-page-templates/template/honey-dew"
            isComingSoon
          />
        </div>

        <div className="my-6 lg:mt-12 p-6 lg:px-12 lg:pt-16 rounded-md bg-white/90 dark:bg-black/60 relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-10 lg:leading-14 max-w-xl font-semibold tracking-tight">
            High-converting,
            <br />
            Responsive templates.
            <br /> Dark mode included.
          </h2>

          <p className="mt-4 max-w-lg">
            A set of pre-configured landing page component combinations that you
            can easily copy and paste into your own Next.js app.
          </p>

          <div className="hidden xl:block absolute bottom-0 -right-12 z-20">
            <Image
              src="/static/images/template-collection-light-wide.webp"
              alt="Landing page templates"
              width={830}
              height={481}
              className="h-80 w-auto dark:hidden"
            />

            <Image
              src="/static/images/template-collection-dark-wide.webp"
              alt="Landing page templates"
              width={830}
              height={481}
              className="h-80 w-auto hidden dark:block"
            />
          </div>

          <GlowBg className="w-[700px] -bottom-[150px] -right-[100px] opacity-5 md:opacity-30 z-10" />
        </div>

        <div className="my-6 px-12 py-6 rounded-md bg-white dark:bg-black">
          <h2 className="fancy-text-purple font-normal">
            Open any template to see a live demo and easily copy sections with{' '}
            <a
              href="/demo/landing-page-templates/template/specta"
              className="font-semibold underline underline-offset-2"
            >
              thief mode
            </a>
            .
          </h2>
        </div>
      </section>

      <FixedMiniHeader className="flex items-center justify-center" />
    </div>
  );
}
