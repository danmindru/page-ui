import ActiveLink from '@/components/shared/ActiveLink';
import { cn } from '@/lib/utils';

export const LandingPageComponentsNav = ({
  className,
}: {
  className?: string;
}) => {
  const links = [
    {
      href: '/docs/landing-page-components/band',
      label: 'Band',
    },
    {
      href: '/docs/landing-page-components/discount',
      label: 'Discount',
    },
    {
      href: '/docs/landing-page-components/faq',
      label: 'Faq',
    },
    {
      href: '/docs/landing-page-components/faq-collapsible',
      label: 'Faq Collapsible',
    },
    {
      href: '/docs/landing-page-components/feature-key-points',
      label: 'Feature Key Points',
    },
    {
      href: '/docs/landing-page-components/feature-list',
      label: 'Feature List',
    },
    {
      href: '/docs/landing-page-components/feature',
      label: 'Feature',
    },
    {
      href: '/docs/landing-page-components/marquee',
      label: 'Marquee',
    },
    {
      href: '/docs/landing-page-components/primary-image-cta',
      label: 'Primary Image Cta',
    },
    {
      href: '/docs/landing-page-components/primary-text-cta',
      label: 'Primary Text Cta',
    },
    {
      href: '/docs/landing-page-components/product-feature',
      label: 'Product Feature',
    },
    {
      href: '/docs/landing-page-components/product-video-feature',
      label: 'Product Video Feature',
    },
    {
      href: '/docs/landing-page-components/product-features-grid',
      label: 'Product Features Grid',
    },
    {
      href: '/docs/landing-page-components/product-tour',
      label: 'Product Tour',
    },
    {
      href: '/docs/landing-page-components/product-hunt-award',
      label: 'Product Hunt Award',
    },
    {
      href: '/docs/landing-page-components/rating',
      label: 'Rating',
    },
    {
      href: '/docs/landing-page-components/sale-cta',
      label: 'Sale Cta',
    },
    {
      href: '/docs/landing-page-components/showcase',
      label: 'Showcase',
    },
    {
      href: '/docs/landing-page-components/social-proof',
      label: 'Social Proof',
    },
    {
      href: '/docs/landing-page-components/social-proof-band',
      label: 'Social Proof Band',
    },
    {
      href: '/docs/landing-page-components/social-proof-band-item',
      label: 'Social Proof Band Item',
    },
    {
      href: '/docs/landing-page-components/testimonial-grid',
      label: 'Testimonial Grid',
    },
    {
      href: '/docs/landing-page-components/testimonial-inline',
      label: 'Testimonial Inline',
    },
    {
      href: '/docs/landing-page-components/testimonial-inline-item',
      label: 'Testimonial Inline Item',
    },
    {
      href: '/docs/landing-page-components/testimonial-list',
      label: 'Testimonial List',
    },
    {
      href: '/docs/landing-page-components/testimonial',
      label: 'Testimonial',
    },
  ];

  return (
    <ul className={cn('flex flex-col text-sm', className)}>
      {links.map(({ href, label }) => (
        <li key={label}>
          <ActiveLink activeClassName="text-primary-500" href={href + '#main'}>
            <span>{label}</span>
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
};
