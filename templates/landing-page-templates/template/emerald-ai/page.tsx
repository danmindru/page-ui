import { Metadata } from 'next';
import { EmeraldAi } from './emerald-ai';

const socialBanner = '/static/images/templatesOgImg.jpg';
const title =
  'Emerald AI Landing Page Template | Shipixen, Next.js & Shadcn UI';
const description =
  'A Next.js landing page template for an AI-powered product, featuring a video in the main CTA. Using React, TypeScript, Shadcn UI and Tailwind CSS.';

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

export default function Demo() {
  return (
    <div className="flex flex-col w-full">
      <EmeraldAi />
    </div>
  );
}
