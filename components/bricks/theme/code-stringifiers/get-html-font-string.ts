import { FontDefinition } from '@/components/bricks/theme/font-pairing';
import { getGoogleFontDefinition } from '@/components/bricks/theme/get-google-font-definition';

export const getHtmlFontString = (fonts: {
  default: FontDefinition;
  display: FontDefinition;
}) => {
  const fontDefinition = getGoogleFontDefinition({
    fontFamilyDisplay: fonts.display,
    fontFamilyDefault: fonts.default,
  });

  return `<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link href="${fontDefinition.fontUrl}" rel="stylesheet" />`;
};

export const getHtmlFontStyleString = (fonts: {
  default: FontDefinition;
  display: FontDefinition;
}) => {
  return `:root {
        --font-family-default: "${fonts.default.name}", ui-sans-serif, system-ui, -apple-system, sans-serif;
        --font-family-display: "${fonts.display.name}", ui-sans-serif, system-ui, -apple-system, sans-serif;
      }

      body {
        font-family: var(--font-family-default);
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-family-display);
      }
    `;
};

export const getHtmlFontPageString = (fonts: {
  default: FontDefinition;
  display: FontDefinition;
}) => {
  return `<!doctype html>
<html lang="en">
  <head>
    ${getHtmlFontString(fonts)}
    <style>
      ${getHtmlFontStyleString(fonts)}
    <!-- ... -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
};
