import { Container } from '@mui/material'
import Image from 'next/image'
import logo from '../../public/logos/whiteLogo.svg'
import styles from './Navigation.module.scss'

export function Navigation() {
  return (
    <>
      <nav className={styles.navigation}>
        <Container className={styles.container}>
          <Image src={logo} className={styles.logo} alt='Navigation logo'/>
          <ul>
            <li>Aktuality</li>
            <li>Kdo jsme</li>
            <li>Trenéři</li>
            <li>Historie</li>
            <li>O Taekwondo</li>
            <li>Tréninky</li>
            <li>Ceník</li>
            <li>Kontakt</li>
          </ul>
        </Container>
      </nav>
    </>
  )
}
