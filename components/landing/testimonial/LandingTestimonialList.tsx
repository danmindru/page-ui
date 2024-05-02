import clsx from 'clsx';
import {
  LandingTestimonial,
  TestimonialItem,
} from '@/components/landing/testimonial/LandingTestimonial';

/**
 * Shows a list of testimonials with a title and description.
 */
export const LandingTestimonialListSection = ({
  className,
  containerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  testimonialItems,
  withBackground = false,
  variant = 'primary',
  withBackgroundGlow = false,
  backgroundGlowVariant = 'primary',
}: {
  className?: string;
  containerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  testimonialItems: TestimonialItem[];
  withBackground?: boolean;
  variant?: 'primary' | 'secondary';
  withBackgroundGlow?: boolean;
  backgroundGlowVariant?: 'primary' | 'secondary';
}) => {
  return (
    <section
      className={clsx(
        'w-full flex justify-center items-center py-12 lg:py-16 flex-col relative isolate',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow ? 'overflow-hidden' : '',
        className,
      )}
    >
      <div className="w-full p-6 max-w-full container-wide relative flex flex-col items-center">
        {title ? (
          <h2 className="text-center text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl lg:text-5xl">
            {title}
          </h2>
        ) : (
          titleComponent
        )}

        {description ? (
          <p className="mt-6 md:text-xl">{description}</p>
        ) : (
          descriptionComponent
        )}
      </div>

      {withBackgroundGlow ? (
        <>
          <div
            className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-25 blur-3xl pointer-events-none"
            aria-hidden="true"
          >
            <div
              className={clsx(
                'ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr',
                backgroundGlowVariant === 'primary'
                  ? 'from-primary-100 to-primary-200'
                  : '',
                backgroundGlowVariant === 'secondary'
                  ? 'from-secondary-100 to-secondary-200'
                  : '',
              )}
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-20 blur-3xl sm:pt-40 xl:justify-end pointer-events-none"
            aria-hidden="true"
          >
            <div
              className={clsx(
                'ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr xl:ml-0 xl:mr-[calc(50%-12rem)]',
                backgroundGlowVariant === 'primary'
                  ? 'from-primary-100 to-primary-200'
                  : '',
                backgroundGlowVariant === 'secondary'
                  ? 'from-secondary-100 to-secondary-200'
                  : '',
              )}
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </>
      ) : null}

      <section
        className={clsx(
          'w-full p-6 max-w-full container-wide relative grid grid-cols-12 gap-8 items-stretch',
          containerClassName,
        )}
      >
        {testimonialItems.map((testimonialItem, index) => (
          <LandingTestimonial
            key={index}
            name={testimonialItem.name}
            imageSrc={testimonialItem.imageSrc}
            handle={testimonialItem.handle}
            text={testimonialItem.text}
            url={testimonialItem.url}
            featured={testimonialItem.featured}
            className={clsx(
              'col-span-12',
              testimonialItem.size === 'full' ? 'md:col-span-12' : '',
              testimonialItem.size === 'half' ? 'md:col-span-6' : '',
              testimonialItem.size === 'third' ? 'md:col-span-4' : '',
            )}
          />
        ))}
      </section>
    </section>
  );
};
