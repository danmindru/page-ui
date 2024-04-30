'use client';

import { useTocHeadObserver } from '@/components/blog/useTocHeadObserver';
import { cn } from '@/lib/utils';
import { Toc } from '@shipixen/pliny/mdx-plugins/remark-toc-headings';

export interface TOCProps {
  toc: Toc;
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
  className?: string;
}

/**
 * Generates an table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */
const TOC = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
  className,
}: TOCProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i');

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value),
  );

  const { activeId } = useTocHeadObserver();

  const tocList = (
    <ul className={className}>
      {filteredToc.map((heading) => {
        return (
          <li
            key={heading.value}
            className={cn(
              `${heading.depth >= indentDepth ? 'ml-6' : ''}`,
              activeId === heading.url
                ? 'toc-active-link'
                : 'toc-link fancy-link fancy-link--no-underline',
            )}
          >
            <a href={heading.url}>{heading.value}</a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {asDisclosure ? (
        <details open className={className}>
          <summary className="ml-6 pt-2 pb-2 text-xl font-bold">
            Table of Contents
          </summary>
          <div className="ml-6">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
    </>
  );
};

export { TOC };
