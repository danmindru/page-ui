import { Metadata } from 'next';
import { FrontCentre } from './front-centre';

const socialBanner = '/static/images/templatesOgImg.jpg';
const title =
  'Front Centre Landing Page Template | Shipixen, Next.js & Shadcn UI';
const description =
  'A Next.js landing page template for a learning platform, featuring a centered video beneath the fold. Using React, TypeScript, Shadcn UI and Tailwind CSS.';

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
    <div className="flex flex-col w-full not-prose">
      <FrontCentre />
    </div>
  );
}
