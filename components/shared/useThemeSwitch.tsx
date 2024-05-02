import { useTheme } from 'next-themes';

export const useThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const isSystem = theme === 'system';

  const isDark =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = isSystem ? (isDark ? 'dark' : 'light') : theme;

  const updateTheme = () => {
    if (isSystem) {
      if (isDark) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    } else {
      if (theme === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    }
  };

  return {
    currentTheme,
    updateTheme,
  };
};
