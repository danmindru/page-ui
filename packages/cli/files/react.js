import { PLACEHOLDER_PATH } from './consts/placeholder.js';

export const FILES = [
  {
    from: `${PLACEHOLDER_PATH}/tailwind.config.js`,
    to: 'tailwind.config.js',
  },

  {
    from: `${PLACEHOLDER_PATH}/data/config/colors.js`,
    to: 'data/config/colors.js',
  },

  {
    from: `${PLACEHOLDER_PATH}/lib/utils.ts`,
    to: 'lib/utils.ts',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/ui/accordion.tsx`,
    to: 'components/shared/ui/accordion.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/ui/button.tsx`,
    to: 'components/shared/ui/button.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/ui/glow-bg.tsx`,
    to: 'components/shared/ui/glow-bg.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/react/shared/Image.tsx`,
    to: 'components/shared/Image.tsx',
  },

  {
    from: `${PLACEHOLDER_PATH}/shared/VideoPlayer.tsx`,
    to: 'components/shared/VideoPlayer.tsx',
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
