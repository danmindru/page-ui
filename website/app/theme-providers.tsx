'use client';

import { ThemeProvider } from 'next-themes';
import { siteConfig } from '@/data/config/site.settings';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={siteConfig.theme}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
