import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, FormControl, MenuItem, Select } from '@mui/material'
import { FacebookRounded, Instagram, YouTube } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import { theme } from '../../styles/mui-theme'
import Image from 'next/image'
import { useWindowScrolledOver } from './hooks/useWindowScrolledOver'
import { useWindowWidthResizedOver } from './hooks/useWindowWidthResizedOver'
import { useOutsideClicker } from './hooks/useOutsideClicker'
import logo from '../../public/logos/whiteLogo.svg'
import 'flag-icons/css/flag-icons.min.css'
import styles from './Navigation.module.scss'

interface HamburgerMenuProps {
  isNavigationMenuHidden: boolean
  setIsNavigationMenuHidden: MouseEventHandler
}

const HamburgerMenu = ({isNavigationMenuHidden, setIsNavigationMenuHidden}: HamburgerMenuProps) => (
  <div
    className={`${styles.hamburger} ${!isNavigationMenuHidden && styles.menuNotHidden}`}
    onClick={setIsNavigationMenuHidden}>
    <div className={styles.bun}>
      <div className={styles.meat}></div>
    </div>
  </div>
)

const SocialLinks = () => {
  const socials = [{
    icon: <FacebookRounded/>,
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
    <ul className={styles.socials}>
      {socials.map(({icon, href}) => (
        <li key={href}>
          <Link href={href} target={'_blank'} className={`${styles.link} ${styles.link}`}>{icon}</Link>
        </li>
      ))}
    </ul>
  )
}

interface LanguageSelectorProps {
  isLangSelectOpen: (isOpen: boolean) => void
}

const LanguageSelector = ({ isLangSelectOpen }: LanguageSelectorProps): JSX.Element => {
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
        onOpen={() => isLangSelectOpen(true)}
        onClose={() => isLangSelectOpen(false)}
        onChange={e => {changeLanguageHandler(e.target.value as string)}}
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
  const navigationRef = useRef(null)
  const {pathname} = useRouter()
  const {t} = useTranslation(namespace)
  const isWindowScrolledOver = useWindowScrolledOver(300)
  const isWindowWidthOver = useWindowWidthResizedOver(theme.breakpoints.values.lg)
  const [isNavigationMenuHidden, setIsNavigationMenuHidden] = useState(true)
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false)

  useOutsideClicker(navigationRef, isWindowWidthOver, isLanguageSelectorOpen, () => setIsNavigationMenuHidden(true))

  useEffect(() => {
    setIsNavigationMenuHidden(!isWindowWidthOver)
  }, [isWindowWidthOver])

  return (
    <>
      <nav
        className={`
          ${styles.navigation}
          ${pathname === '/' ? styles.navigationRoot : styles.navigationSubpage} 
          ${(!isWindowScrolledOver && isWindowWidthOver) && styles.notScrolled}
      `}
        ref={navigationRef}
      >
        <Container className={styles.container}>
          <div className={styles.navigationControl}>
            <Link href='/'>
              <Image src={logo} className={styles.logo} alt='Navigation logo'/>
            </Link>
            <HamburgerMenu
              isNavigationMenuHidden={isNavigationMenuHidden}
              setIsNavigationMenuHidden={() => setIsNavigationMenuHidden(current => !current)}
            />
          </div>
          <div className={`${styles.navigationItems} ${isNavigationMenuHidden && styles.inactive}`}>
            <ul className={styles.anchors}>
              {navigationItems && navigationItems.map((key: string) => (
                <li key={key}>
                  <Link
                    href={`#${key}`}
                    replace
                    className={styles.link}
                    onClick={!isWindowWidthOver ? () => setIsNavigationMenuHidden(true) : undefined}
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialLinks/>
            <LanguageSelector isLangSelectOpen={setIsLanguageSelectorOpen}/>
          </div>
        </Container>
      </nav>
    </>
  )
}
