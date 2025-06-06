import Image from '@/components/shared/Image';
import Link from 'next/link';
import { clsx } from 'clsx';

export interface BlogPost {
  path?: string;
  basePath?: string;
  slug?: string;
  date: string;
  title: string;
  summary?: string;
  tags?: string[] | { url: string; text: string }[];
  images?: string[];
  readingTime?: number | string;
  author?: {
    name?: string;
    avatar?: string;
  };
}

/**
 * This component displays a single blog post card.
 * It's meant to be used inside a blog list component, but can be used as a standalone component as well.
 */
export const LandingBlogPost = ({
  post,
  imagePosition = 'right',
}: {
  post: BlogPost;
  imagePosition?: 'left' | 'center' | 'right';
}) => {
  const {
    path,
    basePath = '/blog',
    slug,
    date,
    title,
    summary,
    tags,
    images,
    readingTime,
    author,
  } = post;
  const firstImage = images?.[0];

  const isHorizontalLayout =
    imagePosition === 'left' || imagePosition === 'right';

  return (
    <div
      className={clsx(
        'flex group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800',
        isHorizontalLayout ? 'flex-col-reverse md:flex-row' : 'flex-col',
      )}
    >
      {firstImage && (
        <div
          className={clsx(
            'relative overflow-hidden',
            imagePosition === 'center' && 'w-full h-48',
            imagePosition === 'left' && 'w-full h-40 md:w-1/3 md:h-auto',
            imagePosition === 'right' &&
              'w-full h-40 md:w-1/3 md:h-auto order-last',
          )}
        >
          <Link href={path || `${basePath}/${slug}`}>
            <Image
              src={firstImage}
              alt={title || 'Blog post image'}
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-500"
            />
          </Link>
        </div>
      )}

      <div
        className={clsx(
          'relative flex flex-col gap-4 p-6',
          isHorizontalLayout && 'flex-1',
        )}
      >
        <Link
          href={path || `${basePath}/${slug}`}
          className="absolute w-full h-full top-0 left-0 opacity-0"
        >
          Open post
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {author?.avatar && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={author.avatar}
                  alt={author.name || 'Author'}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {author?.name ? (
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {author.name}
              </span>
            ) : null}
          </div>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </time>
        </div>

        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {title}
        </h3>

        {summary && (
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
            {summary}
          </p>
        )}

        <div className="flex flex-wrap justify-between gap-4 mt-auto pt-4">
          {readingTime && (
            <span className="flex-shrink-0 text-sm text-gray-500 dark:text-gray-400 py-0.5">
              {readingTime} {typeof readingTime === 'number' ? 'min read' : ''}
            </span>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              {tags.map((tag, index) => {
                if (typeof tag === 'string') {
                  return (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  );
                } else {
                  return (
                    <Link
                      href={tag.url}
                      key={index}
                      className="relative z-10 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {tag.text}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
