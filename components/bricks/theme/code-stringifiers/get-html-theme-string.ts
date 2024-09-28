export const getHtmlTheme = (colors: {
  primary: Record<string, string>;
  secondary: Record<string, string>;
}) => {
  return `:root {
  --primary-lighter: ${colors.primary.lighter};
  --primary-light: ${colors.primary.light};
  --primary-main: ${colors.primary.main};
  --primary-dark: ${colors.primary.dark};
  --primary-darker: ${colors.primary.darker};

  --secondary-lighter: ${colors.secondary.lighter};
  --secondary-light: ${colors.secondary.light};
  --secondary-main: ${colors.secondary.main};
  --secondary-dark: ${colors.secondary.dark};
  --secondary-darker: ${colors.secondary.darker};
}`;
};
