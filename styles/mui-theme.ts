import { createTheme } from '@mui/material/styles'
import { Saira_Semi_Condensed } from "next/font/google"
import variables from './variables.module.scss'

const encodeSans = Saira_Semi_Condensed({
  weight: ['400', '600', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})


export const theme = createTheme({
  breakpoints: {
    values: {
      xs: +variables.xs,
      sm: +variables.sm,
      md: +variables.md,
      lg: +variables.lg,
      xl: +variables.xl,
    },
  },
  typography: {
    fontFamily: [
      encodeSans.style.fontFamily,
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.5rem'
    },
    h4: {
      fontSize: '1rem'
    }
  },
  palette: {
    primary: {
      main: variables.sejongRed,
    }
  }
})
