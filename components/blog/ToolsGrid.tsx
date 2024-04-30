import { GuideCard } from '@/components/blog/GuideCard';
import { cn } from '@/lib/utils';
import { totalComponentExplorerDemos, totalThemes } from 'consts/stats';
import { CreditCardIcon, PaintBucketIcon, SearchCodeIcon } from 'lucide-react';

export const ToolsGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative', className)}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
        <GuideCard
          href="https://shipixen.com/component-explorer-shadcn"
          title="Component Explorer"
          description="View, interact and search for any component from the Shipixen & Shadcn UI library."
          labels={[`${totalComponentExplorerDemos}+ demos`]}
          variant="secondary"
          iconComponent={<SearchCodeIcon />}
        />

        <GuideCard
          href="https://shipixen.com/color-theme-explorer-shadcn"
          title="Theme Explorer"
          description="Easily test themes & colors on Shipixen/Shadcn UI components."
          labels={[`${totalThemes}+ themes`]}
          variant="secondary"
          iconComponent={<PaintBucketIcon />}
        />

        <GuideCard
          href="https://shipixen.com/shadcn-pricing-page"
          title="Pricing Page Generator"
          description="Generate beautiful pricing pages & get the code."
          labels={['Shadcn UI', 'Shipixen']}
          variant="secondary"
          iconComponent={<CreditCardIcon />}
        />
      </div>
    </div>
  );
};
