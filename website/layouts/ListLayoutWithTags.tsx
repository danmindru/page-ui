/* eslint-disable jsx-a11y/anchor-is-valid */
'use client';

import { usePathname } from 'next/navigation';
import { slug } from 'github-slugger';
import { formatDate } from '@shipixen/pliny/utils/formatDate';
import { CoreContent } from '@shipixen/pliny/utils/contentlayer';
import type { Blog } from 'shipixen-contentlayer/generated';
import Link from '@/components/shared/Link';
import Tag from '@/components/blog/Tag';
import { siteConfig } from '@/data/config/site.settings';
import tagData from 'app/tag-data.json';
import SectionContainer from '@/components/shared/SectionContainer';
import Image from 'next/image';

const BLOG_URL = siteConfig.blogPath ? `/${siteConfig.blogPath}` : '/';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[];
  title: string;
  initialDisplayPosts?: CoreContent<Blog>[];
  pagination?: PaginationProps;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        <span>
          {currentPage} of {totalPages} pages
        </span>

        <div className="flex gap-8">
          {prevPage && (
            <Link
              href={
                currentPage - 1 === 1
                  ? `/${basePath}/`
                  : `/${basePath}/page/${currentPage - 1}`
              }
              rel="prev"
              className="font-semibold text-primary-500 hover:text-primary-700 transition-colors text-base"
            >
              ◀ Previous
            </Link>
          )}

          {nextPage && (
            <Link
              href={`/${basePath}/page/${currentPage + 1}`}
              rel="next"
              className="font-semibold text-primary-500 hover:text-primary-700 transition-colors text-base"
            >
              Next ▶
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname();
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  if (displayPosts.length === 0) {
    return (
      <div className="flex flex-col gap-1 p-6 mb-10">
        <h2 className="text-4xl">No posts found</h2>
        <p>Please check back later!</p>
      </div>
    );
  }

  return (
    <>
      <SectionContainer type="ultrawide" className="fancy-overlay px-4 md:px-6">
        <div className="flex sm:gap-12">
          <div className="w-full">
            <div className="pb-6">
              <h1 className="text-4xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                {title}
              </h1>
            </div>

            <ul className="flex flex-col w-full gap-4">
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags, images } = post;
                const firstImage = images?.[0];

                return (
                  <li
                    key={path}
                    className="flex md:bg-white dark:md:bg-black rounded-md overflow-hidden relative md:shadow-sm md:hover:shadow-xl dark:md:hover:bg-slate-800 transition-all"
                  >
                    {firstImage ? (
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
            {pagination && pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
              />
            )}
          </div>

          <div className="hidden max-h-screen h-full sm:flex flex-wrap min-w-[280px] max-w-[280px] overflow-auto">
            <div className="py-4 px-6">
              {pathname.startsWith(BLOG_URL) ? (
                <h3 className="font-bold uppercase text-xl">Filter by topic</h3>
              ) : (
                <Link
                  href={BLOG_URL}
                  className="font-bold uppercase text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500"
                >
                  Filter by topic
                </Link>
              )}
              <ul className="flex flex-col gap-2 mt-4">
                {sortedTags.map((t) => {
                  return (
                    <li key={t}>
                      {pathname.split('/tags/')[1] === slug(t) ? (
                        <h3 className="inline-block transition-all uppercase text-sm font-bold text-primary-500">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="inline-block translate-x-0 transition-all  uppercase text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
