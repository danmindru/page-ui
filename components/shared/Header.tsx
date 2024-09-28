import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/config/site.settings';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import SearchButton from '../search/SearchButton';
import ActiveLink from '@/components/shared/ActiveLink';
import Image from 'next/image';

const Header = ({ className }: { className?: string }) => {
  return (
    <>
      {/* <div className="w-full gap-4 flex items-center justify-center bg-purple-950 p-2">
        <a
          href="https://www.producthunt.com/posts/page-ui?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-page&#0045;ui"
          target="_blank"
          className="flex gap-4 items-center justify-center opacity-100 hover:opacity-90 transition-all"
        >
          <p className="text-white">
            We are live on Product Hunt today! Come by and say hi 🚀
          </p>

          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=453266&theme=light"
            alt="Page&#0032;UI - React&#0032;components&#0032;to&#0032;make&#0032;a&#0032;pretty&#0032;landing&#0032;page&#0032;that&#0032;converts | Product Hunt"
            className="h-10 w-auto"
          />
        </a>
      </div> */}

      <header
        className={cn(
          'flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 p-6 container-wide',
          className,
        )}
      >
        <div>
          <Link href="/" aria-label={siteConfig.logoTitle}>
            <div className="flex items-center gap-3 justify-between">
              <Image
                src="/static/images/logo.png"
                alt="Page UI logo"
                height={47}
                width={47}
                className="group-hover:animate-wiggle "
              />

              <div className="hidden text-2xl font-semibold sm:flex h-full">
                Page UI
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center leading-5 gap-4 sm:gap-6">
          {headerNavLinks.map((link) => {
            const hiddenOnSmallScreen =
              link.href.includes('component-examples') ||
              link.href.includes('templates');

            if (link.href === 'https://shipixen.com') {
              return (
                <a
                  key={link.title}
                  href={link.href}
                  className="nav-link hidden sm:block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bg-clip-text bg-gradient-to-r text-transparent from-primary-400 to-secondary-300">
                    {link.title}
                  </span>
                </a>
              );
            }

            return (
              <ActiveLink
                key={link.title}
                href={link.href}
                className={cn(
                  'nav-link',
                  hiddenOnSmallScreen ? 'hidden md:flex' : 'hidden sm:block',
                )}
                activeClassName="nav-link-active"
              >
                <span>{link.title}</span>
              </ActiveLink>
            );
          })}
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
    </>
  );
};

export default Header;
