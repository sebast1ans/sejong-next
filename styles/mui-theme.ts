import { PaletteColorOptions } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Saira_Semi_Condensed } from "next/font/google"
import variables from './variables.module.scss'

declare module '@mui/material/styles' {
  interface CustomPalette {
   white: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const encodeSans = Saira_Semi_Condensed({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

const { palette } = createTheme()
const { augmentColor } = palette
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } })

export let theme = createTheme({
  typography: {
    fontFamily: [
      encodeSans.style.fontFamily,
      'sans-serif'
    ].join(','),
    fontWeightBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2.5rem'
    },
    h3: {
      fontSize: '2rem'
    },
    h4: {
      fontSize: '1.7rem'
    },
  },
  breakpoints: {
    values: {
      xs: +variables.xs,
      sm: +variables.sm,
      md: +variables.md,
      lg: +variables.lg,
      xl: +variables.xl,
    },
  },
  palette: {
    primary: {
      main: variables.sejongRed,
    },
    white: createColor('#fff')
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  }
})

theme = responsiveFontSizes(theme)
