import { complementaryColorThemes } from '@/components/bricks/theme/color-themes';
import { FontDefinition } from '@/components/bricks/theme/font-pairing';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const DEFAULT_THEME_INDEX = 22;

export const useThemeStore = create<{
  themeObject: (typeof complementaryColorThemes)[0];
  fonts: {
    default: FontDefinition;
    display: FontDefinition;
  };
  setFonts: (fonts: {
    default: FontDefinition;
    display: FontDefinition;
  }) => void;
  setThemeObject: (themeObject: (typeof complementaryColorThemes)[0]) => void;
  setThemeByIndex: (index: number) => void;
}>()(
  devtools(
    persist(
      (set, get) => {
        return {
          themeObject: complementaryColorThemes[DEFAULT_THEME_INDEX],

          fonts: {
            default: {
              name: 'Inter',
              variableFont: true,
            },
            display: {
              name: 'Inter',
              variableFont: true,
            },
          },

          setFonts: (fonts) => {
            set({
              fonts,
            });
          },

          setThemeObject: (themeObject) => {
            set({
              themeObject,
            });
          },

          setThemeByIndex: (index) => {
            set({
              themeObject: complementaryColorThemes[index],
            });
          },
        };
      },
      {
        name: 'colorTheme',
      },
    ),
  ),
);
