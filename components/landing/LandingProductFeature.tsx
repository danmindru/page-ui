import clsx from 'clsx';
import Image from '@/components/shared/Image';
import { GlowBg } from '@/components/shared/ui/glow-bg';

/**
 * A component meant to be used in the landing page.
 * It displays a title, description and optionally, an image of a product's feature.
 *
 * The image could either be left, right or center (larger).
 * The image can either be shown in perspective or flat.
 * The section can have a background or not.
 */
export const LandingProductFeature = ({
  children,
  className,
  innerClassName,
  textClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  textPosition = 'left',
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
  imagePerspective = 'bottom',
  imageShadow = 'hard',
  imageClassName,
  zoomOnHover = true,
  minHeight = 350,
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  effectComponent,
  effectClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  textClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'center';
  imagePerspective?:
    | 'none'
    | 'left'
    | 'right'
    | 'bottom'
    | 'bottom-lg'
    | 'paper';
  imageShadow?: 'none' | 'soft' | 'hard';
  imageClassName?: string;
  zoomOnHover?: boolean;
  minHeight?: number;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  effectComponent?: React.ReactNode;
  effectClassName?: string;
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow || imagePerspective !== 'none'
          ? 'overflow-hidden'
          : '',
        imagePerspective === 'paper' ? 'md:pb-24' : '',
        className,
      )}
    >
      {effectComponent ? (
        <div className={clsx('absolute inset-0', effectClassName)}>
          {effectComponent}
        </div>
      ) : null}

      {imageSrc && withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
          <GlowBg
            className={clsx(
              'w-full lg:w-1/2 h-auto z-0 dark:opacity-50',
              imagePosition === 'center' ? 'top-5' : ' -top-1/3',
              imagePerspective === 'paper' ? 'opacity-70' : 'opacity-100',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'w-full p-6 flex flex-col items-center relative',
          imagePosition === 'center'
            ? 'container-narrow'
            : 'max-w-full container-wide grid gap-4 lg:grid-cols-2',
          innerClassName,
        )}
        style={{
          minHeight,
        }}
      >
        <div
          className={clsx(
            'w-full flex flex-col gap-4',
            imagePosition === 'left' && 'lg:col-start-2 lg:row-start-1',
            textPosition === 'center'
              ? 'md:max-w-lg xl:max-w-2xl items-center text-center'
              : 'items-start',
            textClassName,
          )}
        >
          {leadingComponent}

          {titleComponent || (title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              {title}
            </h2>
          ))}

          {descriptionComponent || (description && (
            <p className="mt-4 md:text-xl">{description}</p>
          ))}

          {children}
        </div>

        {imageSrc ? (
          <>
            {imagePosition === 'center' ? (
              <section className="w-full mt-auto pt-4 md:pt-6">
                <Image
                  className={clsx(
                    'w-full rounded-md overflow-hidden',
                    imageShadow === 'none' && '!shadow-none',
                    imageShadow === 'soft' && 'shadow-md',
                    imageShadow === 'hard' && 'hard-shadow',
                    imageClassName,
                  )}
                  src={imageSrc}
                  alt={imageAlt}
                  width={minHeight ? minHeight + 75 : 1000}
                  height={minHeight ? minHeight + 75 : 1000}
                />
              </section>
            ) : null}

            {imagePosition === 'left' || imagePosition === 'right' ? (
              <Image
                className={clsx(
                  'relative w-full rounded-md lg:scale-90',
                  zoomOnHover ? 'hover:scale-100 transition-all' : '',
                  imageShadow === 'none' && '!shadow-none',
                  imageShadow === 'soft' && 'shadow-md',
                  imageShadow === 'hard' && 'hard-shadow',
                  imagePosition === 'left' && 'lg:-left-6',
                  imagePosition === 'right' && 'lg:-right-6',
                  imagePerspective === 'left' && 'lg:perspective-left',
                  imagePerspective === 'right' && 'lg:perspective-right',
                  imagePerspective === 'bottom' && 'lg:perspective-bottom',
                  imagePerspective === 'bottom-lg' &&
                    'lg:perspective-bottom-lg',
                  imagePerspective === 'paper' && 'lg:perspective-paper',
                  imagePerspective === 'paper' && zoomOnHover
                    ? 'hover:scale-90 transition-all'
                    : '',
                  imagePerspective === 'none' ? 'my-4' : 'my-8',
                  imageClassName,
                )}
                alt={imageAlt}
                src={imageSrc}
                width={minHeight ? minHeight + 75 : 1000}
                height={minHeight ? minHeight + 75 : 1000}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
};
