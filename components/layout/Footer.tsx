import { Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'
import sejongSealWhite from '../../public/logos/sejongSealWhite.svg'
import wt from '../../public/logos/footer/wt.png'
import kkw from '../../public/logos/footer/kkw.png'
import cssvaz from '../../public/logos/footer/cssvaz.png'
import wte from '../../public/logos/footer/wte.png'
import moohwa from '../../public/logos/footer/moohwa.png'
import prg from '../../public/logos/footer/prg.png'
import prg4 from '../../public/logos/footer/prg4.png'
import construct from '../../public/logos/footer/construct.png'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <Container className={styles.sponsors}>
        <Link href={'http://www.worldtaekwondo.org/'} target={'_blank'}>
          <Image src={wt} className={styles.logo} alt={'World Taekwondo'}/>
        </Link>
        <Link href={'https://www.kukkiwon.or.kr/front/eng/main.action'} target={'_blank'}>
          <Image src={kkw} className={styles.logo} alt={'Kukkiwon'}/>
        </Link>
        <Link href={'https://www.worldtaekwondo.cz/'} target={'_blank'}>
          <Image src={cssvaz} className={styles.logo} alt={'World Taekwondo CZ'}/>
        </Link>
        <Link href={'https://worldtaekwondoeurope.org/'} target={'_blank'}>
          <Image src={wte} className={styles.logo} alt={'World Taekwondo Europe'}/>
        </Link>
        <Link href={'http://moohwa.net/'} target={'_blank'}>
          <Image src={moohwa} className={styles.logo} alt={'Moohwa'}/>
        </Link>
        <Link href={'http://www.praha.eu/'} target={'_blank'}>
          <Image src={prg} className={styles.logo} alt={'Prague'}/>
        </Link>
        <Link href={'https://www.praha4.cz/'} target={'_blank'}>
          <Image src={prg4} className={styles.logo} alt={'Prague 4'}/>
        </Link>
        <Link href={'https://www.constructservice.cz/'} target={'_blank'}>
          <Image src={construct} className={styles.logo} alt={'Construct Service'}/>
        </Link>
      </Container>
      <p className={styles.copyright}>
        <Image
          src={sejongSealWhite}
          className={styles.copyrightLogo}
          alt={'Sejong seal'}
        />
        {new Date().getFullYear()} Sejong Taekwondo
      </p>
    </footer>
  )
}
