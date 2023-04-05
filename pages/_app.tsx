import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../styles/mui-theme'
import { appWithTranslation, i18n } from 'next-i18next'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { CssBaseline } from '@mui/material'
import '../styles/globals.scss'

const namespaces = {
  Home: 'home-page-navigation',
}

// TODO extend nav items with functions (e.g. for logout)
const navigationItems = (componentName?: string) => {
  switch (componentName) {
    case 'Home':
      return Object.keys(i18n?.getResourceBundle('cs', namespaces.Home) || [])
    default:
      return []
  }
}

function App({Component, pageProps}: AppProps) {
  const componentName = Component.displayName

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navigation
          navigationItems={navigationItems(componentName)}
          namespace={namespaces[componentName as keyof typeof namespaces]}/>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
