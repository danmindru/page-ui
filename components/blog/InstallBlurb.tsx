import { Protip } from '@/components/blog/Protip';
import { Button } from '@/components/shared/ui/button';
import clsx from 'clsx';
import { SparklesIcon } from 'lucide-react';

export const InstallBlurb = ({ className }: { className?: string }) => {
  return (
    <Protip className={clsx('p-0 w-full md:w-auto', className)}>
      <div className="flex flex-col z-10 p-4">
        <SparklesIcon className="absolute opacity-20 -right-2 top-1 -z-10 flex-shrink-0 inline-block w-8 h-8 rotate-[80deg] text-primary-500 dark:text-primary-400" />

        <SparklesIcon className="absolute opacity-20 -right-2 -bottom-4 -z-10 flex-shrink-0 inline-block w-14 h-14 rotate-12 text-primary-500 dark:text-primary-400" />

        <p>Skip the setup and deploy in 5 minutes.</p>

        <div className="mt-2">
          <Button asChild>
            <a
              href="https://shipixen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Shipixen
            </a>
          </Button>
        </div>
      </div>
    </Protip>
  );
};
