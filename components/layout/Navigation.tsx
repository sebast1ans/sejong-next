import { uuidv4 } from '@firebase/util'
import { LoadingButton } from '@mui/lab'
import { MouseEventHandler, ReactNode, useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Container, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { FacebookRounded, Instagram, Logout, YouTube } from '@mui/icons-material'
import { i18n, useTranslation } from 'next-i18next'
import { useSignOut } from 'react-firebase-hooks/auth'
import { UserContext } from '../../lib/context'
import { auth } from '../../lib/firebase'
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

const HamburgerMenu = ({ isNavigationMenuHidden, setIsNavigationMenuHidden }: HamburgerMenuProps) => (
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
      {socials.map(({ icon, href }) => (
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
  const {
    push,
    pathname,
    asPath,
    locales,
    locale: activeLocale
  } = useRouter()

  const alpha2Code = { cs: 'cz', en: 'gb', vi: 'vn', }

  const displayLanguageNameIn = (language: string) => {
    return new Intl.DisplayNames([language], { type: 'language' })
  }

  const handleLanguageChange = (language: string) => {
    void push(pathname, asPath, { locale: language, scroll: false })
  }

  return (
    <FormControl size={'small'}>
      <Select
        id='languageSelector'
        className={styles.select}
        value={activeLocale}
        onOpen={() => isLangSelectOpen(true)}
        onClose={() => isLangSelectOpen(false)}
        onChange={e => {handleLanguageChange(e.target.value as string)}}
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

export const SignOutButton = () => {
  const [signOut, loading] = useSignOut(auth)

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoadingButton
      variant='contained'
      loading={loading}
      loadingPosition="start"
      startIcon={<Logout/>}
      onClick={handleSignOut}
    >
      Odhlásit&nbsp;se
    </LoadingButton>
  )
}

export default function Navigation () {
  const navigationRef = useRef(null)
  const { asPath, pathname } = useRouter()
  const [user] = useContext(UserContext)
  const [navigationItems, setNavigationItems]
    = useState<string[] | { id: string, node: ReactNode }[]>([])
  const { t } = useTranslation('home-page-navigation')

  const isWindowScrolledOver = useWindowScrolledOver(300)
  const isWindowWidthOver = useWindowWidthResizedOver(theme.breakpoints.values.lg)
  const [isNavigationMenuHidden, setIsNavigationMenuHidden] = useState(true)
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false)
  const [isOnPortalRoute, setIsOnPortalRoute] = useState(false)

  useOutsideClicker(navigationRef, isWindowWidthOver, isLanguageSelectorOpen, () => setIsNavigationMenuHidden(true))

  useEffect(() => {
    setIsNavigationMenuHidden(!isWindowWidthOver)
  }, [isWindowWidthOver])

  useEffect(() => {
    setIsOnPortalRoute(!!asPath.match(/^\/portal(\/.*)?$/))
  }, [asPath]);

  useEffect(() => {
    if (pathname === '/') {
      setNavigationItems(Object.keys(i18n?.getResourceBundle('cs', 'home-page-navigation')))
    } else if (pathname === '/login') {
      setNavigationItems([])
    } else if (isOnPortalRoute) {
      setNavigationItems(Array(
        {
          id: uuidv4(),
          node: <Typography color='white'>{user?.email}</Typography>
        },
        {
          id: uuidv4(),
          node: <SignOutButton/>
        }
      ))
    } else {
      setNavigationItems([])
    }
  }, [pathname, isOnPortalRoute])

  const isArrayOfStrings = (value: unknown): value is string[] => {
    return Array.isArray(value) && value.every(item => typeof item === 'string')
  }

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
            {navigationItems.length > 0 ? (
              <HamburgerMenu
                isNavigationMenuHidden={isNavigationMenuHidden}
                setIsNavigationMenuHidden={() => setIsNavigationMenuHidden(current => !current)}
              />
            ) : null}
          </div>
          <div className={`${styles.navigationItems} ${isNavigationMenuHidden && styles.inactive}`}>
            <ul className={styles.anchors}>
              {isArrayOfStrings(navigationItems)
                ? navigationItems.map((key: string) => (
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
                )) : navigationItems.map((item) => (
                  <li key={item.id}>{item.node}</li>
                ))
              }
            </ul>
            {pathname === '/' ? (
              <>
                <SocialLinks/>
                <LanguageSelector isLangSelectOpen={setIsLanguageSelectorOpen}/>
              </>
            ) : null}
          </div>
        </Container>
      </nav>
    </>
  )
}
