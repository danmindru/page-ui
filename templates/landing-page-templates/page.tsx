import Header, { FixedMiniHeader } from '@/components/shared/Header';
import Image from 'next/image';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { ToolSelector } from '@/app/(tools)/tool-selector';
import { totalTemplates } from 'consts/stats';
import { GlowBg } from '@/components/shared/ui/glow-bg';

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

const TemplateItem = ({
  name,
  description,
  imageUrl,
  href,
  tags,
  comingSoon,
}: {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  tags: string[];
  comingSoon?: boolean;
}) => {
  return (
    <a
      className={cn(
        'w-full flex flex-col items-center justify-start bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm rounded-lg transition-all overflow-hidden group',
        comingSoon
          ? 'pointer-events-none'
          : 'hover:shadow-md hover:bg-gray-50 dark:hover:bg-slate-800',
      )}
      href={comingSoon ? '#' : href}
    >
      <div className="w-full relative">
        {!comingSoon ? (
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="w-full rounded-md group-hover:opacity-90 transition-opacity"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              Coming Soon
            </span>
          </div>
        )}
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

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay ultrawide-container !p-0">
      <section className="flex flex-col p-4 pt-24 lg:pt-6">
        <ToolSelector
          numberOfComponents={totalTemplates}
          title={'Landing Page Templates'}
          className="w-full justify-stretch"
          dropdownClassName="w-full justify-stretch"
          dropdownTriggerClassName="w-full p-4 lg:w-full text-left lg:text-left"
          headingClassName="text-left lg:text-left"
        />

        <div className="mt-6 p-6 lg:px-12 lg:py-16 rounded-md bg-white/60 dark:bg-black/60 relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl lg:text-5xl md:leading-14 max-w-xl">
            High-converting,
            <br />
            Responsive templates.
            <br /> Dark mode included.
          </h2>

          <p className="mt-4 max-w-lg">
            A set of pre-configured landing page component combinations that you
            can easily copy and paste into your own Next.js app.
          </p>

          <div className="hidden xl:block absolute bottom-0 -right-12">
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

          <GlowBg className="w-[700px] -bottom-[150px] -right-[100px] opacity-5 md:opacity-90" />
        </div>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <TemplateItem
            name="Emerald AI"
            description="A landing page template for an AI-powered product, featuring a video in the main CTA."
            imageUrl="/static/images/shipixen/templates/emerald-ai.webp"
            tags={['video', 'AI', 'SaaS', 'feature list']}
            href="/demo/landing-page-templates/template/emerald-ai"
          />

          <TemplateItem
            name="Minimum Via"
            description="A landing page template for a minimalistic product, or productized agency. Uses text and minimal colors to create a clean look."
            imageUrl="/static/images/shipixen/templates/minimum-via.webp"
            tags={['text', 'minimal', 'agency', 'SaaS']}
            href="/demo/landing-page-templates/template/minimum-via"
          />

          <TemplateItem
            name="Front Centre"
            description="A landing page template for a learning platform, featuring a centered video beneath the fold."
            imageUrl="/static/images/shipixen/templates/front-centre.webp"
            tags={['video', 'education', 'SaaS', 'feature grid', 'colorful']}
            href="/demo/landing-page-templates/template/front-centre"
          />

          <TemplateItem
            name="ScreenshotTwo"
            description="A landing page template for a developer tool, featuring inline testimonials and a two-column layout with screenshots."
            imageUrl="/static/images/shipixen/templates/screenshot-two.webp"
            tags={['image', 'developer', 'tool', 'SaaS', 'testimonials']}
            href="/demo/landing-page-templates/template/screenshot-two"
          />

          <TemplateItem
            name="Portrails"
            description="A landing page template for a B2C SaaS AI app, featuring image hero sections and extensive social proof."
            imageUrl="/static/images/shipixen/templates/portrails.webp"
            tags={['image', 'AI', 'SaaS', 'social proof']}
            href="/demo/landing-page-templates/template/portrails"
            comingSoon
          />

          <TemplateItem
            name="HoneyDew"
            description="A landing page template for a SaaS product, featuring landing page pricing and extensive feature descriptions."
            imageUrl="/static/images/shipixen/templates/honey-dew.webp"
            tags={['pricing', 'SaaS', 'feature list', 'feature grid']}
            href="/demo/landing-page-templates/template/honey-dew"
            comingSoon
          />
        </div>

        <div className="my-12 p-4 rounded-md bg-white dark:bg-black">
          <h2 className="fancy-text-purple">
            Open any template to see a live demo and easily copy sections with{' '}
            <span className="font-semibold">thief mode</span>.
          </h2>
        </div>
      </section>

      <FixedMiniHeader className="flex items-center justify-center" />
    </div>
  );
}
