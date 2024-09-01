import { LandingRating } from '@/components/landing/rating/LandingRating';
import { LandingAvatar } from '@/components/landing/social-proof/LandingAvatar';
import { clsx } from 'clsx';

/**
 * Use this component to display a single testimonial inline. Use this to highlight short customer testimonials or reviews. are meant as short validation and are usually support for a primary or secondary Call to action.
 *
 * Can be used with the `LandingTestimonialInline` component.
 */
export const LandingTestimonialInlineItem = ({
  className,
  imageSrc,
  text,
  name,
  suffix,
}: {
  className?: string;
  imageSrc?: string;
  text: string;
  name: string;
  suffix?: string;
}) => {
  return (
    <div className={clsx('flex flex-col lg:text-center', className)}>
      <div className="flex gap-2 items-center lg:justify-center">
        {imageSrc ? (
          <div className="opacity-90 flex-shrink-0">
            <LandingAvatar
              imageSrc={imageSrc}
              name={name}
              size="large"
              className="rounded-full border-2 border-opacity-75"
            />
          </div>
        ) : null}

        <div className="flex flex-col lg:items-center text-xs truncate">
          <LandingRating rating={5} />

          {text ? (
            <p className="w-full mt-2 text-gray-500 truncate" title={text}>
              &quot;{text}&quot;
            </p>
          ) : null}

          <p
            className="w-full text-gray-500 truncate"
            title={`${name}${suffix ? `, ${suffix}` : ''}`}
          >
            <b>{name}</b>
            {suffix ? <>, {suffix}</> : null}
          </p>
        </div>
      </div>
    </div>
  );
};
