import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { formatDate } from '@shipixen/pliny/utils/formatDate';
import { CoreContent } from '@shipixen/pliny/utils/contentlayer';
import type { Blog } from 'shipixen-contentlayer/generated';
import Link from '@/components/shared/Link';
import PageTitle from '@/components/shared/PageTitle';
import Header from '@/components/shared/Header';
import SectionContainer from '@/components/shared/SectionContainer';
import { siteConfig } from '@/data/config/site.settings';
import ScrollTop from '@/components/shared/ScrollTop';

interface LayoutProps {
  className?: string;
  content: CoreContent<Blog>;
  children: ReactNode;
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
}

export default function PostLayout({
  content,
  next,
  prev,
  children,
  className,
}: LayoutProps) {
  const { path, slug, date, title } = content;

  return (
    <div className="flex flex-col w-full items-center">
      <Header />

      <SectionContainer type="wide" className={cn(className)}>
        <ScrollTop />
        <article>
          <div>
            <header>
              <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>
                        {formatDate(date, siteConfig.locale)}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
              </div>
            </header>
            <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                  {children}
                </div>
              </div>

              <footer>
                <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                  {prev && prev.path && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/${prev.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Previous post: ${prev.title}`}
                      >
                        &larr; {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && next.path && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/${next.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Next post: ${next.title}`}
                      >
                        {next.title} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </article>
      </SectionContainer>
    </div>
  );
}
