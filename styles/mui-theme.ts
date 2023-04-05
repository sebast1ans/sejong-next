import { createTheme } from '@mui/material/styles'
import { Saira_Semi_Condensed } from '@next/font/google'
import variables from './variables.module.scss'

const encodeSans = Saira_Semi_Condensed({
  weight: ['400', '500', '800'],
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
  },
  palette: {
    primary: {
      main: variables.sejongRed,
    }
  }
})