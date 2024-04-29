import { Metadata } from 'next';
import { slug } from 'github-slugger';
import { allCoreContent } from '@shipixen/pliny/utils/contentlayer';
import { siteConfig } from '@/data/config/site.settings';
import { allBlogs } from 'shipixen-contentlayer/generated';
import tagData from 'app/tag-data.json';
import { genPageMetadata } from 'app/seo';
import ListLayout from '@/layouts/ListLayoutWithTags';
import Header from '@/components/shared/Header';

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const tag = decodeURI(params.tag);
  return genPageMetadata({
    title: tag,
    description: `${siteConfig.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteConfig.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  });
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    tag: tag,
  }));
  return paths;
};

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag);
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);
  const filteredPosts = allCoreContent(
    allBlogs.filter(
      (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag),
    ),
  );
  return (
    <div className="flex flex-col w-full items-center justify-between">
      <Header />
      <ListLayout posts={filteredPosts} title={`${title} posts`} />
    </div>
  );
}
