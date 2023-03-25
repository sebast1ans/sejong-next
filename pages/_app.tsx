import type { AppProps } from 'next/app'
import { Saira_Semi_Condensed} from '@next/font/google'
import '../styles/globals.scss'

const encodeSans = Saira_Semi_Condensed({
  weight: ['400', '800'],
  subsets: ['latin', 'vietnamese']
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <main className={encodeSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
