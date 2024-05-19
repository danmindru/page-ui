export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Get started',
    links: [
      { href: '/', title: 'Home' },
      { href: '/docs/introduction', title: 'Docs' },
      { href: 'https://github.com/danmindru/page-ui', title: 'GitHub' },
    ],
  },
  {
    columnName: 'Examples',
    links: [
      {
        href: 'https://shipixen.com/demo/landing-page-templates/template/emerald-ai',
        title: 'Templates',
      },
      {
        href: 'https://shipixen.com/demo/landing-page-component-examples',
        title: 'Usage examples',
      },
      {
        href: 'https://pageui.shipixen.com/docs/landing-page-components',
        title: 'Component docs',
      },
    ],
  },
  {
    columnName: 'Support',
    links: [
      {
        href: 'https://github.com/danmindru/page-ui/issues/new',
        title: 'Submit Issue',
      },
      {
        href: 'https://shipixen.com/boilerplate-documentation',
        title: 'More docs',
      },
      {
        href: 'https://shipixen.com',
        title: 'Deploy with Shipixen',
      },
      { href: '/terms', title: 'Terms of Service' },
      { href: '/privacy', title: 'Privacy Policy' },
    ],
  },
];
