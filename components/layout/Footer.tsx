import { Container } from '@mui/material'
import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <Container className={styles.sponsors}>
        <Link href={'http://www.worldtaekwondo.org/'} target={'_blank'}>
          <img src={'/logos/footer/wt.png'} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
        <Link href={'https://www.kukkiwon.or.kr/front/eng/main.action'} target={'_blank'}>
          <img src={'/logos/footer/kkw.png'} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
        <Link href={'https://www.worldtaekwondo.cz/'} target={'_blank'}>
          <img src={'/logos/footer/cssvaz.png'} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
        <Link href={'https://worldtaekwondoeurope.org/'} target={'_blank'}>
          <img src={'/logos/footer/wte.png'} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
        <Link href={'http://moohwa.net/'} target={'_blank'}>
          <img src={'/logos/footer/moohwa.png'} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
        <Link href={'http://www.praha.eu/'} target={'_blank'}>
          <img src={'/logos/footer/prg.png'} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
        <Link href={'https://www.praha4.cz/'} target={'_blank'}>
          <img src={'/logos/footer/prg4.png'} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
        <Link href={'https://www.constructservice.cz/'} target={'_blank'}>
          <img src={'/logos/footer/construct.png'} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
      </Container>
      <p className={styles.copyright}>
        <img
          src={'logos/sejongSealWhite.svg'}
          className={styles.copyrightLogo}
          alt={'Sejong seal'}
        />
        {new Date().getFullYear()} Sejong Taekwondo
      </p>
    </footer>
  )
}
