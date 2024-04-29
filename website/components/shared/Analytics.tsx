import { Analytics, AnalyticsConfig } from '@shipixen/pliny/analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

import { siteConfig } from '@/data/config/site.settings';

export const AnalyticsWrapper = () => {
  if (siteConfig.analytics && Object.keys(siteConfig.analytics).length) {
    return (
      <Analytics analyticsConfig={siteConfig.analytics as AnalyticsConfig} />
    );
  }

  if (!siteConfig.disableAnalytics) {
    return <VercelAnalytics />;
  }

  return <></>;
};
