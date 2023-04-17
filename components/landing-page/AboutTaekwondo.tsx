import styles from './AboutTaekwondo.module.scss'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Paper, Typography } from '@mui/material'
import taekwondo from '../../public/images/about-taekwondo/taekwondo.jpg'
import poomsae from '../../public/images/about-taekwondo/poomsae.jpg'
import kyorugi from '../../public/images/about-taekwondo/kyorugi.jpg'
import kyokpa from '../../public/images/about-taekwondo/kyokpa.jpg'
import kihap from '../../public/images/about-taekwondo/contentPics/kihap.jpg'
import concentration from '../../public/images/about-taekwondo/contentPics/concentrating.jpg'
import jongshin from '../../public/images/about-taekwondo/contentPics/jongshin.jpg'
import yopchagi1 from '../../public/images/about-taekwondo/contentPics/yopchagi.jpg'
import yopchagi2 from '../../public/images/about-taekwondo/contentPics/yopchagi2.jpg'
import kyorugi1 from '../../public/images/about-taekwondo/contentPics/kyorugi1.jpg'
import kyorugi2 from '../../public/images/about-taekwondo/contentPics/kyorugi2.jpg'
import kyokpa1 from '../../public/images/about-taekwondo/contentPics/kyokpa1.jpg'
import kyokpa2 from '../../public/images/about-taekwondo/contentPics/kyokpa2.jpg'
import kyokpa3 from '../../public/images/about-taekwondo/contentPics/kyokpa3.jpg'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import convertHtmlToReact from '@hedgedoc/html-to-react'

const ContentImage = ({src, className, alt} : {src: StaticImageData, className: string, alt: string}) => (
  <Paper className={className}>
    <Image src={src} className={styles.contentImage} fill sizes={'17rem'} alt={alt}/>
  </Paper>
)

const TaekwondoContent = () => {
  const {t} = useTranslation(
    'about-taekwondo',
    {keyPrefix: 'taekwondo-content'}
  )

  return (
    <article className={styles.taekwondoContent}>
      <ContentImage src={kihap} className={styles.kihap} alt={'Kihap'}/>
      <p>{convertHtmlToReact(t('p1'))}</p>
      <p>{convertHtmlToReact(t('p2'))}</p>
      <ContentImage src={concentration} className={styles.concentration} alt={'Concentration'}/>
      <p>{convertHtmlToReact(t('p3'))}</p>
      <p>{convertHtmlToReact(t('p4'))}</p>
      <p>{convertHtmlToReact(t('p5'))}</p>
      <p>{convertHtmlToReact(t('p6'))}</p>
      <p>{convertHtmlToReact(t('p7'))}</p>
      <ContentImage src={jongshin} className={styles.jongshin} alt={'5 Taekwondo Tennets'}/>
    </article>
  )
}

const PoomsaeContent = () => {
  const {t} = useTranslation(
    'about-taekwondo',
    {keyPrefix: 'poomsae-content'}
  )

  return (
    <article className={styles.poomsaeContent}>
      <iframe
        className={styles.video}
        width={'560'}
        height={'315'}
        src={'https://www.youtube-nocookie.com/embed/Yf7qhc0AV7w'}
        title={'Poomsae promo video'}
        allow={'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'}
        allowFullScreen
      ></iframe>
      <p>{convertHtmlToReact(t('p1'))}</p>
      <ContentImage src={yopchagi1} className={styles.yopchagi1} alt={'Yop chagi'}/>
      <p>{convertHtmlToReact(t('p2'))}</p>
      <p>{convertHtmlToReact(t('p3'))}</p>
      <p>{convertHtmlToReact(t('p4'))}</p>
      <ContentImage src={yopchagi2} className={styles.yopchagi2} alt={'Yop chagi 2'}/>
      <p>{convertHtmlToReact(t('p5'))}</p>
      <p>{convertHtmlToReact(t('p6'))}</p>
    </article>
  )
}

const KyorugiContent = () => {
  const {t} = useTranslation(
    'about-taekwondo',
    {keyPrefix: 'kyorugi-content'}
  )

  return (
    <article className={styles.kyorugiContent}>
      <iframe
        className={styles.video}
        width={'560'}
        height={'315'}
        src={'https://www.youtube-nocookie.com/embed/-VVRroxsWnU'}
        title={'Kyorugi promo video'}
        allow={'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'}
        allowFullScreen
      ></iframe>
      <p>{convertHtmlToReact(t('p1'))}</p>
      <ContentImage src={kyorugi1} className={styles.kyorugi1} alt={'Kyorugi 1'}/>
      <p>{convertHtmlToReact(t('p2'))}</p>
      <p>{convertHtmlToReact(t('p3'))}</p>
      <ContentImage src={kyorugi2} className={styles.kyorugi2} alt={'Kyorugi 2'}/>
      <p>{convertHtmlToReact(t('p4'))}</p>
    </article>
  )
}

const KyokpaContent = () => {
  const {t} = useTranslation(
    'about-taekwondo',
    {keyPrefix: 'kyokpa-content'}
  )

  return (
    <article className={styles.kyokpaContent}>
      <p>{convertHtmlToReact(t('p1'))}</p>
      <div className={styles.images1stGroup}>
        <ContentImage src={kyokpa1} className={styles.kyokpa1} alt={'Kyokpa 1'}/>
        <ContentImage src={kyokpa2} className={styles.kyokpa2} alt={'Kyokpa 2'}/>
      </div>
      <ContentImage src={kyokpa3} className={styles.kyokpa3} alt={'Kyokpa 3'}/>
    </article>
  )
}

type Discipline = {
  name: string,
  image: StaticImageData,
  content?: JSX.Element
}

const disciplines: Discipline[] = [
  {
    name: 'Taekwondo',
    image: taekwondo,
    content: <TaekwondoContent/>
  },
  {
    name: 'Poomsae',
    image: poomsae,
    content: <PoomsaeContent/>
  },
  {
    name: 'Kyorugi',
    image: kyorugi,
    content: <KyorugiContent/>
  },
  {
    name: 'Kyokpa',
    image: kyokpa,
    content: <KyokpaContent/>
  }
]

type DisciplineDialogData = Omit<Discipline, 'image'>

interface DisciplineDialogProps {
  open: boolean,
  onClose: () => void,
  disciplineData: DisciplineDialogData | null
}

const DisciplineDialog = ({open, onClose, disciplineData}: DisciplineDialogProps) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      {disciplineData &&
        <>
          <DialogTitle className={styles.dialogTitle}>
            {disciplineData.name}
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{marginLeft: 'auto'}}
            >
              <CloseIcon/>
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {disciplineData.content}
          </DialogContent>
        </>
      }
    </Dialog>
  )
}

export default function AboutTaekwondo() {
  const {t} = useTranslation('about-taekwondo')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [disciplineDialogData, setDisciplineDialogData] = useState<DisciplineDialogData | null>(null)

  const handleOpenDialog = ({name, content}: DisciplineDialogData) => {
    setDisciplineDialogData({name, content})
    setDialogOpen(true)
  }

  const handleClose = () => {
    setDisciplineDialogData(null)
    setDialogOpen(false)
  }

  return (
    <section id={'about-taekwondo'}>
      <Heading text={t('what-is-taekwondo')}/>
      <Grid container>
        {disciplines.map((discipline) => (
          <Grid lg={3} sm={6} xs={12} item key={discipline.name}>
            <div
              className={styles.disciplineContainer}
              onClick={() => handleOpenDialog({
                name: discipline.name,
                content: discipline.content
              })}
            >
              <Image src={discipline.image} className={styles.image} alt={discipline.name}/>
              <div className={styles.nameContainer}>
                <Typography variant={'h2'} className={styles.name}>{discipline.name}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <DisciplineDialog
        open={dialogOpen}
        onClose={handleClose}
        disciplineData={disciplineDialogData}
      />
    </section>
  )
}