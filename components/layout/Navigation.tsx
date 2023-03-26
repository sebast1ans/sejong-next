import { useEffect, useState } from 'react'
import Link from 'next/link'
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

  const displayLanguageNameIn = (language: string) => {
    return new Intl.DisplayNames( [language],{type: 'language'})
  }

  const changeLanguageHandler = (language: string) => {
    void router.push(pathname, asPath, { locale: language })
  }

  return (
    <FormControl size={'small'}>
      <Select
        id='languageSelector'
        className={styles.select}
        value={activeLocale}
        onChange={e => changeLanguageHandler(e.target.value as string)}
      >
        {locales && locales.map(language => (
          <MenuItem key={language} value={language}>
            {displayLanguageNameIn(language).of(language)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default function Navigation() {
  const { t } = useTranslation('navigation')
  const navigationKeys = i18n?.getResourceBundle('cs', 'navigation')

  return (
    <>
      <nav className={`${styles.navigation} ${scrolledOverPx(300) && styles.scrolled}`}>
        <Container className={styles.container}>
          <Link href='/' className={styles.navLogo}>
            <Image src={logo} className={styles.logo} alt='Navigation logo'/>
          </Link>
          <ul>
            {Object.keys(navigationKeys).map((key: string) => (
              <Link href={`#${key}`} className={styles.link} key={key}>
                <li>{t(key)}</li>
              </Link>
            ))}
          </ul>
          <LanguageSelector/>
        </Container>
      </nav>
    </>
  )
}
