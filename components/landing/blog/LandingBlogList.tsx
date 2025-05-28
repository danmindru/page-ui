import { Children, ReactNode, ReactElement, cloneElement } from 'react';
import { clsx } from 'clsx';
import { LandingBlogPost } from '@/components/landing/blog/LandingBlogPost';

type Child = ReactElement<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * A blog list component displays a responsive grid of blog posts.
 */
export const LandingBlogList = ({
  children,
  title,
  titleComponent,
  description,
  descriptionComponent,
  className,
  variant = 'primary',
  withBackground = false,
  withBackgroundGlow = false,
  backgroundGlowVariant = 'primary',
  textPosition = 'left',
  display = 'list',
}: {
  children: ReactNode;
  title?: string;
  titleComponent?: ReactNode;
  description?: string;
  descriptionComponent?: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  backgroundGlowVariant?: 'primary' | 'secondary';
  textPosition?: 'center' | 'left';
  display?: 'grid' | 'list';
}) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (!child) {
      return null;
    }

    if (typeof child !== 'object') {
      return child;
    }

    const reactChild = child as Child;
    const reactChildType = reactChild?.type;

    return cloneElement(reactChild, {
      className: '!p-0 rounded-xl'.concat(
        variant === 'primary' ? ' fancy-glass' : ' fancy-glass-contrast',
      ),
      minHeight: 0,
      innerClassName: 'p-4 lg:p-10 m-0 lg:m-0 h-full'.concat(
        variant === 'primary'
          ? ' bg-primary-100/20 dark:bg-primary-900/10'
          : ' bg-secondary-100/20 dark:bg-secondary-900/10',
      ),
      ...(reactChildType === LandingBlogPost
        ? { imagePosition: display === 'grid' ? 'center' : 'right' }
        : {}),
    });
  });

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
          <div
            className={clsx(
              'w-full h-auto z-0 dark:opacity-50 opacity-100 bg-gradient-to-r',
              backgroundGlowVariant === 'primary'
                ? 'from-primary-100/5 via-primary-100/60 to-primary-100/5'
                : 'from-secondary-100/5 via-secondary-100/60 to-secondary-100/5',
            )}
          />
        </div>
      ) : null}

      <div className="container-wide w-full px-6 flex flex-col items-center relative">
        {(title || titleComponent) && (
          <div
            className={clsx(
              'w-full flex flex-col gap-4 mb-8',
              textPosition === 'center'
                ? 'items-center text-center'
                : 'items-start text-left',
            )}
          >
            {title ? (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                {title}
              </h2>
            ) : (
              titleComponent
            )}

            {description ? (
              <p className="md:text-lg -mt-3">{description}</p>
            ) : (
              descriptionComponent
            )}
          </div>
        )}

        <div
          className={clsx(
            'gap-8 w-full',
            display === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2'
              : 'flex flex-col',
          )}
        >
          {childrenWithProps}
        </div>
      </div>
    </section>
  );
};
