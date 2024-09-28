'use client';

import { cn } from '@/lib/utils';
import { CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/shared/ui/dialog';
import { CodeEditor } from '@/components/shared/CodeEditor';
import { CopyButton } from '@/components/shared/ui/copy-button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/shared/ui/tabs';
import { FontDefinition } from '@/components/bricks/theme/font-pairing';
import { ColorThemeObject } from '@/components/bricks/theme/color-themes';
import { getShipixenThemeJs } from '@/components/bricks/theme/code-stringifiers/get-theme-js-file';
import { getShadcnTheme } from '@/components/bricks/theme/code-stringifiers/get-shadcn-ui-theme-string';
import { getHtmlTheme } from '@/components/bricks/theme/code-stringifiers/get-html-theme-string';
import {
  getNextjsFontImportString,
  getNextjsFontString,
  getNextjsHtmlFontString,
} from '@/components/bricks/theme/code-stringifiers/get-nextjs-font-string';
import {
  getHtmlFontPageString,
  getHtmlFontStyleString,
} from '@/components/bricks/theme/code-stringifiers/get-html-font-string';
import { stripIndents } from 'common-tags';

const COPY_TYPES = {
  NEXTJS: 'nextjs',
  REACT: 'react',
  HTML: 'html',
  SHADCN_UI: 'shadcnui',
};

type CopyType = (typeof COPY_TYPES)[keyof typeof COPY_TYPES];

const ThemeCodeEditor = ({
  fonts,
  themeObject,
  copyType,
  className = '',
}: {
  fonts: {
    default: FontDefinition;
    display: FontDefinition;
  };
  themeObject: ColorThemeObject;
  copyType: CopyType;
  className?: string;
}) => {
  let formattedCodeStrings: {
    formattedCodeString: string;
    fileName: string;
    language?: string;
  }[] = [];

  const theme = {
    primary: {
      lighter: themeObject.colors.primary[3],
      light: themeObject.colors.primary[4],
      main: themeObject.colors.primary[5],
      dark: themeObject.colors.primary[6],
      darker: themeObject.colors.primary[7],
    },
    secondary: {
      lighter: themeObject.colors.secondary[3],
      light: themeObject.colors.secondary[4],
      main: themeObject.colors.secondary[5],
      dark: themeObject.colors.secondary[6],
      darker: themeObject.colors.secondary[7],
    },
    primaryTailwindName: themeObject.tailwindNames.primary,
    secondaryTailwindName: themeObject.tailwindNames.secondary,
  };

  switch (copyType) {
    case COPY_TYPES.NEXTJS:
      formattedCodeStrings = [
        {
          formattedCodeString: `${getNextjsFontImportString(
            fonts,
          )}\n\n${getNextjsFontString(fonts)}\n\n${getNextjsHtmlFontString()}`,
          fileName: 'app/layout.tsx',
        },
        {
          formattedCodeString: getShipixenThemeJs(theme),
          fileName: 'data/config/colors.js',
        },
        {
          formattedCodeString: getHtmlTheme(theme),
          fileName:
            'globals.css (optional if you are NOT using Shipixen, add css variables)',
          language: 'css',
        },
      ];
      break;

    case COPY_TYPES.REACT:
      formattedCodeStrings = [
        {
          formattedCodeString: getHtmlFontPageString(fonts),
          fileName: 'index.html',
          language: 'html',
        },
        {
          formattedCodeString: getHtmlTheme(theme),
          fileName: 'index.css',
          language: 'css',
        },
      ];
      break;

    case COPY_TYPES.SHADCN_UI:
      formattedCodeStrings = [
        {
          formattedCodeString: `${getNextjsFontImportString(
            fonts,
          )}\n\n${getNextjsFontString(fonts)}\n\n${getNextjsHtmlFontString()}`,
          fileName: 'app/layout.tsx',
        },
        {
          formattedCodeString: `${getShadcnTheme(theme)}\n${stripIndents(
            getHtmlFontStyleString(fonts),
          )}`,
          fileName: 'globals.css',
          language: 'css',
        },
      ];
      break;

    case COPY_TYPES.HTML:
      formattedCodeStrings = [
        {
          formattedCodeString: getHtmlFontPageString(fonts),
          fileName: 'index.html',
        },
        {
          formattedCodeString: `${getHtmlTheme(theme)}\n\n${stripIndents(
            getHtmlFontStyleString(fonts),
          )}`,
          fileName: 'index.css',
          language: 'css',
        },
      ];
      break;

    default:
      break;
  }

  return (
    <>
      {formattedCodeStrings.map(
        ({ formattedCodeString, fileName, language }, index) => {
          return (
            <div key={index}>
              <div className="grid gap-4 py-4">
                <div className="-mb-12 p-3 pb-6 bg-gray-100 dark:bg-black rounded-tr-md rounded-tl-md">
                  <p className="text-xs text-gray-500">{fileName}</p>
                </div>

                <CodeEditor
                  codeLanguage={language || 'typescript'}
                  codeString={formattedCodeString}
                  height="380px"
                  className={cn(className)}
                />
              </div>
              <CopyButton value={formattedCodeString} className="mt-2 w-full" />
            </div>
          );
        },
      )}
    </>
  );
};

export const CopyThemeCode = ({
  className = '',
  fonts,
  themeObject,
}: {
  className?: string;
  fonts: {
    default: FontDefinition;
    display: FontDefinition;
  };
  themeObject: ColorThemeObject;
}) => {
  const [copyType, setCopyType] = useState(COPY_TYPES.NEXTJS);

  return (
    <div className={cn('flex-col', className)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            size="sm"
            className={cn('relative flex gap-1', className)}
          >
            <CopyIcon className="h-3 w-3 mr-1" />
            <span>Copy</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-2xl lg:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Copy code</DialogTitle>
            <DialogDescription>
              Used fonts:{' '}
              <span className="font-semibold">{fonts.default.name}</span>
              {fonts.default.name !== fonts.display.name ? (
                <span className="font-semibold">, {fonts.display.name}</span>
              ) : null}
              <br />
              Closest TailwindCSS colors:{' '}
              <span className="font-semibold">
                {themeObject.tailwindNames.primary}
              </span>
              <span className="font-semibold">
                , {themeObject.tailwindNames.secondary}
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-auto">
            <Tabs
              defaultValue={copyType}
              onValueChange={(tabId: string) => {
                setCopyType(tabId);
              }}
            >
              <TabsList className="w-full flex md:grid md:grid-cols-4 justify-start overflow-x-auto overflow-y-hidden mt-4">
                <TabsTrigger value={COPY_TYPES.NEXTJS}>
                  Shipixen / Next.js
                </TabsTrigger>
                <TabsTrigger value={COPY_TYPES.REACT}>React</TabsTrigger>
                <TabsTrigger value={COPY_TYPES.SHADCN_UI}>
                  Shadcn UI
                </TabsTrigger>
                <TabsTrigger value={COPY_TYPES.HTML}>HTML / JS</TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value={COPY_TYPES.NEXTJS}>
                  Viewing code for Shipixen / Next.js
                  <DialogDescription>
                    Add the font definitions to your layout and update the theme
                    colors.
                  </DialogDescription>
                </TabsContent>

                <TabsContent value={COPY_TYPES.REACT}>
                  Viewing code for React
                  <DialogDescription>
                    Add the link href to your HTML file + CSS variables to your
                    styles.
                  </DialogDescription>
                </TabsContent>

                <TabsContent value={COPY_TYPES.SHADCN_UI}>
                  Viewing code for Shadcn UI
                  <DialogDescription>
                    Add the font definitions to your layout and update the CSS
                    variables.
                  </DialogDescription>
                </TabsContent>

                <TabsContent value={COPY_TYPES.HTML}>
                  Viewing code for HTML / JS
                  <DialogDescription>
                    Add the link href to your HTML file + CSS variables to your
                    styles.
                  </DialogDescription>
                </TabsContent>
              </div>
            </Tabs>

            <ThemeCodeEditor
              copyType={copyType}
              fonts={fonts}
              themeObject={themeObject}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Done</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
