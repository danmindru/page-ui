import Link from '@/components/shared/Link';
import Tag from '@/components/blog/Tag';
import { siteConfig } from '@/data/config/site.settings';
import { formatDate } from '@shipixen/pliny/utils/formatDate';
import NewsletterForm from '@shipixen/pliny/ui/NewsletterForm';
import { sortPosts, allCoreContent } from '@shipixen/pliny/utils/contentlayer';
import { allBlogs } from 'shipixen-contentlayer/generated';
import Image from 'next/image';

const MAX_DISPLAY = 5;

export default function LatestArticles({
  numberOfPosts = MAX_DISPLAY,
  showImage = true,
}: {
  numberOfPosts?: number;
  showImage?: boolean;
}) {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl">
          From the docs
        </h2>

        <ul className="flex flex-col gap-4">
          {!posts.length && 'No pages found.'}
          {posts.slice(0, numberOfPosts).map((post) => {
            const { path, slug, date, title, summary, tags, images } = post;
            const firstImage = images?.[0];

            return (
              <li
                key={slug}
                className="flex md:bg-white dark:md:bg-black rounded-md overflow-hidden relative md:shadow-sm md:hover:shadow-xl dark:md:hover:bg-slate-800 transition-all"
              >
                {showImage && firstImage ? (
                  <div className="hidden lg:flex relative w-52 shrink-0 h-auto">
                    <Image
                      src={firstImage}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 80vw, 100vw"
                    />
                  </div>
                ) : (
                  ''
                )}

                <article className="flex flex-col gap-2 py-5 md:p-8">
                  <Link
                    href={`/${path}`}
                    className="text-gray-900 dark:text-gray-100 absolute left-0 top-0 w-full h-full"
                  >
                    <span className="sr-only">Read more about {title}</span>
                  </Link>

                  <div className="space-y-3">
                    <div>
                      <h2 className="text-3xl leading-8 tracking-tight">
                        {title}
                      </h2>

                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>
                            {formatDate(date, siteConfig.locale)}
                          </time>
                        </dd>
                      </dl>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>

                  <div className="flex flex-wrap relative">
                    {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="mt-12 flex text-base font-medium leading-6">
          <Link
            href={siteConfig.allArticlesPath}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="See more"
          >
            See more &rarr;
          </Link>
        </div>
      )}

      {siteConfig.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  );
}
