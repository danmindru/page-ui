import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/config/site.settings';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import Link from '@/components/shared/Link';
import MobileNav from '@/components/shared/MobileNav';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import SearchButton from '@/components/search/SearchButton';
import ActiveLink from '@/components/shared/ActiveLink';

const TemplateHeader = ({
  className,
  logo,
  logoDark,
  hideMenuItems,
}: {
  className?: string;
  logo: React.ReactNode;
  logoDark: React.ReactNode;
  hideMenuItems?: boolean;
}) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 wide-container',
        className,
      )}
    >
      <div>
        <Link href="/" aria-label={siteConfig.logoTitle}>
          <div className="dark:hidden">{logo}</div>
          <div className="hidden dark:flex">{logoDark}</div>
        </Link>
      </div>
      <div className="flex items-center leading-5 gap-4 sm:gap-6">
        {!hideMenuItems
          ? headerNavLinks.map((link) => (
              <ActiveLink
                key={link.title}
                href={link.href}
                className="nav-link hidden sm:block"
                activeClassName="nav-link-active"
              >
                <span>{link.title}</span>
              </ActiveLink>
            ))
          : null}
        <SearchButton />
        <ThemeSwitch />

        {!hideMenuItems ? <MobileNav /> : null}
      </div>
    </header>
  );
};

export default TemplateHeader;
