import type { AppProps } from 'next/app'
import { appWithTranslation, i18n } from 'next-i18next'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { Saira_Semi_Condensed } from '@next/font/google'
import '../styles/globals.scss'

const encodeSans = Saira_Semi_Condensed({
  weight: ['400', '500', '800'],
  subsets: ['latin', 'vietnamese']
})


const namespaces = {
  Home: 'home-page-navigation',
}

// TODO extend nav items with functions (e.g. for logout)
const navigationItems = (componentName: string) => {
  switch (componentName) {
    case 'Home':
      return Object.keys(i18n?.getResourceBundle('cs', namespaces.Home) || {})
    default:
      return []
  }
}

function App ({ Component, pageProps }: AppProps) {
  const componentName = Component.name

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${encodeSans.style.fontFamily};
        }
      `}
      </style>
      <Navigation
        navigationItems={navigationItems(componentName)}
        namespace={namespaces[componentName as keyof typeof namespaces]}/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}

export default appWithTranslation(App)
