'use client';

import clsx from 'clsx';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Label } from '@/components/shared/ui/label';

/**
 * A newsletter input and button, used in LandingNewsletterSection, but can also be used as a standalone component in LandingPrimaryCta sections.
 */
export const LandingNewsletterInput = ({
  className,
  buttonLabel = 'Subscribe',
  placeholderLabel = 'Enter your email',
  inputLabel = 'Email address',
  variant = 'primary',
  disabled = false,
  onSubmit = () => {},
}: {
  className?: string;
  buttonLabel?: string;
  placeholderLabel?: string;
  inputLabel?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      className={clsx(
        'w-full flex flex-col sm:flex-row justify-center items-center gap-4',
        className,
      )}
      onSubmit={onSubmit}
    >
      <div className="flex-grow">
        <Label htmlFor="email" className="sr-only">
          {inputLabel}
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder={placeholderLabel}
          required
          className="w-full"
          disabled={disabled}
        />
      </div>

      <Button
        type="submit"
        className="w-full sm:w-auto"
        variant={variant}
        disabled={disabled}
      >
        {buttonLabel}
      </Button>
    </form>
  );
};
