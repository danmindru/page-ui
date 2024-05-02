import { complementaryColorThemes } from '@/components/bricks/theme/color-themes';
import {
  DEFAULT_COLORS,
  LIME_FUCHSIA_COLORS,
} from '@/components/bricks/theme/default-colors';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const DEFAULT_THEME_INDEX = 22;

export const useThemeStore = create<{
  themeObject: (typeof complementaryColorThemes)[0];
  setThemeObject: (themeObject: (typeof complementaryColorThemes)[0]) => void;
  setThemeByIndex: (index: number) => void;
}>()(
  devtools(
    persist(
      (set, get) => {
        return {
          themeObject: complementaryColorThemes[DEFAULT_THEME_INDEX],

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
