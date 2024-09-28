import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from '@/components/shared/Link';
import SearchButton from '@/components/search/SearchButton';
import ActiveLink from '@/components/shared/ActiveLink';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import { siteConfig } from '@/data/config/site.settings';
import { TemplateSelector } from '@/components/bricks/template/template-selector';
import { ThiefModeToggle } from '@/components/bricks/controls/thief-mode';
import { BookIcon, DownloadIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/shared/ui/dialog';
import { Button } from '@/components/shared/ui/button';
import { ThemeAndFontSelector } from '@/components/bricks/theme/theme-and-font-selector';

export const BrickControls = ({ className }: { className?: string }) => {
  return (
    <>
      <header
        className={cn(
          'flex-shrink-0 flex items-center justify-between flex-wrap gap-4',
          className,
        )}
      >
        <div>
          <Link href="/" aria-label={siteConfig.logoTitle}>
            <div className="flex items-center gap-3 justify-between">
              <Image
                src="https://shipixen.com/static/images/icon.png"
                width={100}
                height={100}
                alt="Shipixen Logo"
                className="group-hover:animate-wiggle h-10 w-10"
              />

              {/* {typeof siteConfig.logoTitle === 'string' ? (
                <div className="hidden lg:flex font-medium h-full">
                  Shipixen
                </div>
              ) : null} */}
            </div>
          </Link>
        </div>

        <div className="hidden sm:flex items-center leading-5 gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="nav-link p-0" variant="link">
                <span className="hidden lg:inline-block">Install</span>
                <DownloadIcon className="lg:hidden" />
              </Button>
            </DialogTrigger>

            <DialogContent className="md:max-w-md lg:max-w-2xl">
              <DialogHeader>
                <DialogTitle>How to install</DialogTitle>
              </DialogHeader>

              <p>
                These components are meant to be copy-pasted into your project.
                For it to work, you either need to get{' '}
                <a
                  href="https://shipixen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Shipixen
                </a>{' '}
                (easiest) or install{' '}
                <a
                  href="https://pageui.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Page UI
                </a>{' '}
                in your app.
              </p>

              <br />

              <h2 className="fancy-text-purple">Shipixen</h2>
              <p>
                If you are using Shipixen, there is nothing to install. Just
                copy the code and paste it anywhere in your project.
                <br />
                You can read more in the{' '}
                <a
                  href="https://shipixen.com/boilerplate-documentation/customizing-landing-page#main"
                  className="fancy-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shipixen documentation
                </a>
                .
              </p>

              <br />

              <h2 className="fancy-text-blue">Page UI</h2>
              <p>
                If you are using Page UI, you can install it by{' '}
                <a
                  href="https://pageui.shipixen.com/docs/installation#main"
                  className="fancy-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  following the installation steps
                </a>{' '}
                for your preferred framework.
              </p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Done</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <ActiveLink
            href="/boilerplate-documentation/landing-page-components"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            <span>
              <span className="hidden lg:inline-block">Docs</span>
              <BookIcon className="lg:hidden" />
            </span>
          </ActiveLink>

          {/* <SearchButton /> */}
          <ThemeSwitch />
        </div>
      </header>
    </>
  );
};

export const FixedBrickControls = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'fixed z-40 bottom-10 xl:bottom-16 flex gap-6 justify-center items-center w-full',
        className,
      )}
    >
      <BrickControls className="shadow-xl bg-violet-50/90 dark:bg-indigo-950/80 backdrop-blur-sm rounded-md flex items-center h-12 md:h-16 px-2 md:px-4" />

      <header className="shadow-xl bg-violet-50/90 dark:bg-indigo-950/80 backdrop-blur-sm rounded-md hidden sm:flex items-center gap-4 sm:gap-6 h-12 md:h-16 pl-2 md:px-4">
        <ThiefModeToggle />
        {/*
        <Button variant="outline" size="icon">
          <CopyIcon />
        </Button> */}
      </header>

      <div className="shadow-xl bg-violet-50/90 dark:bg-indigo-950/80 backdrop-blur-sm rounded-md flex items-center gap-1 h-12 md:h-16">
        <TemplateSelector
          className="flex-shrink-0 h-full"
          dropdownClassName="h-full"
          dropdownTriggerClassName="h-full px-4"
        />

        <ThemeAndFontSelector showChangeThemeLabel={false} />
      </div>
    </div>
  );
};
