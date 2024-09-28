import chroma from 'chroma-js';
import { DEFAULT_COLORS } from '@/components/bricks/theme/default-colors';

export const getStyleString = (
  colorThemeValues: Omit<
    typeof DEFAULT_COLORS,
    'primaryTailwindName' | 'secondaryTailwindName'
  >,
) => {
  const style: string[] = [];

  Object.keys(colorThemeValues).map((variant) => {
    return Object.keys(colorThemeValues[variant]).map((color) => {
      const value = colorThemeValues[variant][color];
      const rgbValue = chroma(value).rgb().join(',');

      style.push(`--${variant}-${color}-hex: ${value}`);
      style.push(`--${variant}-${color}: ${rgbValue}`);
    });
  });

  return style.join(';');
};
