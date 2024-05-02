import { GuideCard } from '@/components/blog/GuideCard';
import { cn } from '@/lib/utils';
import { totalLandingPageExamples, totalTemplates } from 'consts/stats';
import { KanbanSquareDashedIcon, LayoutPanelTopIcon } from 'lucide-react';

export const LandingPageGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative', className)}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
        <GuideCard
          href="/demo/landing-page-component-examples"
          title="Landing page component examples"
          description="Learn how to use, customize and combine landing page components"
          labels={[`${totalLandingPageExamples}+ examples`]}
          variant="black"
          iconComponent={<KanbanSquareDashedIcon />}
        />

        <GuideCard
          href="/demo/landing-page-templates"
          title="Landing page templates"
          description="Explore and use pre-built landing page templates"
          labels={[`${totalTemplates}+ templates`]}
          iconClassName="rotate-0"
          variant="black"
          iconComponent={<LayoutPanelTopIcon />}
        />
      </div>
    </div>
  );
};
