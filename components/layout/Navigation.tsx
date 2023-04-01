import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, FormControl, MenuItem, Select } from '@mui/material'
import { Facebook, Instagram, YouTube } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import logo from '../../public/logos/whiteLogo.svg'
import 'flag-icons/css/flag-icons.min.css'
import styles from './Navigation.module.scss'

const useScrolledOverPx = (pixels: number) => {
  const [scrolledOver, setScrolledOver] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > pixels
        ? setScrolledOver(true)
        : setScrolledOver(false)
    }

    scrollHandler()
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [pixels])

  return scrolledOver
}

const SocialLinks = () => {
  const socials = [{
      icon: <Facebook/>,
      href: 'https://www.facebook.com/SejongDojang/'
    },
    {
      icon: <Instagram/>,
      href: 'https://www.instagram.com/sejong_taekwondo/'
    },
    {
      icon: <YouTube/>,
      href: 'https://www.youtube.com/channel/UCENWwwDVUMEnVamN3ANXB2g'
    }]

  return (
    <ul>
      {socials.map(({icon, href}) => (
        <li key={href}>
          <Link href={href} target={'_blank'} className={`${styles.link} ${styles.socials}`}>{icon}</Link>
        </li>
      ))}
    </ul>
  )
}

const LanguageSelector = (): JSX.Element => {
  const router = useRouter()
  const {pathname, asPath, locales, locale: activeLocale} = router
  const alpha2Code = {cs: 'cz', en: 'gb', vi: 'vn',}

  const displayLanguageNameIn = (language: string) => {
    return new Intl.DisplayNames([language], {type: 'language'})
  }

  const changeLanguageHandler = (language: string) => {
    void router.push(pathname, asPath, {locale: language, scroll: false})
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
            <span className={`fi fi-${alpha2Code[language as keyof typeof alpha2Code]}`}></span>&nbsp;
            {displayLanguageNameIn(language).of(language)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

interface Props {
  navigationItems?: string[]
  namespace?: string
}

export default function Navigation({navigationItems, namespace}: Props) {
  const {pathname} = useRouter()
  const {t} = useTranslation(namespace)
  const scrolledOver = useScrolledOverPx(300)

  return (
    <>
      <nav className={`
      ${styles.navigation}
      ${pathname === '/' ? styles.navigationRoot : styles.navigationSubpage} 
      ${scrolledOver && styles.scrolled}
      `}>
        <Container className={styles.container}>
          <div className={styles.navLogo}>
            <Link href='/'>
              <Image src={logo} className={styles.logo} alt='Navigation logo'/>
            </Link>
          </div>
          <ul>
            {navigationItems && navigationItems.map((key: string) => (
              <li key={key}>
                <Link href={`#${key}`} className={styles.link}>{t(key)}</Link>
              </li>
            ))}
          </ul>
          <SocialLinks/>
          <LanguageSelector/>
        </Container>
      </nav>
    </>
  )
}
