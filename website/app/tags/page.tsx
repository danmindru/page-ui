import { slug } from 'github-slugger';
import tagData from 'app/tag-data.json';
import { genPageMetadata } from 'app/seo';
import Link from '@/components/shared/Link';
import Tag from '@/components/blog/Tag';
import Header from '@/components/shared/Header';

export const metadata = genPageMetadata({
  title: 'Tags',
  description: 'All tags on the site.',
});

export default async function Page() {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center mb-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Tags
          </h1>
          <p className="mt-6 md:text-xl">
            Overview of all tags used across posts.
          </p>

          <div className="w-full mt-12 flex flex-wrap">
            {tagKeys.length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              return (
                <div key={t} className="mb-2 mr-5 mt-2">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${slug(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                    aria-label={`View posts tagged ${t}`}
                  >
                    {` (${tagCounts[t]})`}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
