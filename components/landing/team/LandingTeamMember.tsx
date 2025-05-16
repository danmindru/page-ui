import Image from '@/components/shared/Image';
import clsx from 'clsx';
import { TeamMember } from './LandingTeamSection';

/**
 * A component for displaying a single team member with their image, name and role.
 */
export function LandingTeamMember({
  className,
  innerClassName,
  member,
  imageClassName,
}: {
  className?: string;
  innerClassName?: string;
  member: TeamMember;
  imageClassName?: string;
}) {
  return (
    <div className={clsx('flex flex-col gap-3', className)}>
      <div
        className={clsx(
          'w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800',
          innerClassName,
        )}
      >
        <Image
          src={member.imageSrc}
          alt={`${member.name} - ${member.role}`}
          width={400}
          height={400}
          className={clsx(
            'w-full h-auto object-cover aspect-square',
            imageClassName,
          )}
        />
      </div>
      <h3 className="text-lg font-medium mt-2">{member.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
    </div>
  );
}
