import chroma from 'chroma-js';

export const getShadcnTheme = (colors: {
  primary: Record<string, string>;
  secondary: Record<string, string>;
}) => {
  return `@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: ${convertToHSL(colors.primary.main)};
    --primary-foreground: ${convertToHSL(colors.primary.lighter)};
    --secondary: ${convertToHSL(colors.secondary.main)};
    --secondary-foreground: ${convertToHSL(colors.secondary.lighter)};
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: ${convertToHSL(colors.primary.dark)};
    --destructive-foreground: ${convertToHSL(colors.primary.lighter)};
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: ${convertToHSL(colors.primary.main)};
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 20 14.3% 4.1%;
    --foreground: 0 0% 95%;
    --card: 24 9.8% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 95%;
    --primary: ${convertToHSL(colors.primary.darker)};
    --primary-foreground: ${convertToHSL(colors.primary.light)};
    --secondary: ${convertToHSL(colors.secondary.darker)};
    --secondary-foreground: ${convertToHSL(colors.secondary.light)};
    --muted: 0 0% 15%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 0 0% 98%;
    --destructive: ${convertToHSL(colors.primary.dark)};
    --destructive-foreground: ${convertToHSL(colors.primary.lighter)};
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: ${convertToHSL(colors.primary.darker)};
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
  `;
};

export const convertToHSL = (hex: string): string => {
  const hsl = chroma(hex).hsl();
  const h = hsl[0] || 0;
  const s = hsl[1] * 100; // chroma gives 0-1, we convert to percentage
  const l = hsl[2] * 100; // chroma gives 0-1, we convert to percentage
  return `${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}%`;
};
