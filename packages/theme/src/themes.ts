import themeBase from './base'

export const themeLight = {
  ...themeBase,
  colors: {
    ...themeBase.colors,

    secondary: '#273852',
    secondaryHover: '#212f45',
    secondaryContrast: '#fff',

    background: '#f2f4f6',
    foreground: '#fff',

    overlay: 'rgba(0, 0, 0, 0.5)',

    shadowLight: 'rgba(39, 56, 82, 0.08)',
    shadowDark: 'rgba(0, 0, 0, .25)',

    text: '#273852',
    textSecondary: '#7a8aa0',

    border: '#d1d8df',
    borderHover: '#b1b7bd',

    controlBg: '#fff',
    inputPlaceholder: 'rgba(39, 56, 82, 0.3)',
  },
} as const

export const themeDark = {
  ...themeBase,
  colors: {
    ...themeBase.colors,

    secondary: 'rgba(255, 255, 255, .8)',
    secondaryHover: '#fff',
    secondaryContrast: '#273852',

    background: '#1c1c21',
    foreground: '#34343d',

    overlay: 'rgba(0, 0, 0, 0.5)',

    shadowLight: 'rgba(0, 0, 0, .25)',
    shadowDark: 'rgba(0, 0, 0, .5)',

    text: '#fff',
    textSecondary: 'rgba(255, 255, 255, .8)',

    border: '#484855',
    borderHover: '#7a8aa0',

    controlBg: '#2f2f37',
    inputPlaceholder: 'rgba(255, 255, 255, 0.3)',
  },
} as const

export const themeDefault = themeLight
