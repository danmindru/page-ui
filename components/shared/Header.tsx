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
    <header
      className={cn(
        'flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 wide-container',
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
        {headerNavLinks.map((link) => (
          <ActiveLink
            key={link.title}
            href={link.href}
            className="nav-link hidden sm:block"
            activeClassName="nav-link-active"
          >
            <span>{link.title}</span>
          </ActiveLink>
        ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
