import { GuideCard } from '@/components/blog/GuideCard';
import { cn } from '@/lib/utils';
import {
  ArrowDownToDotIcon,
  PaintbrushIcon,
  PencilLineIcon,
  SparklesIcon,
} from 'lucide-react';

export const GettingStartedGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative', className)}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
        <GuideCard
          href="/boilerplate-documentation/running-locally#main"
          title="Setting up locally"
          description="Learn how to run a generated boilerplate locally"
          labels={['3 minutes']}
          variant="primary"
          iconComponent={<ArrowDownToDotIcon />}
        />

        <GuideCard
          href="/boilerplate-documentation/customizing-landing-page#main"
          title="Customizing the landing page"
          description="Learn how to work with landing page components"
          labels={['10 minutes']}
          iconClassName="rotate-0"
          variant="primary"
          iconComponent={<PaintbrushIcon />}
        />

        <GuideCard
          href="/boilerplate-documentation/using-the-shipixen-blog#main"
          title="Writing blog posts"
          description="Learn how to write a blog post using Markdown, mdx and Shipixen"
          labels={['15 minutes']}
          variant="primary"
          iconClassName="rotate-0"
          iconComponent={<PencilLineIcon />}
        />
      </div>
    </div>
  );
};
