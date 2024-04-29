import 'css/prism.css';
import 'katex/dist/katex.css';
import Link from 'next/link';
import { Metadata } from 'next';

import PageTitle from '@/components/shared/PageTitle';
import { components } from '@/components/MDXComponents';
import { MDXLayoutRenderer } from '@shipixen/pliny/mdx-components';
import {
  sortPosts,
  coreContent,
  allCoreContent,
} from '@shipixen/pliny/utils/contentlayer';
import { allBlogs, allAuthors } from 'shipixen-contentlayer/generated';
import type { Authors, Blog } from 'shipixen-contentlayer/generated';
import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import PostSimple from '@/layouts/PostSimple';
import PostLayout from '@/layouts/PostLayout';
import PostBanner from '@/layouts/PostBanner';

import { siteConfig } from '@/data/config/site.settings';

const BLOG_URL = siteConfig.blogPath ? `/${siteConfig.blogPath}` : '';

const defaultLayout = 'PostLayout';
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata | undefined> {
  const path = BLOG_URL + decodeURI(params.slug.join('/'));
  const post = allBlogs.find((p) => p.path === path);
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  if (!post) {
    return;
  }

  const publishedAt = new Date(post.date).toISOString();
  const modifiedAt = new Date(post.lastmod || post.date).toISOString();
  const authors = authorDetails.map((author) => author.name);
  let imageList = [siteConfig.socialBanner];
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images;
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteConfig.siteUrl + img,
    };
  });

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteConfig.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteConfig.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  };
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.path.split('/') }));
  return paths;
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const path = decodeURI(params.slug.join('/'));
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs));
  const postIndex = sortedCoreContents.findIndex((p) => p.path === path);
  if (postIndex === -1) {
    return (
      <div className="w-full flex flex-col items-center fancy-overlay">
        <Header />

        <div className="mt-24 text-center min-h-[40vh]">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>

          <p className="mt-4">
            Oops, you've hit a page that doesn't seem to exist anymore.
          </p>

          <Button asChild className="mt-8">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const prev = sortedCoreContents[postIndex + 1];
  const next = sortedCoreContents[postIndex - 1];
  const post = allBlogs.find((p) => p.path === path) as Blog;
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  const mainContent = coreContent(post);
  const jsonLd = post.structuredData;
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    };
  });

  const Layout = layouts[post.layout || defaultLayout];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout
        content={mainContent}
        authorDetails={authorDetails}
        next={next}
        prev={prev}
      >
        <MDXLayoutRenderer
          code={post.body.code}
          components={components}
          toc={post.toc}
        />
      </Layout>
    </>
  );
}
