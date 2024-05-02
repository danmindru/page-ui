import { clsx } from 'clsx';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shared/ui/accordion';

export interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

/**
 * A component meant to be used in the landing page.
 * It displays a collapsible list of frequently asked questions and their answers.
 */
export const LandingFaqCollapsibleSection = ({
  className,
  title,
  titleComponent,
  description,
  descriptionComponent,
  faqItems,
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  faqItems: FaqItem[];
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex justify-center items-center gap-8 py-12 lg:py-16 flex-col',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow ? 'overflow-hidden' : '',
        className,
      )}
    >
      {withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2 pointer-events-none">
          <GlowBg
            className={clsx('w-full lg:w-2/3 h-auto z-0')}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div className={clsx(className, 'w-full p-6 container-narrow')}>
        {title ? (
          <h2 className="text-3xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-4xl lg:text-5xl fancyHeading">
            {title}
          </h2>
        ) : (
          titleComponent
        )}

        {description ? (
          <p className="mt-6 md:text-xl">{description}</p>
        ) : (
          descriptionComponent
        )}

        <Accordion
          type="single"
          collapsible
          className="w-full mt-12 relative z-10"
        >
          {faqItems.map((faqItem, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={clsx(
                withBackground && variant === 'primary'
                  ? 'border-primary-500/10'
                  : '',
                withBackground && variant === 'secondary'
                  ? 'border-secondary-500/10'
                  : '',
              )}
            >
              <AccordionTrigger className="text-left">
                {faqItem.question}
              </AccordionTrigger>
              <AccordionContent>{faqItem.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
