import { Container } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import logo from '../../public/logos/whiteLogo.svg'
import styles from './Navigation.module.scss'

export function Navigation() {
  const { t } = useTranslation('navigation')

  return (
    <>
      <nav className={styles.navigation}>
        <Container className={styles.container}>
          <Image src={logo} className={styles.logo} alt='Navigation logo'/>
          <ul>
            <li>{ t('news') }</li>
            <li>{ t('about-us') }</li>
            <li>{ t('coaches') }</li>
            <li>{ t('history') }</li>
            <li>{ t('about-taekwondo') }</li>
            <li>{ t('training-sessions') }</li>
            <li>{ t('pricelist') }</li>
            <li>{ t('contact') }</li>
          </ul>
        </Container>
      </nav>
    </>
  )
}
