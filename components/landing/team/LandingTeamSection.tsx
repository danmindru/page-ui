import clsx from 'clsx';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import { LandingTeamMember } from './LandingTeamMember';
import React from 'react';

/**
 * A component for the Team Members section of the landing page.
 * Displays heading, description, and a grid of team members.
 * Supports both passing a members array or using LandingTeamMember components as children.
 *
 * @example
 * // Using members array
 * <LandingTeamSection
 *   title="Our Team"
 *   description="Meet our talented team members"
 *   members={[
 *     { name: "John Doe", role: "CEO", imageSrc: "/path/to/image.jpg" },
 *     { name: "Jane Smith", role: "CTO", imageSrc: "/path/to/image.jpg" }
 *   ]}
 * />
 *
 * // Using children components
 * <LandingTeamSection
 *   title="Our Team"
 *   description="Meet our talented team members"
 * >
 *   <LandingTeamMember
 *     member={{ name: "John Doe", role: "CEO", imageSrc: "/path/to/image.jpg" }}
 *   />
 *   <LandingTeamMember
 *     member={{ name: "Jane Smith", role: "CTO", imageSrc: "/path/to/image.jpg" }}
 *   />
 * </LandingTeamSection>
 */
export type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
};

export function LandingTeamSection({
  className,
  innerClassName,
  title = 'Our Members',
  titleComponent,
  description = 'Our team is a tight-knit family of developers and visionaries, all bound by the same passion and enthusiasm.',
  descriptionComponent,
  members = [],
  textPosition = 'left',
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  children,
}: {
  className?: string;
  innerClassName?: string;
  title?: string;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  members?: TeamMember[];
  textPosition?: 'center' | 'left';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}) {
  // Check if children are provided to render instead of the members array
  const hasChildrenToRender = React.Children.count(children) > 0;

  return (
    <section
      className={clsx(
        'w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow ? 'relative overflow-hidden' : '',
        className,
      )}
    >
      {withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-3/4 pointer-events-none">
          <GlowBg
            className={clsx(
              'w-full lg:w-3/4 h-auto z-0 dark:opacity-50 opacity-100',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'container-wide w-full p-6 flex flex-col items-center relative',
          innerClassName,
        )}
      >
        <div
          className={clsx(
            'w-full flex flex-col gap-4 mb-12',
            textPosition === 'center'
              ? 'items-center text-center'
              : 'items-start',
          )}
        >
          {titleComponent || (title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              {title}
            </h2>
          ))}

          {descriptionComponent || (description && (
            <p className="text-base md:text-lg max-w-2xl mt-2 text-gray-700 dark:text-gray-300">
              {description}
            </p>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {hasChildrenToRender
            ? children
            : members.map((member, index) => (
                <LandingTeamMember key={index} member={member} />
              ))}
        </div>
      </div>
    </section>
  );
}
