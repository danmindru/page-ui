'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, OrbitIcon } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/shared/ui/sheet';
import clsx from 'clsx';

/**
 * A component that renders the navigation bar for the landing page.
 * It includes a logo and a list of navigation items. On mobile, it collapses into a burger + side sheet.
 */
export const LandingHeader = ({
  logoComponent,
  children,
  withBackground = false,
  variant = 'primary',
  fixed = false,
  className,
}: {
  logoComponent?: React.ReactNode;
  children: React.ReactNode;
  withBackground?: boolean;
  variant?: 'primary' | 'secondary';
  fixed?: boolean;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx(
        'flex items-center justify-between gap-6 p-4 w-full max-w-full container-narrow lg:rounded-lg',
        fixed
          ? 'sticky top-4 left-auto right-auto z-50 bg-white/50 dark:bg-black/20 backdrop-blur-xl'
          : '',
        withBackground ? 'lg:m-4 justify-self-center' : '',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10 border border-primary-100/30 dark:border-primary-900/30'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10 border border-secondary-100/30 dark:border-secondary-900/30'
          : '',
        className,
      )}
    >
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          <div className="flex items-center gap-3 justify-between">
            {logoComponent || (
              <>
                <OrbitIcon className="h-8 w-8 text-primary-900 dark:text-primary-100" />

                <div className="hidden text-2xl font-semibold font-display sm:flex gap-2 h-full">
                  Page <span className="font-bold">UI</span>
                </div>
              </>
            )}
          </div>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">{children}</div>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="px-3">
              <MenuIcon className="h-6 w-6 mr-2" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">{children}</nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
