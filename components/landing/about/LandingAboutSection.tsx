import clsx from 'clsx';
import Image from '@/components/shared/Image';
import { GlowBg } from '@/components/shared/ui/glow-bg';

/**
 * A component for the About Us section of the landing page.
 * Displays heading, description, and an image.
 */
export function LandingAboutSection({
  className,
  innerClassName,
  title = 'About Us',
  titleComponent,
  description,
  descriptionComponent,
  imageSrc = '/static/images/about-image.webp',
  imageAlt = 'About us image',
  textPosition = 'left',
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
}: {
  className?: string;
  innerClassName?: string;
  title?: string;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  textPosition?: 'center' | 'left';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
}) {
  return (
    <section
      className={clsx(
        'w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow ? 'relative overflow-hidden' : '',
        className,
      )}
    >
      {withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2 pointer-events-none">
          <GlowBg
            className={clsx(
              'w-full lg:w-1/2 h-auto z-0 dark:opacity-50 opacity-100',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'container-wide w-full p-6 flex flex-col items-center justify-center relative',
          innerClassName,
        )}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={clsx(
              'flex flex-col gap-4',
              textPosition === 'center'
                ? 'items-center text-center'
                : 'items-start',
            )}
          >
            {titleComponent || (title && (
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                {title}
              </h1>
            ))}

            {descriptionComponent || (description && (
              <p className="text-base md:text-lg max-w-xl mt-2 text-gray-700 dark:text-gray-300">
                {description}
              </p>
            ))}
          </div>

          <div className="w-full h-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
