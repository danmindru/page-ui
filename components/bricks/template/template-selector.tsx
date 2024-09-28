import { TemplateSelectorDropdown } from './template-selector-dropdown';
import { cn } from '@/lib/utils';

export const TemplateSelector = ({
  title = 'Select a template',
  className = '',
  dropdownClassName = '',
  dropdownTriggerClassName = '',
  headingClassName = '',
  basePath,
}: {
  title?: string;
  className?: string;
  dropdownClassName?: string;
  dropdownTriggerClassName?: string;
  headingClassName?: string;
  basePath?: string;
}) => {
  return (
    <div className={cn('flex items-center', className)}>
      <TemplateSelectorDropdown
        className={cn(dropdownClassName)}
        triggerClassName={cn(dropdownTriggerClassName)}
        basePath={basePath}
      >
        <h1
          className={cn(
            'w-full flex flex-col-reverse gap-0.5 font-semibold leading-tight md:leading-tight sm:max-w-none',
            headingClassName,
          )}
        >
          <span className={cn('text-sm')}>{title}</span>{' '}
          {/* <span className="text-sm lg:text-[0.6rem] font-semibold uppercase tracking-wider text-black dark:text-white opacity-40">
            Shadcn UI & Shipixen ⋅ {numberOfThemes}+ themes
          </span> */}
        </h1>
      </TemplateSelectorDropdown>
    </div>
  );
};
