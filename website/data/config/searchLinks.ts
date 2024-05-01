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
  {
    id: 'templates',
    name: 'Templates',
    keywords: '',
    section: 'Examples',
    href: 'https://shipixen.com/demo/landing-page-templates',
  },
  {
    id: 'emerald-template',
    name: 'Template Example',
    keywords: '',
    section: 'Examples',
    href: 'https://shipixen.com/demo/landing-page-templates/template/emerald-ai',
  },
  {
    id: 'usage-examples',
    name: 'Usage Examples',
    keywords: '',
    section: 'Examples',
    href: 'https://shipixen.com/demo/landing-page-component-examples',
  },
];
