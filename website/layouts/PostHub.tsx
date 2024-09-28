import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ExternalLinkIcon } from 'lucide-react';
import { CoreContent } from '@shipixen/pliny/utils/contentlayer';
import type { Blog, Authors } from 'shipixen-contentlayer/generated';
import Link from '@/components/shared/Link';
import PageTitle from '@/components/shared/PageTitle';
import Tag from '@/components/shared/Tag';
import { siteConfig } from '@/data/config/site.settings';
import ScrollTop from '@/components/shared/ScrollTop';
import ActiveLink from '@/components/shared/ActiveLink';
import { TOC } from '@/components/blog/Toc';
import { ScrollRestoration } from '@/lib/ScrollRestoration';
import { LandingPageComponentsNav } from '@/components/blog/LandingPageComponentsNav';
import { TooltipProvider } from '@/components/shared/ui/tooltip';
import { ThemeAndFontSelector } from '@/components/bricks/theme/theme-and-font-selector';
import Header from '@/components/shared/Header';
import { InstallBlurb } from '@/components/blog/InstallBlurb';

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
  const {
    filePath,
    path,
    slug,
    date,
    lastmod,
    title,
    tags,
    toc,
    showThemeSelector,
  } = content;
  const basePath = path.split('/')[0];

  return (
    <TooltipProvider>
      <Header className="mb-0 lg:mb-0" />

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
                href="/docs/introduction#main"
                className="toc-link fancy-link fancy-link--no-underline"
                activeClassName="toc-active-link"
              >
                <span>Introduction</span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink
                href="/docs/installation#main"
                className="toc-link fancy-link fancy-link--no-underline"
                activeClassName="toc-active-link"
              >
                <span>Installation</span>
              </ActiveLink>
            </li>

            <li className="toc-separator"></li>

            <li className="toc-title">
              <h3>Components</h3>
            </li>

            <li>
              <ActiveLink
                href="/docs/landing-page-components#main"
                className="toc-link fancy-link fancy-link--no-underline"
                activeClassName="toc-active-link"
                activeChildren={
                  <LandingPageComponentsNav className="ml-3 mt-2" />
                }
                alwaysShowChildren
                exact={false}
              >
                <span>Landing Page Components</span>
              </ActiveLink>
            </li>

            <li>
              <a
                href="https://shipixen.com/demo/landing-page-component-examples"
                className="toc-link fancy-link fancy-link--no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Usage examples{' '}
                <ExternalLinkIcon className="w-3 h-3 inline-block ml-1" />
              </a>
            </li>

            <li>
              <a
                href="https://shipixen.com/demo/landing-page-templates"
                className="toc-link fancy-link fancy-link--no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Templates{' '}
                <ExternalLinkIcon className="w-3 h-3 inline-block ml-1" />
              </a>
            </li>

            {/* <li>
              <ActiveLink
                href="/docs/ui-library#main"
                className="toc-link fancy-link fancy-link--no-underline"
                activeClassName="toc-active-link"
              >
                <span>UI Library</span>
              </ActiveLink>
            </li>

             <li>
              <ActiveLink
                href="/docs/customize-fonts#main"
                className="toc-link fancy-link fancy-link--no-underline"
                activeClassName="toc-active-link"
              >
                <span>Customize fonts</span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink
                href="/docs/icon-library#main"
                className="toc-link fancy-link fancy-link--no-underline"
                activeClassName="toc-active-link"
              >
                <span>Icon Library</span>
              </ActiveLink>
            </li> */}
          </ul>
        </aside>

        <article className="w-full lg:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl !p-0 !m-0 shadow-lg">
          <div className="bg-white dark:bg-slate-900 lg:px-10 lg:py-4 divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <header className="px-6 pt-6 pb-6 lg:px-0" id="main">
              <div className="space-y-1">
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
              </div>
            </header>

            <div className="prose max-w-none px-6 pb-8 pt-10 lg:px-0 dark:prose-invert overflow-hidden">
              {children}
            </div>
          </div>

          <footer className="p-6">
            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
              <dl className="space-y-10 mb-8">
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

              {tags && (
                <div className="py-4 xl:py-8">
                  <h2 className="font-sans text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Tags
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  <a
                    href="/tags"
                    className="inline-block mt-2 text-xs capitalize font-medium text-primary-500 hover:text-primary-700 dark:hover:text-primary-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    All tags
                    <ExternalLinkIcon className="ml-1 inline-block w-3 h-3" />
                  </a>
                </div>
              )}
              {(next || prev) && (
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  {next && next.path && (
                    <div>
                      <h2 className="font-sans text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Next
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${next.path}`}>{next.title}</Link>
                      </div>
                    </div>
                  )}

                  {prev && prev.path && (
                    <div>
                      <h2 className="font-sans text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Previous
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${prev.path}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex pt-4 xl:pt-8">
                <Link
                  href={siteConfig.allArticlesPath}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Read more"
                >
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </footer>
        </article>

        <aside className="relative xl:sticky top-0 p-6 w-full xl:max-w-[15rem] xl:max-h-screen flex-col items-center overflow-auto pb-12 lg:max-w-xl">
          {showThemeSelector ? (
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">Change theme</p>

              <ThemeAndFontSelector
                showChangeThemeLabel={false}
                className="w-16 h-auto flex-grow-0 hidden lg:flex"
              />
            </div>
          ) : null}

          <h2 className="mt-8 font-semibold text-sm">Jump to section</h2>
          <TOC
            toc={toc}
            className={cn('toc-list w-full container-wide p-0 mt-4')}
          />

          <InstallBlurb className="my-6" />
        </aside>

        <ScrollRestoration elementId="navigation" />
        <ScrollTop />
      </div>
    </TooltipProvider>
  );
}
