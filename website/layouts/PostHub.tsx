import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { CoreContent } from '@shipixen/pliny/utils/contentlayer';
import type { Blog, Authors } from 'shipixen-contentlayer/generated';
import Link from '@/components/shared/Link';
import PageTitle from '@/components/shared/PageTitle';
import Tag from '@/components/blog/Tag';
import { siteConfig } from '@/data/config/site.settings';
import ScrollTop from '@/components/shared/ScrollTop';
import ActiveLink from '@/components/shared/ActiveLink';
import { TOC } from '@/components/blog/Toc';
import { ScrollRestoration } from '@/lib/ScrollRestoration';
import Header from '@/components/shared/Header';

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

interface LayoutProps {
  className?: string;
  content: CoreContent<Blog>;
  authorDetails: CoreContent<Authors>[];
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}

export default function PostHubLayout({
  className,
  content,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const { date, lastmod, title, tags, toc } = content;

  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      <div
        className={cn(
          'w-full fancy-overlay fancy-overlay--muted flex flex-col flex-wrap lg:flex-row justify-center',
          className,
        )}
      >
        <aside
          className="lg:sticky max-h-screen top-0 p-6 w-full lg:w-[14rem] 2xl:w-full xl:max-w-[12rem] 2xl:max-w-[16rem] overflow-auto pb-12"
          id="navigation"
        >
          <ul className="toc-list">
            <li>
              <ActiveLink
                href="/docs/overview"
                className="toc-link fancy-link fancy-link--no-underline"
                activeClassName="toc-active-link"
              >
                <span>Overview</span>
              </ActiveLink>
            </li>

            <li className="toc-separator"></li>

            <li className="toc-title">
              <h3>Docs</h3>
            </li>

            <li>
              <ActiveLink
                href="/docs/get-started"
                className="toc-link fancy-link fancy-link--no-underline"
                activeClassName="toc-active-link"
              >
                <span>Getting Started</span>
              </ActiveLink>
            </li>
          </ul>
        </aside>

        <article className="w-full lg:max-w-3xl !p-0 !m-0 shadow-lg">
          <div className="bg-white dark:bg-slate-900 lg:px-10 lg:py-4 divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <header className="px-6 pt-6 pb-6 lg:px-0" id="main">
              <div className="space-y-1">
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>

                <dl className="space-y-10">
                  {lastmod ? (
                    <div>
                      <dt className="sr-only">Updated on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={lastmod}>
                          <span className="font-light">Last updated</span>{' '}
                          {new Date(lastmod).toLocaleDateString(
                            siteConfig.locale,
                            postDateTemplate,
                          )}
                        </time>
                      </dd>
                    </div>
                  ) : (
                    <div>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          <span className="font-light">Published</span>{' '}
                          {new Date(date).toLocaleDateString(
                            siteConfig.locale,
                            postDateTemplate,
                          )}
                        </time>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </header>

            <div className="prose max-w-none px-6 pb-8 pt-10 lg:px-0 dark:prose-invert overflow-hidden">
              {children}
            </div>
          </div>

          <footer className="p-6">
            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
              {tags && (
                <div className="py-4 xl:py-8">
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Tags
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              {(next || prev) && (
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  {prev && prev.path && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Previous Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${prev.path}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && next.path && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Next Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${next.path}`}>{next.title}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex pt-4 xl:pt-8">
                <Link
                  href={siteConfig.allArticlesPath}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="More articles"
                >
                  More articles &rarr;
                </Link>
              </div>
            </div>
          </footer>
        </article>

        <aside className="relative xl:sticky top-0 p-6 w-full xl:max-w-[16rem] xl:max-h-screen flex-col items-center overflow-auto pb-12 lg:max-w-xl">
          <h2 className="font-semibold text-sm">Jump to section</h2>
          <TOC toc={toc} className={cn('toc-list wide-container !p-0 mt-4')} />
        </aside>

        <ScrollRestoration elementId="navigation" />
        <ScrollTop />
      </div>
    </div>
  );
}
