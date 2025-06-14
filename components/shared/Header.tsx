import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/config/site.settings';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import SearchButton from '../search/SearchButton';
import ActiveLink from '@/components/shared/ActiveLink';
import Image from 'next/image';
import { CtaButton } from '@/components/shared/ui/cta-button';

const Header = ({ className }: { className?: string }) => {
  return (
    <>
      {/* <div className="w-full flex gap-4 items-center justify-center p-4 bg-purple-950">
        <section
          className={cn(
            'wide-container !py-0 flex justify-between items-center'
          )}
        >
          <p className="text-white text-sm">
            <span className="font-bold">
              Today is PageAI launch day!{' '}
              <span className="text-primary-400">🚀</span>
            </span>
            <span className="hidden lg:flex">
              The best AI landing page builder is launching on Product Hunt. Any
              support would be greatly appreciated!
            </span>
          </p>
          <a
            href="https://www.producthunt.com/products/page-ai-websites-a-human-would-build?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-page&#0045;ai&#0045;websites&#0045;a&#0045;human&#0045;would&#0045;build"
            target="_blank"
            className="shrink-0"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=962284&theme=light&t=1749673353125"
              alt="Page&#0032;AI&#0032;⋅&#0032;Websites&#0032;a&#0032;human&#0032;would&#0032;build - Prompt&#0032;to&#0032;design&#0032;&#0038;&#0032;clean&#0032;code&#0032;in&#0032;5&#0032;min&#0032;⋅&#0032;Deploy&#0032;with&#0032;1&#0032;click | Product Hunt"
              width={250}
              height={54}
              className="w-40 lg:w-52 h-auto"
            />
          </a>
        </section>
      </div> */}

      <div className="w-full flex gap-4 items-center justify-center px-1 py-4 md:p-4 bg-purple-800 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <section
          className={cn(
            'wide-container !py-0 flex justify-between items-center gap-4'
          )}
        >
          <p className="text-white text-xs md:text-base">
            <span className="font-semibold">New!</span> An AI that builds
            production-ready websites using Page UI.
          </p>

          <CtaButton asChild className="shrink-0">
            <a
              href="https://pageai.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center h-10 text-xs md:text-base"
            >
              Try Page AI →
            </a>
          </CtaButton>
        </section>
      </div>

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
          className
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
                  hiddenOnSmallScreen ? 'hidden md:flex' : 'hidden sm:block'
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
