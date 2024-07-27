import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';

export default function Component() {
  const testimonialItems = [
    {
      name: 'Mathew',
      text: "Super simple onboarding, great UX, and an absolute joy to use ✨. I'm really happy that we've found Specta and will absolutely be recommending the product to our audience.",
      handle: '@heymatt_oo',
      imageSrc: 'https://picsum.photos/100/100.webp?random=2',
    },
    {
      name: 'Joshua',
      text: 'The setup was incredibly simple. It took less than 5 minutes to get started with creating videos. We were able to import existing footage as well, which is such an important feature to have.',
      handle: '@joshua',
      imageSrc: 'https://picsum.photos/100/100.webp?random=3',
    },
    {
      name: 'Parl Coppa',
      text: "I sent a link to all of my customers and I've had twenty video submissions in two days. It's obviously very easy to use, otherwise they wouldn't be flooding us with videos.",
      handle: '@coppalipse',
      imageSrc: 'https://picsum.photos/100/100.webp?random=1',
      featured: true, // Feature this testimonial
    },
    {
      name: 'Mandy',
      text: "HUGE fan of the Specta product and team. Less than a month into implementing Specta and I've already seen a tangible impact on engagement and growth by sharing more video content.",
      handle: '@mandy',
      imageSrc: 'https://picsum.photos/100/100.webp?random=4',
    },
    {
      name: 'Alex',
      text: 'I came across Specta a couple of weeks ago when I was googling alternatives to video editing tools. Setting it up was easy, and the widgets they provide are awesome!',
      handle: '@alex',
      imageSrc: 'https://picsum.photos/100/100.webp?random=5',
    },
    {
      name: 'Sam',
      text: 'We looked at several options to create videos from our content, before settling on Specta. What drew us to Specta was the great user interface and how easy the product was to use..',
      handle: '@sama',
      imageSrc: 'https://picsum.photos/100/100.webp?random=6',
    },
  ];

  return (
    <LandingTestimonialReadMoreWrapper size="md">
      <LandingTestimonialGrid
        title="Used by leading companies"
        description="25,000 of the SaaS companies, and freelancers are growing faster with Specta."
        testimonialItems={testimonialItems}
        withBackgroundGlow
        withBackground
      />
    </LandingTestimonialReadMoreWrapper>
  );
}
