import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../styles/mui-theme'
import { appWithTranslation, i18n } from 'next-i18next'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { CssBaseline } from '@mui/material'
import '../styles/globals.scss'
import { SignInButton } from './login'
import { SignOutButton } from './portal'
import { useRouter } from 'next/router'

const namespaces = {
  Home: 'home-page-navigation',
}

const navigationItems = (componentName?: string) => {
  const router = useRouter()
  switch (componentName) {
    case 'Home':
      return Object.keys(i18n?.getResourceBundle('cs', namespaces.Home))
    case 'Login':
      return [<SignInButton router={router} />]
    case 'Portal':
      return [<SignOutButton router={router} />]
    default:
      return []
  }
}

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navigation
          navigationItems={navigationItems(Component.displayName)}
          namespace={namespaces[Component.displayName as keyof typeof namespaces]}/>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
