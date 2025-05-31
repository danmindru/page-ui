import ActiveLink from '@/components/shared/ActiveLink';
import { cn } from '@/lib/utils';

export const LandingPageComponentsNav = ({
  className,
}: {
  className?: string;
}) => {
  const links = [
    {
      href: '/docs/landing-page-components/about',
      label: 'About',
    },
    {
      href: '/docs/landing-page-components/appstore-button',
      label: 'App Store Button',
      isNew: true,
    },
    {
      href: '/docs/landing-page-components/band',
      label: 'Band',
    },
    {
      href: '/docs/landing-page-components/bento-grid',
      label: 'Bento Grid',
    },
    {
      href: '/docs/landing-page-components/blog-list',
      label: 'Blog List',
    },
    {
      href: '/docs/landing-page-components/blog-post',
      label: 'Blog Post',
    },
    {
      href: '/docs/landing-page-components/primary-cta-effects',
      label: 'Cta Background Effects',
    },
    {
      href: '/docs/landing-page-components/primary-cta-text-effects',
      label: 'Cta Text Effects',
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
      href: '/docs/landing-page-components/footer',
      label: 'Footer',
    },
    {
      href: '/docs/landing-page-components/leading-pill',
      label: 'Leading Pills',
      isNew: true,
    },
    {
      href: '/docs/landing-page-components/marquee',
      label: 'Marquee',
    },
    {
      href: '/docs/landing-page-components/navigation',
      label: 'Navigation / Header',
    },
    {
      href: '/docs/landing-page-components/newsletter',
      label: 'Newsletter',
    },
    {
      href: '/docs/landing-page-components/pricing',
      label: 'Pricing',
    },
    {
      href: '/docs/landing-page-components/pricing-plan',
      label: 'Pricing Plan',
    },
    {
      href: '/docs/landing-page-components/pricing-comparison',
      label: 'Pricing Comparison',
    },
    {
      href: '/docs/landing-page-components/primary-image-cta',
      label: 'Primary Image Cta',
    },
    {
      href: '/docs/landing-page-components/primary-video-cta',
      label: 'Primary Video Cta',
    },
    {
      href: '/docs/landing-page-components/primary-text-cta',
      label: 'Primary Text Cta',
    },
    {
      href: '/docs/landing-page-components/problem-agitator',
      label: 'Problem Agitator',
    },
    {
      href: '/docs/landing-page-components/problem-solution',
      label: 'Problem Solution',
    },
    {
      href: '/docs/landing-page-components/product-card',
      label: 'Product Card',
      isNew: true,
    },
    {
      href: '/docs/landing-page-components/product-feature',
      label: 'Product Feature',
    },
    {
      href: '/docs/landing-page-components/product-steps',
      label: 'Product Steps',
      isNew: true,
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
      href: '/docs/landing-page-components/stats',
      label: 'Stats',
    },
    {
      href: '/docs/landing-page-components/team',
      label: 'Team',
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
    <ul className={cn('flex flex-col text-[13px]', className)}>
      {links.map(({ href, label, isNew }) => (
        <li key={label}>
          <ActiveLink activeClassName="text-primary-500" href={href + '#main'}>
            <span className="flex items-center">
              {label}

              {isNew ? (
                <span className="ml-2 px-1.5 py-0.5 rounded-md text-[0.6rem] font-semibold bg-primary-500 text-white">
                  New
                </span>
              ) : null}
            </span>
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
};
