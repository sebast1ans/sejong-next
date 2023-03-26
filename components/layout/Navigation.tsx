import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, FormControl, MenuItem, Select } from '@mui/material'
import { useTranslation, i18n } from 'next-i18next'
import Image from 'next/image'
import logo from '../../public/logos/whiteLogo.svg'
import styles from './Navigation.module.scss'

const scrolledOverPx = (pixels: number) => {
  const [scrolledOver, setScrolledOver] = useState(false)

  const scrollHandler = () => {
    window.scrollY > pixels
      ? setScrolledOver(true)
      : setScrolledOver(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [])

  return scrolledOver
}

const LanguageSelector = (): JSX.Element => {
  const router = useRouter()
  const { pathname, asPath, locales, locale: activeLocale } = router
  const languageNames = new Intl.DisplayNames(['cs'], {type: 'language'})

  const changeLanguageHandler = (language: string) => {
    void router.push(pathname, asPath, { locale: language })
  }

  return (
    <FormControl>
      <Select
        id='languageSelector'
        value={activeLocale}
        onChange={e => changeLanguageHandler(e.target.value as string)}
      >
        {locales && locales.map(language => (
          <MenuItem key={language} value={language}>
            {languageNames.of(language)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default function Navigation() {
  const { t } = useTranslation('navigation')
  const navigationKeys = i18n?.getResourceBundle('cz', 'navigation')

  return (
    <>
      <nav className={`${styles.navigation} ${scrolledOverPx(300) && styles.scrolled}`}>
        <Container className={styles.container}>
          <Image src={logo} className={styles.logo} alt='Navigation logo'/>
          <ul>
            {Object.keys(navigationKeys).map((key: string) => (
              <li>{t(key)}</li>
            ))}
          </ul>
          <LanguageSelector />
        </Container>
      </nav>
    </>
  )
}
