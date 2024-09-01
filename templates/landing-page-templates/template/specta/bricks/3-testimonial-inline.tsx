import { LandingTestimonialInline } from '@/components/landing/testimonial/LandingTestimonialInline';
import { LandingTestimonialInlineItem } from '@/components/landing/testimonial/LandingTestimonialInlineItem';

export default function Component() {
  return (
    <LandingTestimonialInline>
      <LandingTestimonialInlineItem
        name="John Doe"
        text="I've already seen a tangible impact on engagement and growth"
        suffix="Marketing at Google"
      />

      <LandingTestimonialInlineItem
        name="Jane Doe"
        text="Best app on the market without a doubt"
      />

      <LandingTestimonialInlineItem
        name="Alice Doe"
        text="I've created twenty videos in two days without any issues"
        suffix="CEO of Instagram"
      />

      <LandingTestimonialInlineItem
        name="Guido Ross"
        text="I've been able to automate my entire workflow. 6/5 stars"
        suffix="DevOps at Meta"
      />
    </LandingTestimonialInline>
  );
}
