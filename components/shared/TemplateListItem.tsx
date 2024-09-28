import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SquareArrowOutUpRightIcon } from 'lucide-react';

export const TemplateListItem = ({
  name,
  description,
  imageUrls,
  href,
  tags,
  isComingSoon,
  isNew,
}: {
  name: string;
  description: string;
  imageUrls: string[];
  href: string;
  tags: string[];
  isComingSoon?: boolean;
  isNew?: boolean;
}) => {
  return (
    <div
      className={cn(
        'w-full flex relative z-0 gap-6 items-center justify-between overflow-auto no-scrollbar group',
        isComingSoon ? 'pointer-events-none' : ''
      )}
    >
      <div className="w-48 lg:w-72 flex-shrink-0 flex flex-col justify-center gap-2 self-stretch py-2">
        <h3 className="flex items-center font-semibold">
          <Link href={isComingSoon ? '#' : href}>
            {name}{' '}
            {isNew ? (
              <span className="bg-fuchsia-500 text-white text-xs font-semibold px-2 py-1 relative -top-[2px] rounded-md">
                New
              </span>
            ) : null}
            {isComingSoon ? (
              <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 relative -top-[2px] rounded-md">
                Coming Soon
              </span>
            ) : null}
          </Link>
        </h3>

        <p className="text-xs lg:text-sm">{description}</p>

        <hr className="my-3 w-10 h-0.5 bg-gray-500/30" />

        {!isComingSoon ? (
          <a
            href={href}
            className="relative z-10 flex items-center gap-2 text-purple-600 dark:text-purple-300 grayscale transition-all hover:grayscale-0"
          >
            <SquareArrowOutUpRightIcon className="w-4 h-4" />
            <span className="text-sm">View template</span>
          </a>
        ) : null}
      </div>

      {!isComingSoon ? (
        <a
          href={href}
          className="w-full lg:w-auto flex-shrink-0 flex flex-col relative"
        >
          <div className="flex gap-4">
            <Image
              src={imageUrls[0]}
              alt={name}
              width={175}
              height={175}
              className="w-auto h-44 lg:h-52 rounded-2xl group-hover:scale-[0.98] transition-all duration-700"
            />

            <Image
              src={imageUrls[1]}
              alt={name}
              width={175}
              height={175}
              className="w-auto h-44 lg:h-52 rounded-2xl group-hover:scale-[0.98] transition-all duration-700 delay-300"
            />

            <Image
              src={imageUrls[2]}
              alt={name}
              width={175}
              height={175}
              className="w-auto h-44 lg:h-52 rounded-2xl group-hover:scale-[0.98] transition-all duration-700 delay-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 absolute bottom-2 right-2 z-10">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="opacity-0 shadow-md lg:group-hover:opacity-100 duration-500 transition-all text-[0.6rem] bg-fuchsia-50/90 dark:bg-fuchsia-900/90 backdrop-blur-sm px-2 py-1 rounded-md"
                style={{
                  transitionDelay: `${index * 20}ms`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ) : (
        <div className="hidden w-full sm:flex flex-col relative">
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-2xl">
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              Coming Soon
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
