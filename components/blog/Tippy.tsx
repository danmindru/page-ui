import clsx from 'clsx';
import { InfoIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/shared/ui/tooltip';

export const Tippy = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger className={clsx('relative top-1', className)}>
        <InfoIcon className="w-4 h-4" />
      </TooltipTrigger>
      <TooltipContent className="not-prose w-full max-w-sm">
        <p>{children}</p>
      </TooltipContent>
    </Tooltip>
  );
};
