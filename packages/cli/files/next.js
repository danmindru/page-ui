import { PLACEHOLDER_PATH } from './consts/placeholder.js';

export const FILES = [
  {
    from: `${PLACEHOLDER_PATH}/tailwind.config.ts`,
    to: 'tailwind.config.ts',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/tailwind.config.ts',
  },

  {
    from: `${PLACEHOLDER_PATH}/data/config/colors.js`,
    to: 'data/config/colors.js',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/data/config/colors.js',
  },

  {
    from: `${PLACEHOLDER_PATH}/lib/utils.ts`,
    to: 'lib/utils.ts',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/lib/utils.ts',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/ui/accordion.tsx`,
    to: 'components/shared/ui/accordion.tsx',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/shared/ui/accordion.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/ui/button.tsx`,
    to: 'components/shared/ui/button.tsx',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/shared/ui/button.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/ui/carousel.tsx`,
    to: 'components/shared/ui/carousel.tsx',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/shared/ui/carousel.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/ui/glow-bg.tsx`,
    to: 'components/shared/ui/glow-bg.tsx',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/shared/ui/glow-bg.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/Image.tsx`,
    to: 'components/shared/Image.tsx',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/shared/Image.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/VideoPlayer.tsx`,
    to: 'components/shared/VideoPlayer.tsx',
    fallbackPath:
      'https://github.com/danmindru/page-ui/blob/main/components/shared/VideoPlayer.tsx',
  },
];

export const DIRECTORIES = [
  {
    from: `${PLACEHOLDER_PATH}/landing`,
    to: 'components/landing',
  },
];

export default {
  FILES,
  DIRECTORIES,
};
