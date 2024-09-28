'use client';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shared/ui/popover';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';
import { useEffect, useMemo, useState } from 'react';
import chroma from 'chroma-js';
import { Button } from '@/components/shared/ui/button';
import {
  ColorThemeObject,
  complementaryColorThemes,
} from '@/components/bricks/theme/color-themes';
import { CheckIcon, ChevronsUpDownIcon, CopyIcon, Loader2 } from 'lucide-react';
import { Separator } from '@/components/shared/ui/separator';
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
import { getShipixenThemeJs } from '@/components/bricks/theme/code-stringifiers/get-theme-js-file';
import { useThemeStore } from '@/components/bricks/state/theme-state';
import { getStyleString } from '@/components/bricks/theme/code-stringifiers/get-style-string';

export const ThemeSelector = ({
  className,
  onThemeChanged,
  showCopyCodeButton = true, // Show copy code button & overlay
  showChangeThemeLabel = true, // Show input label
}: {
  className?: string;
  onThemeChanged?: (theme: ColorThemeObject) => void;
  showCopyCodeButton?: boolean;
  showChangeThemeLabel?: boolean;
}) => {
  const stateThemeObject = useThemeStore((state) => state.themeObject);
  const stateSetThemeObject = useThemeStore((state) => state.setThemeObject);
  const stateFonts = useThemeStore((state) => state.fonts);
  const stateSetFonts = useThemeStore((state) => state.setFonts);
  const { default: fontFamilyDefault, display: fontFamilyDisplay } = stateFonts;

  const { currentTheme } = useThemeSwitch();
  const isDarkMode = currentTheme === 'dark';
  const [themeSelectorOpen, setThemeSelectorOpen] = useState(false);

  const [isClient, setIsClient] = useState(false);

  const theme = {
    primary: {
      lighter: stateThemeObject.colors.primary[3],
      light: stateThemeObject.colors.primary[4],
      main: stateThemeObject.colors.primary[5],
      dark: stateThemeObject.colors.primary[6],
      darker: stateThemeObject.colors.primary[7],
    },
    secondary: {
      lighter: stateThemeObject.colors.secondary[3],
      light: stateThemeObject.colors.secondary[4],
      main: stateThemeObject.colors.secondary[5],
      dark: stateThemeObject.colors.secondary[6],
      darker: stateThemeObject.colors.secondary[7],
    },
    primaryTailwindName: stateThemeObject.tailwindNames.primary,
    secondaryTailwindName: stateThemeObject.tailwindNames.secondary,
  };

  const themeStyleString = getStyleString({
    primary: theme.primary,
    secondary: theme.secondary,
  });

  const pickColorTheme = (
    theme: (typeof complementaryColorThemes)[0],
    index: number,
  ) => {
    stateSetThemeObject(theme);

    if (onThemeChanged) {
      onThemeChanged(theme);
    }
  };

  const mapColor = (color: string, index: number) => (
    <div
      className="w-4 h-4"
      key={color}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );

  const mapColors = (
    theme: (typeof complementaryColorThemes)[0],
    index?: number,
    selected?: boolean,
  ) => {
    const relevantPrimaryColors = [
      theme.colors.primary[3],
      theme.colors.primary[4],
      theme.colors.primary[5],
      theme.colors.primary[6],
      theme.colors.primary[7],
    ];

    const relevantSecondaryColors = [
      theme.colors.secondary[3],
      theme.colors.secondary[4],
      theme.colors.secondary[5],
      theme.colors.secondary[6],
      theme.colors.secondary[7],
    ];

    return (
      <div className="relative flex flex-wrap w-full h-full items-center justify-center">
        {isClient ? (
          <>
            {selected && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50">
                <CheckIcon className="h-6 w-6 text-white" />
              </div>
            )}
            {relevantPrimaryColors.map(mapColor)}
            {relevantSecondaryColors.map(mapColor)}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-500/10">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        )}
      </div>
    );
  };

  const formattedCodeString = getShipixenThemeJs(theme);

  // Create font URL for Google Fonts
  const fonts = useMemo(() => {
    // replace space with '+'
    const headingFont = fontFamilyDefault.name.replace(/ /g, '+');
    const displayFont = fontFamilyDisplay.name.replace(/ /g, '+');

    const headingFontWeights = fontFamilyDefault.variableFont
      ? `:wght@400..600`
      : `:wght@${(fontFamilyDefault.weights || [400, 600]).join(';')}`;
    const displayFontWeights =
      fontFamilyDisplay.variableFont || !fontFamilyDisplay.weights
        ? `:wght@400..600`
        : `:wght@${(fontFamilyDisplay.weights || [400, 600]).join(';')}`;

    return {
      fontUrl: `https://fonts.googleapis.com/css2?family=${headingFont}${headingFontWeights}&family=${displayFont}${displayFontWeights}&display=swap`,
      bodyFont: fontFamilyDefault,
      displayFont: fontFamilyDisplay,
    };
  }, [fontFamilyDefault, fontFamilyDisplay]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link href={fonts.fontUrl} rel="stylesheet" />

          <style>
            {`

          .fancy-glass, .fancy-glass-contrast {
            --glass-color: ${chroma(theme.secondary.main).rgb().join(',')}
          }

          .fancy-overlay::after {
            background-image: linear-gradient(
              54deg,
              ${theme.primary.dark} var(--fancy-y) var(--fancy-y),
              ${theme.secondary.dark} var(--fancy-x) var(--fancy-x)
            )
          }

          #preview, .preview {
            ${themeStyleString};
          }

          .preview .focus\\:ring-2:focus,
          #preview .focus\\:ring-2:focus {
            box-shadow: none!important;
            border-color: var(--primary-main)!important;
          }

          .preview .focus-visible\\:ring-2:focus-visible,
          #preview .focus-visible\\:ring-2:focus-visible {
            box-shadow: none!important;
            border-color: var(--primary-main)!important;
          }

          /* Fonts */
          #preview:not(.without-preview-styles) {
            --font-space-default: '${stateFonts.default.name}', sans-serif;
            --font-space-display: '${stateFonts.display.name}', sans-serif;
          }

          #preview .font-sans {
            font-family: var(--font-space-default);
          }

          /* Tailwind Overrides */
          ${
            !isDarkMode
              ? `
                #preview, .preview {
                  --background: 0 0% 100%;
                  --foreground: 240 10% 3.9%;
                  --card: 0 0% 100%;
                  --card-foreground: 240 10% 3.9%;
                  --popover: 0 0% 100%;
                  --popover-foreground: 240 10% 3.9%;
                  --primary-foreground: 355.7 100% 97.3%;
                  --secondary: 240 4.8% 95.9%;
                  --secondary-foreground: 240 5.9% 10%;
                  --muted: 240 4.8% 95.9%;
                  --muted-foreground: 240 3.8% 46.1%;
                  --accent: 240 4.8% 95.9%;
                  --accent-foreground: 240 5.9% 10%;
                  --destructive: 0 84.2% 60.2%;
                  --destructive-foreground: 0 0% 98%;
                  --border: 240 5.9% 90%;
                  --input: 240 5.9% 90%;
                  --radius: 0.5rem;
                }
              `
              : `
              #preview, .preview {
                --background: 20 14.3% 4.1%;
                --foreground: 0 0% 95%;
                --card: 24 9.8% 10%;
                --card-foreground: 0 0% 95%;
                --popover: 0 0% 9%;
                --popover-foreground: 0 0% 95%;
                --primary-foreground: 144.9 80.4% 10%;
                --secondary: 240 3.7% 15.9%;
                --secondary-foreground: 0 0% 98%;
                --muted: 0 0% 19%;
                --muted-foreground: 240 5% 64.9%;
                --accent: 12 6.5% 15.1%;
                --accent-foreground: 0 0% 98%;
                --destructive: 0 62.8% 30.6%;
                --destructive-foreground: 0 85.7% 97.3%;
                --border: 240 3.7% 15.9%;
                --input: 240 3.7% 15.9%;
              }
             `
          }
        `}
          </style>
        </>
      ) : null}

      <div
        className={cn(
          'w-full flex-grow flex flex-col lg:flex-row items-center gap-2 md:gap-4',
          className,
        )}
      >
        <Popover open={themeSelectorOpen} onOpenChange={setThemeSelectorOpen}>
          <PopoverTrigger asChild>
            <div className="w-full flex flex-col">
              {showChangeThemeLabel ? (
                <p className="text-sm text-muted-foreground">Change theme</p>
              ) : null}

              <Button
                variant="outline"
                role="combobox"
                aria-expanded={themeSelectorOpen}
                className="h-[2.5rem] mt-0.5 px-1 justify-between"
              >
                <div className="w-full flex items-center gap-0.5">
                  <div className="flex-shrink-0 w-[5rem] h-[2rem] rounded-md overflow-hidden">
                    {mapColors(stateThemeObject)}
                  </div>

                  <ChevronsUpDownIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </div>
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] max-h-[400px] overflow-y-auto">
            <div className="flex flex-wrap gap-1 overflow-x-auto">
              {complementaryColorThemes.map((theme, index) => (
                <div
                  key={theme.name}
                  className="flex-shrink-0 w-[5rem] h-[2rem] rounded-md overflow-hidden"
                >
                  <Button
                    type="button"
                    onClick={() => pickColorTheme(theme, index)}
                    variant="unstyled"
                    size="unsized"
                    className="relative flex flex-col items-center justify-between hover:opacity-80"
                  >
                    {mapColors(
                      theme,
                      index,
                      stateThemeObject.name === theme.name,
                    )}
                    {/* {theme.name} */}
                  </Button>
                </div>
              ))}

              <div className="w-full mt-4 flex items-center gap-2">
                <Button
                  size="sm"
                  variant={'outline'}
                  onClick={() => {
                    setThemeSelectorOpen(false);
                  }}
                >
                  Done
                </Button>

                <CopyButton size="sm" value={formattedCodeString} />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {showCopyCodeButton ? (
          <>
            <Separator orientation="vertical" className="hidden lg:flex h-16" />

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mt-auto">
                  <CopyIcon className="h-3 w-3 mr-2" />
                  Copy code
                </Button>
              </DialogTrigger>
              <DialogContent className="md:max-w-md lg:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Copy code</DialogTitle>
                </DialogHeader>

                <DialogDescription>
                  Paste the code below in your Shipixen app under:{' '}
                  <code>data/config/colors.js</code>. <br /> See{' '}
                  <a
                    href="/boilerplate-documentation/configuration#colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    the docs
                  </a>{' '}
                  for more info.
                </DialogDescription>

                <CopyButton value={formattedCodeString} className="mt-4" />

                <div className="grid gap-4 py-4">
                  <CodeEditor
                    codeLanguage="javascript"
                    codeString={formattedCodeString}
                    height="380px"
                    // className="min-h-[450px]"
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Done</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        ) : null}
      </div>
    </>
  );
};
