import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  MailIcon,
  GithubIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
  BoxesIcon,
} from 'lucide-react';

import { siteConfig } from '@/data/config/site.settings';
import Link from './Link';
import ActiveLink from '@/components/shared/ActiveLink';
import { TwitterXIcon } from '@/components/icons/XIcon';
import { Button } from '@/components/shared/ui/button';
import { footerLinks } from '@/data/config/footerLinks';
import { TiktokIcon } from '@/components/icons/TiktokIcon';
import { ThreadsIcon } from '@/components/icons/ThreadsIcon';

export default function Footer({ className }: { className?: string }) {
  const columnNumber = footerLinks.filter(({ links }) => links.length).length;

  return (
    <footer
      className={cn(
        'mt-auto w-full bg-gradient-to-r from-white/5 via-white/60 to-white/5 backdrop-blur-sm dark:from-slate-700/5 dark:via-slate-700/60 dark:to-slate-700/5',
        className,
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-4 justify-between items-center w-full md:my-10 p-6',
        )}
      >
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 mt-12 w-full p-6 container-wide">
          <div className="w-full flex flex-col gap-4 md:max-w-xs lg:max-w-sm">
            <Link href="/" aria-label={siteConfig.title}>
              <div className="flex items-center gap-3 justify-start">
                <Image
                  src="/static/images/logo.png"
                  alt="Page UI logo"
                  height={40}
                  width={40}
                  className="group-hover:animate-wiggle "
                />

                <div className="hidden text-2xl font-semibold sm:flex h-full">
                  Page UI
                </div>
              </div>
            </Link>

            {typeof siteConfig.title === 'string' ? (
              <div className="text-lg font-semibold h-full">
                {siteConfig.title}
              </div>
            ) : null}

            {siteConfig.description ? (
              <p className="text-sm opacity-70">{siteConfig.description}</p>
            ) : null}

            <p className="text-xs">Copyright © {siteConfig.businessName}</p>
          </div>

          <div
            className={cn(
              'grid md:grid-cols-2 gap-12 items-start mt-6 md:mt-0',
              columnNumber === 3 ? 'md:grid-cols-3' : '',
              columnNumber === 4 ? 'lg:grid-cols-4' : '',
            )}
          >
            {footerLinks
              .filter(({ links }) => links.length)
              .map((column, index) => {
                return (
                  <ul
                    key={index}
                    className={cn(
                      'flex flex-col flex-wrap gap-4 justify-center w-full text-xs',
                    )}
                  >
                    {column.columnName ? (
                      <li>
                        <p className="text-slate-900 dark:text-slate-100 font-light text-base">
                          {column.columnName}
                        </p>
                      </li>
                    ) : null}

                    {column.links.map((link, index) => {
                      if (!link.href) {
                        return null;
                      }

                      if (link.href.endsWith('shipixen.com')) {
                        return (
                          <li key={index}>
                            <a
                              href={link.href}
                              className={'nav-link'}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="bg-clip-text bg-gradient-to-r text-transparent from-primary-400 to-secondary-300">
                                {link.title}
                              </span>
                            </a>
                          </li>
                        );
                      }

                      return (
                        <li key={index}>
                          <ActiveLink
                            href={link.href}
                            className={'nav-link'}
                            activeClassName={'nav-link-active'}
                          >
                            <span>{link.title}</span>
                          </ActiveLink>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
          </div>
        </div>
      </div>

      <div>
        <hr
          className="w-full my-4 border-0 bg-gradient-to-r from-white/5 via-black/10 to-white/5 dark:from-black/5 dark:via-white/30 darK:to-black/5"
          style={{ height: '1px' }}
        />

        <div className="py-8 px-2 flex flex-col items-center">
          <div className="mb-3 flex flex-wrap justify-center gap-4">
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`}>
                <Button variant="ghost" size="icon" aria-label="Email">
                  <MailIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.twitter && (
              <a href={siteConfig.twitter}>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="𝕏 (formerly Twitter)"
                >
                  <TwitterXIcon className="w-5 h-5" />
                </Button>
              </a>
            )}

            {siteConfig.instagram && (
              <a href={siteConfig.instagram}>
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-5" />
                </Button>
              </a>
            )}

            {siteConfig.tiktok && (
              <a href={siteConfig.tiktok}>
                <Button variant="ghost" size="icon" aria-label="TikTok">
                  <TiktokIcon className="w-5 h-5" />
                </Button>
              </a>
            )}

            {siteConfig.github && (
              <a href={siteConfig.github}>
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <GithubIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.linkedin && (
              <a href={siteConfig.linkedin}>
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <LinkedinIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.youtube && (
              <a href={siteConfig.youtube}>
                <Button variant="ghost" size="icon" aria-label="YouTube">
                  <YoutubeIcon className="w-7 h-7" />
                </Button>
              </a>
            )}

            {siteConfig.facebook && (
              <a href={siteConfig.facebook}>
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <FacebookIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.threads && (
              <a href={siteConfig.threads}>
                <Button variant="ghost" size="icon" aria-label="Threads">
                  <ThreadsIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.mastodon && (
              <a href={siteConfig.mastodon}>
                <Button variant="ghost" size="icon" aria-label="Mastodon">
                  <BoxesIcon className="w-6 h-6" />
                </Button>
              </a>
            )}
          </div>

          <div className="flex gap-1 px-4 items-center">
            <a
              href="https://www.producthunt.com/posts/page-ui-2?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-page&#0045;ui&#0045;2"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=470429&theme=light&period=daily"
                alt="Page&#0032;UI - High&#0045;converting&#0032;landing&#0032;page&#0032;components&#0032;to&#0032;copy&#0032;and&#0032;paste | Product Hunt"
                className="w-52 h-auto"
                width="250"
                height="54"
              />
            </a>

            <a
              href="https://www.producthunt.com/posts/page-ui-2?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-page&#0045;ui&#0045;2"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=470429&theme=light&period=weekly&topic_id=267"
                alt="Page&#0032;UI - High&#0045;converting&#0032;landing&#0032;page&#0032;components&#0032;to&#0032;copy&#0032;and&#0032;paste | Product Hunt"
                className="w-52 h-auto"
                width="250"
                height="54"
              />
            </a>
          </div>

          <div className="w-full text-center lg:flex lg:justify-center p-4 mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{`© ${new Date().getFullYear()}`}</span>
            <span>{` • `}</span>
            <Link href="/">{siteConfig.businessName}</Link>
            <span>{` • `}</span>
            <Link href="https://shipixen.com">Built with Shipixen 🔁</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
