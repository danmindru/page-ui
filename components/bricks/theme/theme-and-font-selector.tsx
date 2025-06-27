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
  expensiveColorThemes,
  freshColorThemes,
  minimalColorThemes,
  vividColorThemes,
} from '@/components/bricks/theme/color-themes';
import {
  CheckIcon,
  Loader2,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronsDownIcon,
} from 'lucide-react';

import {
  DEFAULT_THEME_INDEX,
  useThemeStore,
} from '@/components/bricks/state/theme-state';
import { getStyleString } from '@/components/bricks/theme/code-stringifiers/get-style-string';
import { FontPairing } from '@/components/bricks/theme/font-pairing';
import { CopyThemeCode } from '@/components/bricks/theme/copy-theme-code';
import { getGoogleFontDefinition } from '@/components/bricks/theme/get-google-font-definition';
import { Separator } from '@/components/shared/ui/separator';

export const getDisplayFontName = (fontPairing: FontPairing) => {
  return fontPairing.display.name === fontPairing.default.name
    ? fontPairing.display.name
    : `${fontPairing.display.name} & ${fontPairing.default.name}`;
};

export const ThemeAndFontSelector = ({
  className,
  onThemeChanged,
  showCopyThemeCodeButton = false,
  showChangeThemeLabel = true, // Show input label
}: {
  className?: string;
  onThemeChanged?: (theme: ColorThemeObject) => void;
  showCopyThemeCodeButton?: boolean;
  showChangeThemeLabel?: boolean;
}) => {
  const stateThemeObject = useThemeStore((state) => state.themeObject);
  const stateSetThemeObject = useThemeStore((state) => state.setThemeObject);
  const stateFonts = useThemeStore((state) => state.fonts);
  const stateSetFonts = useThemeStore((state) => state.setFonts);
  const { default: fontFamilyDefault, display: fontFamilyDisplay } = stateFonts;
  const [showMoreThemes, setShowMoreThemes] = useState(false);

  const { currentTheme } = useThemeSwitch();
  const isDarkMode = currentTheme === 'dark';
  const [themeSelectorOpen, setThemeSelectorOpen] = useState(false);

  const [isClient, setIsClient] = useState(false);

  const themes = [
    complementaryColorThemes[DEFAULT_THEME_INDEX],
    vividColorThemes[0],
    expensiveColorThemes[0],

    freshColorThemes[3],
    vividColorThemes[4],
    expensiveColorThemes[4],

    minimalColorThemes[0],
    minimalColorThemes[4],
    minimalColorThemes[7],
    expensiveColorThemes[2],
    expensiveColorThemes[3],
    freshColorThemes[5],
  ];

  const moreThemes = [
    freshColorThemes[1],
    vividColorThemes[2],
    expensiveColorThemes[2],

    freshColorThemes[2],
    vividColorThemes[3],
    expensiveColorThemes[3],

    ...complementaryColorThemes.slice(1, 7),
    ...complementaryColorThemes.slice(24),
    vividColorThemes[9],
    ...complementaryColorThemes.slice(9, 16),
    ...complementaryColorThemes.slice(18, 22),
    vividColorThemes[11],
  ];

  const fontPairings: FontPairing[] = [
    {
      display: {
        name: 'DM Serif Display',
        variableFont: false,
        weights: [400],
      },
      default: {
        name: 'DM Sans',
        variableFont: true,
      },
    },
    {
      display: {
        name: 'Roboto Serif',
        variableFont: false,
        weights: [400, 600],
      },
      default: {
        name: 'Roboto Slab',
        variableFont: false,
        weights: [400],
      },
    },
    {
      display: {
        name: 'Karla',
        variableFont: true,
      },
      default: {
        name: 'Merriweather',
        variableFont: false,
        weights: [400, 700],
      },
    },
    {
      display: {
        name: 'Montserrat',
        variableFont: true,
      },
      default: {
        name: 'Hind',
        variableFont: false,
        weights: [400, 600],
      },
    },
    {
      display: {
        name: 'Roboto',
        variableFont: false,
        weights: [400, 700],
      },
      default: {
        name: 'Roboto Mono',
        variableFont: true,
      },
    },
    {
      display: {
        name: 'Rubik',
        variableFont: true,
      },
      default: {
        name: 'Roboto Serif',
        variableFont: true,
      },
    },
    {
      display: {
        name: 'Syne',
        variableFont: true,
      },
      default: {
        name: 'Inter',
        variableFont: true,
      },
    },
    {
      display: {
        name: 'Work Sans',
        variableFont: true,
      },
      default: {
        name: 'Merriweather',
        variableFont: false,
        weights: [400, 700],
      },
    },
    {
      display: {
        name: 'Oswald',
        variableFont: true,
      },
      default: {
        name: 'Source Sans 3', // Source Sans Pro
        variableFont: false,
        weights: [400, 600],
      },
    },
  ];

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

  const pickColorTheme = (theme: ColorThemeObject, index: number) => {
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
    theme: ColorThemeObject,
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

  // Create font URL for Google Fonts
  const fonts = useMemo(() => {
    return getGoogleFontDefinition({
      fontFamilyDisplay,
      fontFamilyDefault,
    });
  }, [fontFamilyDefault, fontFamilyDisplay]);

  const selectedFontImageName = `${fontFamilyDisplay.name.replace(
    / /g,
    '_',
  )}+${fontFamilyDefault.name.replace(/ /g, '_')}`;

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
          #preview:not(.without-preview-styles),
          .preview:not(.without-preview-styles){
            --font-space-default: '${stateFonts.default.name}', sans-serif;
            --font-space-display: '${stateFonts.display.name}', sans-serif;
          }

          #preview,
          .preview {
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
          'w-full h-full flex-grow flex flex-col lg:flex-row items-center gap-2 md:gap-4',
          className,
        )}
      >
        <Popover open={themeSelectorOpen} onOpenChange={setThemeSelectorOpen}>
          <PopoverTrigger asChild>
            <div className="w-full h-full flex flex-col">
              {showChangeThemeLabel ? (
                <p className="text-sm text-muted-foreground mb-1">
                  Change theme
                </p>
              ) : null}

              {isClient ? (
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={themeSelectorOpen}
                  className="relative h-full px-1 pl-2 justify-between overflow-hidden"
                >
                  <div className="w-full flex items-center gap-0.5">
                    <div className="relative flex-shrink-0 w-8 h-8">
                      {/* {getDisplayFontName(fontPairing)} */}
                      <div className="flex w-full h-full items-center justify-center">
                        <img
                          className="h-auto dark:invert"
                          src={`/static/images/font-pairings/thumbnails/${selectedFontImageName}.webp`}
                          alt={getDisplayFontName(stateFonts)}
                        />
                      </div>
                    </div>

                    <div className="absolute top-1 right-1 flex">
                      <div
                        className="rounded-full w-3 h-3 relative z-10 -mr-1.5 border border-solid border-white"
                        style={{
                          backgroundColor: stateThemeObject.colors.primary[5],
                        }}
                      ></div>

                      <div
                        className="rounded-full w-3 h-3 relative z-0 border border-solid border-white"
                        style={{
                          backgroundColor: stateThemeObject.colors.secondary[5],
                        }}
                      ></div>
                    </div>

                    <ChevronsDownIcon
                      className={cn(
                        'relative top-0.5 ml-auto self-end h-4 w-4 shrink-0 opacity-50 transition-all',
                        !themeSelectorOpen && 'transform rotate-180',
                      )}
                    />
                  </div>
                </Button>
              ) : (
                <div className="w-16 h-full flex items-center justify-center">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[285px] md:w-[380px] max-h-[400px] overflow-y-auto px-0">
            <div className="flex flex-wrap justify-center gap-1 overflow-x-auto">
              {/* fonts */}
              <p className="w-full flex gap-2 justify-between text-xs mb-2 px-4">
                <span className="opacity-100">Fonts</span>
                <span className="opacity-50 truncate">
                  {getDisplayFontName(stateFonts)}
                </span>
              </p>

              <div className="w-full flex overflow-auto gap-2 no-scrollbar px-4">
                {fontPairings.map((fontPairing, index) => {
                  const fontImageName = `${fontPairing.display.name.replace(
                    / /g,
                    '_',
                  )}+${fontPairing.default.name.replace(/ /g, '_')}`;

                  const isSelected =
                    stateFonts.display.name === fontPairing.display.name &&
                    stateFonts.default.name === fontPairing.default.name;

                  return (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-16 h-16"
                    >
                      {/* {getDisplayFontName(fontPairing)} */}
                      <Button
                        onClick={() => {
                          stateSetFonts(fontPairing);
                        }}
                        className="flex w-full h-full items-center justify-center bg-gray-500/10 border border-solid border-transparent hover:border-gray-500/20"
                        variant="ghost"
                      >
                        <img
                          className="h-auto dark:invert"
                          src={`/static/images/font-pairings/thumbnails/${fontImageName}.webp`}
                          alt={getDisplayFontName(fontPairing)}
                        />

                        {isSelected && (
                          <div className="rounded-md absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50">
                            <CheckIcon className="h-6 w-6 text-white" />
                          </div>
                        )}
                      </Button>
                    </div>
                  );
                })}
              </div>

              <hr className="w-full border-transparent my-4" />

              {/* main themes */}
              <p className="w-full flex gap-2 justify-between text-xs mb-2 px-4">
                <span className="opacity-100">Themes</span>
                <span className="opacity-50">{stateThemeObject.name}</span>
              </p>

              <div className="w-full flex flex-wrap gap-1 px-4">
                {themes.map((theme, index) => (
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
              </div>

              {/* other themes */}
              {showMoreThemes ? (
                <>
                  <hr className="w-full border-t border-grey-500/20 my-4" />

                  <div className="w-full flex flex-wrap gap-1 px-4">
                    {moreThemes.map((theme, index) => (
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
                  </div>
                </>
              ) : null}

              <Button
                onClick={() => setShowMoreThemes(!showMoreThemes)}
                variant="ghost"
                className={cn(
                  'mx-4 w-full flex items-center justify-center gap-1 mt-0 hover:bg-gray-500/10 h-6 rounded-md',
                )}
              >
                {showMoreThemes ? (
                  <ChevronUpIcon className="h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4" />
                )}
              </Button>

              <div className="w-full mt-4 flex items-center justify-between gap-2 px-4">
                <CopyThemeCode
                  fonts={stateFonts}
                  themeObject={stateThemeObject}
                />

                <Button
                  size="sm"
                  variant={'outline'}
                  onClick={() => {
                    setThemeSelectorOpen(false);
                  }}
                >
                  Done
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {showCopyThemeCodeButton ? (
          <>
            <Separator orientation="vertical" className="hidden lg:flex h-16" />

            <CopyThemeCode fonts={stateFonts} themeObject={stateThemeObject} />
          </>
        ) : null}
      </div>
    </>
  );
};
