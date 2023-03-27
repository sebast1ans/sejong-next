import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { Saira_Semi_Condensed } from '@next/font/google'
import '../styles/globals.scss'

const encodeSans = Saira_Semi_Condensed({
  weight: ['400', '500', '800'],
  subsets: ['latin', 'vietnamese']
})

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={encodeSans.className}>
        <Navigation/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  )
}

export default appWithTranslation(App)
