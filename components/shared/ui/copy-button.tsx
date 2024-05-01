'use client';

import * as React from 'react';
import { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu';
import { CheckIcon, CopyIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/ui/button';

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  src?: string;
}

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value);
}

interface CopyButtonProps extends DropdownMenuTriggerProps {
  value: string;
  copyText?: string;
  copiedText?: string;
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon' | 'unsized';
  className?: string;
}

export function CopyButton({
  value,
  copyText = 'Copy to clipboard',
  copiedText = 'Copied!',
  size = 'default',
  className,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyToClipboard = React.useCallback((value: string) => {
    copyToClipboardWithMeta(value);
    setHasCopied(true);
  }, []);

  return (
    <Button
      size={size}
      variant="default"
      className={cn('relative flex gap-1', className)}
      onClick={() => copyToClipboard(value)}
      {...props}
    >
      {hasCopied ? (
        <>
          {copiedText} <CheckIcon className="h-3 w-3" />
        </>
      ) : (
        <>
          {copyText} <CopyIcon className="h-3 w-3" />
        </>
      )}
      <span className="sr-only">Copy</span>
    </Button>
  );
}
