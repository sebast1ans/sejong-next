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

function App ({ Component, pageProps }: AppProps) {
  const authState = useAuthState(auth)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <UserContext.Provider value={[...authState]}>
          <Navigation/>
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
