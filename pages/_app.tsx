import { DocumentData } from 'firebase/firestore'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NewsContext, UserContext } from '../lib/context'
import { auth } from '../lib/firebase'
import { getArticlesData } from '../lib/getArticlesData'
import { theme } from '../styles/mui-theme'
import { appWithTranslation } from 'next-i18next'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { CssBaseline } from '@mui/material'
import '../styles/globals.scss'

function App ({ Component, pageProps }: AppProps) {
  const authState = useAuthState(auth)
  const [articlesData, setArticlesData] = useState<DocumentData[]>([])

  useEffect(() => {
    (async () => {
      const data = await getArticlesData()
      setArticlesData(data)
    })()
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <UserContext.Provider value={[...authState]}>
          <Navigation/>
          <main>
            <NewsContext.Provider value={[...articlesData]}>
              <Component {...pageProps} />
            </NewsContext.Provider>
          </main>
          <Footer/>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
