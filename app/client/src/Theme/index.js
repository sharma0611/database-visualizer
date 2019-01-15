// @flow
export const colors = {
    black: ['#171E27', '#283444', '#3C4857'], // Darkest to lightest
    white: '#fff',
    offwhite: '#fcfcfc',
    blue: ['#03A9F4', '#00b2ff', '#f5f7ff']
}

// theme that gets imported into rebass
const theme = {
    fonts: {
        sans: 'system-ui, sans-serif',
        mono: 'Menlo, monospace'
    },
    fontSizes: [11, 13, 15, 16, 21, 24, 27, 36, 48, 52],
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700
    },
    boxShadow: {
        medium: '2px 2px 5px'
    },
    breakpoints: [600, 900, 1200, 1800],
    colors,
    space: [0, 2, 4, 8, 16, 24, 32, 48, 80, 110, 128],
    radii: {
        xSmall: 2,
        small: 4,
        medium: 8,
        normal: 16,
        large: 32
    },
    lineHeights: {
        normal: '1.5em',
        medium: '1.7em',
        tall: '2em'
    },
    borderWidth: {
        small: 1,
        medium: 2,
        large: 4
    }
}

export const padding = {
    // maps to space array
    xSmall: 1, // 2px
    small: 2, // 4px
    normal: 3, // 8px
    medium: 4, // 16px
    large: 5, // 24px
    xLarge: 6, // 32px
    xxLarge: 7, // 48px
    xxxLarge: 8, // 80px
    xxxxLarge: 9 // 110px
}

export const fontSize = {
    // maps to fontSizes array
    titleL: 8,
    titleM: 7,
    titleS: 6,
    heading: 5,
    subHeading: 1,
    body: 2,
    chat: 2,
    caption: 1,
    tiny: 0
}

export default theme
