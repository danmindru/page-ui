import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';

export const DemoReadMoreWrapper = ({
  className,
  children,
  size,
}: {
  className?: string;
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
}) => {
  return (
    <LandingTestimonialReadMoreWrapper size={size} className={className}>
      {children}
    </LandingTestimonialReadMoreWrapper>
  );
};
