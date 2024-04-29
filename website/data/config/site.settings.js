const { metadata } = require('./metadata');

/** @typedef {import("siteSettingsInterface.ts").SiteConfig } */
const siteConfig = {
  ...metadata,

  blogPath: '', // The location of all blog pages under 'data'. Empty string means 'data' (default). Best for SEO is to have articles under the root path.
  allArticlesPath: '/all-articles', // The name of the page where you can see a list of all articles (needs to match app/all-articles/page.tsx)

  // Configure analytics
  disableAnalytics: false, // Disable all analytics on the site
  analytics: {
    // By default Vercel analytics is enabled.
    //
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    // umamiAnalytics: {
    //   // We use an env variable for this site to avoid other users cloning our analytics ID
    //   umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. insert-business-name.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },

  newsletter: {
    // Optional: enable newsletter
    // provider: 'emailoctopus',
  },
  search: true, // Enable or disable search
};

module.exports = { siteConfig };
