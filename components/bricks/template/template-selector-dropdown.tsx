'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import {
  Select,
  SelectContent,
  SelectTriggerUpDown,
} from '@/components/shared/ui/select';
import { Check, SquareArrowOutUpRightIcon } from 'lucide-react';

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center justify-between rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground',
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

    <span className="ml-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export const TemplateSelectorDropdown = ({
  children,
  className = '',
  triggerClassName = '',
  basePath = 'demo/landing-page-templates/template',
}: {
  children?: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  basePath?: string;
}) => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname() || '';
  const router = useRouter();

  const THEMES = [
    {
      name: (
        <span className="w-full flex gap-1 items-center justify-between opacity-50 hover:opacity-100 transition-opacity">
          All Templates <SquareArrowOutUpRightIcon className="w-4 h-4" />{' '}
        </span>
      ),
      value: 'demo/landing-page-templates',
    },
    {
      name: 'Gnomie AI',
      value: `${basePath}/gnomie-ai`,
    },
    {
      name: 'Specta',
      value: `${basePath}/specta`,
    },
    {
      name: 'Emerald AI',
      value: `${basePath}/emerald-ai`,
    },
    {
      name: 'Front Centre',
      value: `${basePath}/front-centre`,
    },
    // {
    //   name: 'Portrails',
    //   value: `${basePath}/portrails`,
    // },
    // {
    //   name: 'Honey Dew',
    //   value: `${basePath}/honey-dew`,
    // },
    {
      name: 'ScreenshotTwo',
      value: `${basePath}/screenshot-two`,
    },
    {
      name: 'Minimum Via',
      value: `${basePath}/minimum-via`,
    },
  ];

  const onChange = (value: string) => {
    router.push(`/${value}`);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pathNameWithoutSlash = pathname.replace('/', '');
  const themeName = THEMES.find((theme) => theme.value === pathNameWithoutSlash)
    ?.name;

  return (
    <div className={cn('w-full flex-shrink flex justify-end', className)}>
      <Select onValueChange={onChange} value={pathNameWithoutSlash}>
        <SelectTriggerUpDown
          className={cn(
            'border-0 p-0 h-auto w-full lg:w-auto text-left lg:text-right bg-transparent',
            triggerClassName,
          )}
        >
          <span className="mr-2 font-medium">{themeName || children}</span>
        </SelectTriggerUpDown>

        <SelectContent>
          {THEMES.map((theme) => (
            <SelectItem key={theme.value} value={theme.value} className="p-2">
              {theme.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
