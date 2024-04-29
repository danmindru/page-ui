export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Company',
    links: [
      { href: '/', title: 'Home' },
      { href: '/all-articles', title: 'Blog' },
    ],
  },
  { columnName: 'Product', links: [] },
  { columnName: 'Docs', links: [] },
  {
    columnName: 'Support',
    links: [
      { href: '/terms', title: 'Terms of Service' },
      { href: '/privacy', title: 'Privacy Policy' },
    ],
  },
];
