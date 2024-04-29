import TOCInline from '@shipixen/pliny/ui/TOCInline';
import Pre from '@shipixen/pliny/ui/Pre';
import BlogNewsletterForm from '@shipixen/pliny/ui/BlogNewsletterForm';
import type { MDXComponents } from 'mdx/types';
import Image from './shared/Image';
import CustomLink from './shared/Link';

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
};
