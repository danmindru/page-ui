'use client';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';

import { Code2Icon, Loader2Icon } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/shared/ui/dialog';

const LazyBrickCodeEditor = dynamic(
  () => import('@/components/bricks/brick-code-editor'),
);

export const BrickCodeEditorToggle = ({
  brick,
  demo,
}: {
  brick: string;
  demo: string;
}) => {
  const [open, setOpen] = useState(false);

  const viewCode = () => {
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline" onClick={viewCode}>
          <Code2Icon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-md lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Copy code</DialogTitle>
        </DialogHeader>

        <div className="overflow-auto">
          <Suspense
            fallback={
              <div>
                <Loader2Icon className="text-gray-500 h-4 w-4 animate-spin" />
              </div>
            }
          >
            <LazyBrickCodeEditor brick={brick} demo={demo} />
          </Suspense>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
