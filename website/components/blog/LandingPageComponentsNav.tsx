import ActiveLink from '@/components/shared/ActiveLink';
import { cn } from '@/lib/utils';

export const LandingPageComponentsNav = ({
  className,
}: {
  className?: string;
}) => {
  const links = [
    {
      href: '/boilerplate-documentation/landing-page-components/band',
      label: 'Band',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/discount',
      label: 'Discount',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/faq',
      label: 'Faq',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/faq-collapsible',
      label: 'Faq Collapsible',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/feature-key-points',
      label: 'Feature Key Points',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/feature-list',
      label: 'Feature List',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/feature',
      label: 'Feature',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/primary-image-cta',
      label: 'Primary Image Cta',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/primary-text-cta',
      label: 'Primary Text Cta',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/product-feature',
      label: 'Product Feature',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/product-video-feature',
      label: 'Product Video Feature',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/product-features-grid',
      label: 'Product Features Grid',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/product-hunt-award',
      label: 'Product Hunt Award',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/rating',
      label: 'Rating',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/sale-cta',
      label: 'Sale Cta',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/social-proof',
      label: 'Social Proof',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/social-proof-band',
      label: 'Social Proof Band',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/social-proof-band-item',
      label: 'Social Proof Band Item',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/testimonial-grid',
      label: 'Testimonial Grid',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/testimonial-inline',
      label: 'Testimonial Inline',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/testimonial-inline-item',
      label: 'Testimonial Inline Item',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/testimonial-list',
      label: 'Testimonial List',
    },
    {
      href: '/boilerplate-documentation/landing-page-components/testimonial',
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
