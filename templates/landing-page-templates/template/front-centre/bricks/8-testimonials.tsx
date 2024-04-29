import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';

export default function Component() {
  const testimonialItems = [
    {
      name: 'Mathew',
      text: 'After using this, I cannot imagine going back to the old way of doing things.',
      handle: '@heymatt_oo',
      imageSrc: 'https://picsum.photos/100/100.webp?random=2',
    },
    {
      name: 'Joshua',
      text: 'Perfect for my use case',
      handle: '@joshua',
      imageSrc: 'https://picsum.photos/100/100.webp?random=3',
    },
    {
      name: 'Parl Coppa',
      text: 'This is the best thing since sliced bread. I cannot believe I did not think of it myself.',
      handle: '@coppalipse',
      imageSrc: 'https://picsum.photos/100/100.webp?random=1',
      featured: true, // Feature this testimonial
    },
    {
      name: 'Mandy',
      text: 'Excellent product!',
      handle: '@mandy',
      imageSrc: 'https://picsum.photos/100/100.webp?random=4',
    },
    {
      name: 'Alex',
      text: 'Can easily recommend!',
      handle: '@alex',
      imageSrc: 'https://picsum.photos/100/100.webp?random=5',
    },
    {
      name: 'Sam',
      text: 'I am very happy with the results.',
      handle: '@sama',
      imageSrc: 'https://picsum.photos/100/100.webp?random=6',
    },
  ];

  return (
    <LandingTestimonialReadMoreWrapper size="md">
      <LandingTestimonialGrid
        title="Don't take it from us"
        description="See what 120k developers have to say about this product."
        testimonialItems={testimonialItems}
      />
    </LandingTestimonialReadMoreWrapper>
  );
}
