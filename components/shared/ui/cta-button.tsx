import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const ctaButtonVariants = cva('transition-all ease-in relative z-10 p-6', {
  variants: {
    variant: {
      default:
        'bg-neutral-800/95 dark:bg-neutral-900/90 text-white hover:bg-black dark:hover:bg-black hover:text-white rounded-md',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      xl: 'h-12 rounded-md px-10 text-md',
      icon: 'h-10 w-10',
    },
    backdropVariant: {
      default: '',
      muted: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const ctaButtonBackdropVariants = cva('absolute z-0 pointer-events-none', {
  variants: {
    backdropVariant: {
      default:
        '-inset-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl blur opacity-60 dark:opacity-70 dark:-inset-0.5 group-hover:opacity-80 dark:group-hover:opacity-70 transition-all duration-1000 group-hover:duration-3000 group-hover:-inset-2 animate-tilt',
      muted:
        '-inset-1 bg-gradient-to-r from-neutral-500 to-neutral-500 rounded-xl blur opacity-10',
    },
  },
  defaultVariants: {
    backdropVariant: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean;
}

const CtaButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, backdropVariant, size, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <span className={cn('relative inline-block group', className)}>
        <Comp
          className={cn(ctaButtonVariants({ variant, size }))}
          ref={ref}
          {...props}
        />
        <div
          className={cn(ctaButtonBackdropVariants({ backdropVariant }))}
        ></div>
      </span>
    );
  },
);
CtaButton.displayName = 'CtaButton';

export { CtaButton, ctaButtonVariants };
