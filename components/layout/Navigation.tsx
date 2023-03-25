import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { useTranslation } from 'next-i18next'
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

export default function Navigation() {
  const { t } = useTranslation('navigation')

  return (
    <>
      <nav className={`${styles.navigation} ${scrolledOverPx(300) && styles.scrolled}`}>
        <Container className={styles.container}>
          <Image src={logo} className={styles.logo} alt='Navigation logo'/>
          <ul>
            <li>{ t('news') }</li>
            <li>{ t('about-us') }</li>
            <li>{ t('coaches') }</li>
            <li>{ t('history') }</li>
            <li>{ t('about-taekwondo') }</li>
            <li>{ t('training-sessions') }</li>
            <li>{ t('price-list') }</li>
            <li>{ t('contact') }</li>
          </ul>
        </Container>
      </nav>
    </>
  )
}
