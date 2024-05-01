export const searchLinks: Array<{
  id: string;
  name: string;
  keywords: string;
  shortcut?: string[];
  section: string;
  href: string;
}> = [
  {
    id: 'home',
    name: 'Home',
    keywords: '',
    section: 'Navigation',
    href: '/',
  },
  {
    id: 'github',
    name: 'Github',
    keywords: '',
    section: 'Navigation',
    href: 'https://github.com/danmindru/page-ui',
  },
  {
    id: 'introduction',
    name: 'Introduction',
    keywords: '',
    section: 'Docs',
    href: '/docs/introduction',
  },
  {
    id: 'installation',
    name: 'Installation',
    keywords: '',
    section: 'Docs',
    href: '/docs/installation',
  },
  {
    id: 'components',
    name: 'Components',
    keywords: '',
    section: 'Docs',
    href: '/docs/landing-page-components',
  },
];
