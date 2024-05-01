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
