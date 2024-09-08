import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';

export default function Component() {
  const testimonialItems = [
    {
      name: 'Emily Green',
      text: 'Gnomie transformed my backyard into a lush oasis. I can’t believe how easy it was!',
      handle: '@emilyplants',
      imageSrc: 'https://picsum.photos/100/100.webp?random=7',
    },
    {
      name: 'Michael Bloom',
      text: 'With Gnomie’s advice, my garden is thriving like never before.',
      handle: '@bloomingmichael',
      imageSrc: 'https://picsum.photos/100/100.webp?random=8',
    },
    {
      name: 'Sarah Ivy',
      text: 'This app is a gardener’s dream come true. My flowers have never looked better!',
      handle: '@sarahlovesplants',
      imageSrc: 'https://picsum.photos/100/100.webp?random=9',
      featured: true, // Feature this testimonial
    },
    {
      name: 'Jake Stone',
      text: 'I was a complete beginner, but Gnomie made it easy to start my first vegetable garden.',
      handle: '@jakestone',
      imageSrc: 'https://picsum.photos/100/100.webp?random=10',
    },
    {
      name: 'Lily Forrest',
      text: 'Highly recommend for anyone looking to enhance their outdoor space!',
      handle: '@lilyforrest',
      imageSrc: 'https://picsum.photos/100/100.webp?random=11',
    },
    {
      name: 'Chris Fields',
      text: 'Thanks to Gnomie, my yard is now the envy of the neighborhood.',
      handle: '@chrisfields',
      imageSrc: 'https://picsum.photos/100/100.webp?random=12',
    },
  ];

  return (
    <LandingTestimonialReadMoreWrapper size="md">
      <LandingTestimonialGrid
        title="Gardeners Love Gnomie"
        description="See what our community of 120k gardeners have to say about Gnomie."
        testimonialItems={testimonialItems}
      />
    </LandingTestimonialReadMoreWrapper>
  );
}
