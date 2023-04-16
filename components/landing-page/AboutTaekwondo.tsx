import styles from './AboutTaekwondo.module.scss'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import { Dialog, DialogContent, Grid, Typography } from '@mui/material'
import taekwondo from '../../public/images/about-taekwondo/taekwondo.jpg'
import poomsae from '../../public/images/about-taekwondo/poomsae.jpg'
import kyorugi from '../../public/images/about-taekwondo/kyorugi.jpg'
import kyokpa from '../../public/images/about-taekwondo/kyokpa.jpg'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

type Discipline = {
  name: string,
  image: StaticImageData,
}

const disciplines: Discipline[] = [
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

interface DisciplineDialogProps {
  open: boolean,
  onClose: () => void
}

const DisciplineDialog = ({open, onClose}: DisciplineDialogProps) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <h1>Dialog</h1>
      </DialogContent>
    </Dialog>
  )
}

export default function AboutTaekwondo() {
  const {t} = useTranslation('about-taekwondo')
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section id={'about-taekwondo'}>
      <Heading text={t('what-is-taekwondo')}/>
      <Grid container>
        {disciplines.map((discipline) => (
          <Grid lg={3} sm={6} xs={12} item key={discipline.name}>
            <div className={styles.disciplineContainer}>
              <Image src={discipline.image} className={styles.image} alt={discipline.name}/>
              <div className={styles.nameContainer}>
                <Typography variant={'h2'} className={styles.name}>{discipline.name}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <DisciplineDialog open={dialogOpen} onClose={() => setDialogOpen(false)}/>
    </section>
  )
}