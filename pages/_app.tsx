import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Saira_Semi_Condensed} from '@next/font/google'
import '../styles/globals.scss'

const encodeSans = Saira_Semi_Condensed({
  weight: ['400', '800'],
  subsets: ['latin', 'vietnamese']
})

function App ({ Component, pageProps }: AppProps) {
  return (
    <main className={encodeSans.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(App)
