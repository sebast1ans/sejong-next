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
import yopchagi from '../../public/images/about-taekwondo/contentPics/yopchagi.jpg'
import yopchagi2 from '../../public/images/about-taekwondo/contentPics/yopchagi2.jpg'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import convertHtmlToReact from '@hedgedoc/html-to-react'

const TaekwondoContent = () => {
  const {t} = useTranslation(
    'about-taekwondo',
    {keyPrefix: 'taekwondo-content'}
  )

  return (
    <article className={styles.taekwondoContent}>
      <Paper className={styles.kihap}>
        <Image src={kihap} className={styles.contentImage} fill sizes={'17rem'} alt={'Kihap'}/>
      </Paper>
      <p>{convertHtmlToReact(t('p1'))}</p>
      <p>{convertHtmlToReact(t('p2'))}</p>
      <Paper className={styles.concentration}>
        <Image src={concentration} className={styles.contentImage} fill sizes={'17rem'} alt={'Concentration'}/>
      </Paper>
      <p>{convertHtmlToReact(t('p3'))}</p>
      <p>{convertHtmlToReact(t('p4'))}</p>
      <p>{convertHtmlToReact(t('p5'))}</p>
      <p>{convertHtmlToReact(t('p6'))}</p>
      <p>{convertHtmlToReact(t('p7'))}</p>
      <Paper className={styles.jongshin}>
        <Image src={jongshin} className={styles.contentImage} fill sizes={'17rem'} alt={'Jongshin'}/>
      </Paper>
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
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Yf7qhc0AV7w"
        title="Poomsae promo video"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>{convertHtmlToReact(t('p1'))}</p>
      <Paper className={styles.yopchagi}>
        <Image src={yopchagi} className={styles.contentImage} fill sizes={'17rem'} alt={'Concentration'}/>
      </Paper>
      <p>{convertHtmlToReact(t('p2'))}</p>
      <p>{convertHtmlToReact(t('p3'))}</p>
      <p>{convertHtmlToReact(t('p4'))}</p>
      <Paper className={styles.yopchagi2}>
        <Image src={yopchagi2} className={styles.contentImage} fill sizes={'17rem'} alt={'Concentration'}/>
      </Paper>
      <p>{convertHtmlToReact(t('p5'))}</p>
      <p>{convertHtmlToReact(t('p6'))}</p>
    </article>
  )
}

const KyorugiContent = () => (
  <>
    <p>Kyorugi (zápas) se dělí na zápas <strong>řízený</strong> a <strong>volný</strong>.</p>
    <p>
      Řízený boj probíhá podle předem stanoveného schématu. Je to soubor konkrétních útoků a přesně vymezených technik
      obrany po provedení <strong>tří kroků (sambon kyorugi)</strong>, <strong>dvou kroků (dubon kyorugi)</strong>, či
      <strong>jednoho kroku (hanbon kyorugi)</strong>.
    </p>
    <p>
      Ve <strong>cvičném volném boji (chayu kyorugi)</strong> se cvičenec musí rozhodovat rychle a samostatně, a musí
      svá rozhodnutí přizpůsobit aktuální situaci. Musí se vyhnout jakékoli jednostrannosti ve stylu boje a vyčerpat
      veškeré kombinace a uskutečňovat protiútoky.
    </p>
    <p>
      Boj sledovaný rozhodčím podléhá naopak přísným sportovním pravidlům.<strong>Sportovní zápas</strong> se
      uskutečňuje v plném kontaktu a trvá <strong>3 kola po 3 minutách</strong>, což vyžaduje pro sportovce velké
      technické umění, pevnou fyzickou kondici, psychickou rovnováhu, bleskové reakce a ohromné důvěry ve vlastní
      schopnosti. Při volném zápase se cvičenec vybaven chrániči hrudi, hlavy, holení, předloktí a suspensorem.
    </p>
  </>
)

const KyokpaContent = () => (
  <>
    <p>Kyokpa (přerážecí techniky) se dělí na <strong>silové přerážení</strong>, kde se zaměřuje především na sílu
      prováděné techniky, a <strong>speciální přerážení</strong>, kde je nejdůležitějším faktorem obtížnost prováděné
      techniky. Kjokpcha jsou součástí výcviku a jsou i soutěže v této disciplíně. Cvičenec jimi testuje sama sebe,
      svoji šikovnost, sílu, přesnost, zručnost, schopnost soustředit se a tím i svoji vyspělost.
    </p>
  </>
)

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