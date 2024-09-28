import { FontDefinition } from '@/components/bricks/theme/font-pairing';

export const getGoogleFontDefinition = ({
  fontFamilyDisplay,
  fontFamilyDefault,
}: {
  fontFamilyDisplay: FontDefinition;
  fontFamilyDefault: FontDefinition;
}) => {
  // replace space with '+'
  const defaultFont = fontFamilyDefault.name.replace(/ /g, '+');
  const displayFont = fontFamilyDisplay.name.replace(/ /g, '+');

  const displayFontWeights =
    fontFamilyDisplay.variableFont || !fontFamilyDisplay.weights
      ? `:wght@400..600`
      : `:wght@${(fontFamilyDisplay.weights || [400, 600]).join(';')}`;
  const defaultFontWeights =
    fontFamilyDefault.variableFont || !fontFamilyDefault.weights
      ? `:wght@400..600`
      : `:wght@${(fontFamilyDefault.weights || [400, 600]).join(';')}`;

  return {
    fontUrl: `https://fonts.googleapis.com/css2?family=${displayFont}${displayFontWeights}&family=${defaultFont}${defaultFontWeights}&display=swap`,
    bodyFont: fontFamilyDefault,
    displayFont: fontFamilyDisplay,
  };
};
