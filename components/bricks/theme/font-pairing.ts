export interface FontDefinition {
  name: string;
  variableFont?: boolean;
  weights?: number[];
}

export interface FontPairing {
  display: FontDefinition;
  default: FontDefinition;
}

export const FONT_CATEGORIES = {
  MODERN: 'Modern',
  ELEGANT: 'Elegant',
  BOLD: 'Daring',
};

export const FONT_PAIRINGS: FontPairing[] = [
  // 0
  {
    display: {
      name: 'Nunito Sans',
      variableFont: true,
    },
    default: {
      name: 'Nunito Sans',
      variableFont: true,
    },
  },

  // 1
  {
    display: {
      name: 'IBM Plex Sans Condensed',
      variableFont: false,
      weights: [400, 600],
    },
    default: {
      name: 'IBM Plex Sans',
      variableFont: false,
      weights: [400],
    },
  },

  // 2
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

  // 3
  {
    display: {
      name: 'Barlow Condensed',
      variableFont: false,
      weights: [400, 600],
    },
    default: {
      name: 'Montserrat',
      variableFont: true,
    },
  },

  // 4
  {
    display: {
      name: 'Inter',
      variableFont: true,
    },
    default: {
      name: 'Inter',
      variableFont: true,
    },
  },

  // 5
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

  // 6
  {
    display: {
      name: 'Merriweather Sans',
      variableFont: true,
    },
    default: {
      name: 'Poppins',
      variableFont: false,
      weights: [400, 600],
    },
  },

  // 7
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

  // 8
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

  // 9
  {
    display: {
      name: 'Playfair Display',
      variableFont: true,
    },
    default: {
      name: 'Lato',
      variableFont: false,
      weights: [400, 700],
    },
  },

  // 10
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

  // 11
  {
    display: {
      name: 'Roboto Serif',
      variableFont: true,
    },
    default: {
      name: 'Roboto Slab',
      variableFont: true,
    },
  },

  // 12
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

  // 13
  {
    display: {
      name: 'Source Serif 4',
      variableFont: false,
      weights: [400, 600],
    },
    default: {
      name: 'Inter',
      variableFont: true,
    },
  },

  // 14
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

  // 15
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
];

export const allFontsByCategory = [
  {
    name: FONT_CATEGORIES.MODERN,
    values: [
      FONT_PAIRINGS[4],
      FONT_PAIRINGS[14],
      FONT_PAIRINGS[0],
      FONT_PAIRINGS[3],
      FONT_PAIRINGS[6],
    ],
  },

  {
    name: FONT_CATEGORIES.ELEGANT,
    values: [
      FONT_PAIRINGS[11],
      FONT_PAIRINGS[13],
      FONT_PAIRINGS[9],
      FONT_PAIRINGS[5],
      FONT_PAIRINGS[2],
    ],
  },

  {
    name: FONT_CATEGORIES.BOLD,
    values: [
      FONT_PAIRINGS[12],
      FONT_PAIRINGS[10],
      FONT_PAIRINGS[7],
      FONT_PAIRINGS[8],
      FONT_PAIRINGS[15],
      FONT_PAIRINGS[1],
    ],
  },
];
