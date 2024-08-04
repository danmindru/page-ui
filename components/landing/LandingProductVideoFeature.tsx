import clsx from 'clsx';
import { VideoPlayer } from '@/components/shared/VideoPlayer';
import { GlowBg } from '@/components/shared/ui/glow-bg';

/**
 * A component meant to be used in the landing page.
 * It displays a title, description and video of a product's feature.
 *
 * The video could either be left, right or center (larger).
 * The section can have a background or not.
 */
export const LandingProductVideoFeature = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  textPosition = 'left',
  videoSrc,
  videoPoster,
  videoPosition = 'right',
  videoMaxWidth = 'none',
  autoPlay,
  muted = true,
  controls = false,
  loop = false,
  zoomOnHover = false,
  minHeight = 350,
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  videoSrc?: string;
  videoPoster?: string;
  videoPosition?: 'left' | 'right' | 'center';
  videoMaxWidth?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  zoomOnHover?: boolean;
  minHeight?: number;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
}) => {
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
        withBackgroundGlow ? 'overflow-hidden' : '',
        className,
      )}
    >
      <div
        className={clsx(
          'w-full p-6 flex flex-col items-center relative',
          videoPosition === 'center'
            ? 'container-narrow'
            : 'max-w-full container-ultrawide grid lg:grid-cols-12 gap-8 lg:gap-16',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
        style={{
          minHeight,
        }}
      >
        <div
          className={clsx(
            'flex flex-col gap-4 lg:col-span-5',
            videoPosition === 'left' && 'lg:col-start-8 lg:row-start-1',
            textPosition === 'center'
              ? 'md:max-w-lg items-center text-center'
              : 'items-start',
          )}
        >
          {title ? (
            <h2 className="text-4xl font-semibold leading-tight">{title}</h2>
          ) : (
            titleComponent
          )}

          {description ? (
            <p className="mt-4 md:text-xl">{description}</p>
          ) : (
            descriptionComponent
          )}

          {children}
        </div>

        {withBackgroundGlow ? (
          <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
            <GlowBg
              className={clsx('w-full lg:w-1/2 h-auto z-0')}
              variant={backgroundGlowVariant}
            />
          </div>
        ) : null}

        {videoSrc ? (
          <>
            {videoPosition === 'center' ? (
              <section className="w-full mt-auto pt-6 md:pt-8">
                <VideoPlayer
                  className={clsx(
                    'w-full rounded-md lg:col-span-7',
                    zoomOnHover ? 'hover:scale-110 transition-all' : '',
                  )}
                  poster={videoPoster}
                  src={videoSrc}
                  autoPlay={autoPlay}
                  muted={muted}
                  controls={controls}
                  maxWidth={videoMaxWidth}
                  variant={variant}
                  loop={loop}
                />
              </section>
            ) : null}

            {videoPosition === 'left' || videoPosition === 'right' ? (
              <VideoPlayer
                className={clsx(
                  'w-full rounded-md lg:col-span-7',
                  zoomOnHover ? 'hover:scale-110 transition-all' : '',
                )}
                poster={videoPoster}
                src={videoSrc}
                autoPlay={autoPlay}
                muted={muted}
                controls={controls}
                maxWidth={videoMaxWidth}
                variant={variant}
                loop={loop}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
};
