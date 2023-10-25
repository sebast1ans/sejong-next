import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Saira_Semi_Condensed } from "next/font/google"
import variables from './variables.module.scss'

const encodeSans = Saira_Semi_Condensed({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})


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
    }
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
