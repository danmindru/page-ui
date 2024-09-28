import { Button } from '@/components/shared/ui/button';
import { Card, CardContent } from '@/components/shared/ui/card';
import { Inter as FontSans } from 'next/font/google';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/shared/ui/tabs';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
});

export const ComponentExample = ({
  className,
  children,
  previewComponent,
}: {
  className?: string;
  children: React.ReactNode;
  previewComponent: React.ReactNode;
}) => {
  return (
    <Tabs defaultValue="preview">
      <TabsList className="w-full flex items-end justify-start rounded-none px-1 py-0 h-12">
        <TabsTrigger className="px-6" value="preview">
          Preview
        </TabsTrigger>
        <TabsTrigger className="px-6" value="code">
          Code
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="preview"
        className="preview mt-0 w-full border-2 border-gray-200 border-opacity-60 dark:border-gray-900 border-t-none rounded-b-md overflow-hidden"
      >
        <Card className="rounded-none border-none shadow-none w-full">
          <CardContent className={cn('p-0 not-prose', fontSans)}>
            {previewComponent}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent
        value="code"
        className="mt-0 w-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 border-t-none rounded-b-md overflow-auto"
      >
        <Card
          className="rounded-t-none border-none shadow-none w-full prose max-w-full mt-0 pt-0 overflow-auto"
          style={{
            background: 'var(--tw-prose-pre-bg)',
          }}
        >
          <style>
            {`
              .prose pre {
                margin: 0;
                white-space: pre-wrap;
              }
            `}
          </style>
          <CardContent className="p-0">{children}</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
