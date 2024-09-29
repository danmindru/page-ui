import { FontDefinition } from '@/components/bricks/theme/font-pairing';

const getFontName = (fontName: string) => {
  return fontName.replace(/ /g, '_');
};

const getFontDefinition = (
  fontDefinition: FontDefinition,
  type: 'default' | 'display',
) => {
  const fontName = getFontName(fontDefinition.name);
  const variableName = type === 'default' ? 'baseFont' : 'displayFont';
  const cssCustomPropertyName =
    type === 'default' ? '--font-space-default' : '--font-space-display';

  if (fontDefinition.variableFont) {
    return `const ${variableName} = ${fontName}({
  subsets: ['latin'],
  display: 'swap',
  variable: '${cssCustomPropertyName}'
});`;
  }

  return `const ${variableName} = ${fontName}({
  subsets: ['latin'],
  display: 'swap',
  variable: '${cssCustomPropertyName}',
  weight: [${fontDefinition.weights
    ?.map((weight) => `'${weight}'`)
    ?.join(', ')}]
});`;
};

export const getNextjsFontImportString = (fonts: {
  default: FontDefinition;
  display: FontDefinition;
}) => {
  const fontImportNames =
    fonts.default.name === fonts.display.name
      ? getFontName(fonts.default.name)
      : [getFontName(fonts.default.name), getFontName(fonts.display.name)].join(
          ', ',
        );

  return `import { ${fontImportNames} } from 'next/font/google';`;
};

export const getNextjsHtmlFontString = () => {
  return `// Wrap your layout in:
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html className={\`\${defaultFontClassName} \${headingFontClassName}\`}>
    // ...
  </html>
}`;
};

export const getNextjsFontString = (fonts: {
  default: FontDefinition;
  display: FontDefinition;
}) => {
  return `${getFontDefinition(fonts.default, 'default')}

${getFontDefinition(fonts.display, 'display')}`;
};
