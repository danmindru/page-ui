import { DEFAULT_COLORS } from '@/components/bricks/theme/default-colors';

export const getShipixenThemeJs = (themeValues: typeof DEFAULT_COLORS) => {
  return `/* Configure colors at https://shipixen.com/color-theme-explorer-shadcn */
const colors = {
  primary: {
    lighter: "${themeValues.primary.lighter}",
    light: "${themeValues.primary.light}",
    main: "${themeValues.primary.main}",
    dark: "${themeValues.primary.dark}",
    darker: "${themeValues.primary.darker}",
  },
  secondary: {
    lighter: "${themeValues.secondary.lighter}",
    light: "${themeValues.secondary.light}",
    main: "${themeValues.secondary.main}",
    dark: "${themeValues.secondary.dark}",
    darker: "${themeValues.secondary.darker}",
  },
};

module.exports = { colors };
`;
};
