import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingSignupUrl = '#';

export const pricingFrequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Monthly', priceSuffix: '/month' },
  { id: '1', value: '2', label: 'Annually', priceSuffix: '/year' },
];

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '#',
    price: { 1: '$0', 2: '$0' },
    discountPrice: { 1: '', 2: '' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
  {
    name: 'Pro',
    id: 'tier-2',
    href: '#',
    discountPrice: { 1: '$3.99', 2: '$10.99' },
    price: { 1: '$4.99', 2: '$14.99' },
    description: 'When you grow, need more power and flexibility.',
    features: [
      'All in the free plan plus',
      'Customizable templates',
      'Integration with third-party apps',
    ],
    featured: false,
    highlighted: true,
    cta: 'Get started',
    soldOut: true,
  },
  {
    name: 'Scaler',
    id: 'tier-3',
    href: '#',
    price: { 1: '$14.99', 2: '$22.99' },
    discountPrice: { 1: '', 2: '' },
    description: 'When you grow, need more power and flexibility.',
    features: [
      'All in the pro plan plus',
      'Priority support',
      'Enterprise-grade security',
    ],
    featured: true,
    highlighted: false,
    cta: 'Get started',
  },
];
