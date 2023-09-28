import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'
import { theme } from '../styles/mui-theme'
import { appWithTranslation, i18n } from 'next-i18next'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { CssBaseline } from '@mui/material'
import '../styles/globals.scss'
import { SignOutButton } from './portal'

const namespaces = {
  Home: 'home-page-navigation',
}

const navigationItems = (componentName?: string) => {
  switch (componentName) {
    case 'Home':
      return Object.keys(i18n?.getResourceBundle('cs', namespaces.Home))
    case 'Login':
      return []
    case 'Portal':
      return [<SignOutButton/>]
    default:
      return []
  }
}

function App ({ Component, pageProps }: AppProps) {
  const authState = useAuthState(auth)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <UserContext.Provider value={[...authState]}>
          <Navigation
            navigationItems={navigationItems(Component.displayName)}
            namespace={namespaces[Component.displayName as keyof typeof namespaces]}/>
          <main>
            <Component {...pageProps} />
          </main>
          <Footer/>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
