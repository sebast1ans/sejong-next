import styles from './AboutTaekwondo.module.scss'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import { Grid } from '@mui/material'
import taekwondo from '../../public/images/about-taekwondo/taekwondo.jpg'
import poomsae from '../../public/images/about-taekwondo/poomsae.jpg'
import kyorugi from '../../public/images/about-taekwondo/kyorugi.jpg'
import kyokpa from '../../public/images/about-taekwondo/kyokpa.jpg'
import Image from 'next/image'

const disciplines = [
  {
    name: 'Taekwondo',
    image: taekwondo,
  },
  {
    name: 'Poomsae',
    image: poomsae,
  },
  {
    name: 'Kyorugi',
    image: kyorugi,
  },
  {
    name: 'Kyokpa',
    image: kyokpa,
  }
]

export default function AboutTaekwondo() {
  const { t } = useTranslation('about-taekwondo')

  return (
    <section id={'about-taekwondo'}>
      <Heading text={t('what-is-taekwondo')} />
      <Grid container>
        {disciplines.map((discipline) => (
          <Grid lg={3} sm={6} xs={12} item key={discipline.name}>
            <div className={styles.disciplineContainer}>
              <Image src={discipline.image} className={styles.image} alt={discipline.name}/>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}