import styles from './AboutTaekwondo.module.scss'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import taekwondo from '../../public/images/about-taekwondo/taekwondo.jpg'
import poomsae from '../../public/images/about-taekwondo/poomsae.jpg'
import kyorugi from '../../public/images/about-taekwondo/kyorugi.jpg'
import kyokpa from '../../public/images/about-taekwondo/kyokpa.jpg'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const TaekwondoContent = () => (
  <>
    <p>
      Taekwondo je <strong>bojové umění</strong>, které se nezávisle vyvíjelo <strong>v Koreji</strong> po dobu více
      než dvě tisíciletí a stalo se tak <strong>moderním mezinárodním sportem</strong>.
      Stručně lze Taekwondo charakterizovat jako bojové umění, které používá ruce, nohy a ostatní části těla
      k odvrácení útoku protivníka.
    </p>
    <p>
      Jelikož Taekwondo se již od počátku vyvíjelo jako sebeobranný systém, tak i veškeré aktivity v Taekwondo
      se zakládají v duchu sebeobrany. V dávných dobách lidé žily jednoduchý život s nedostatkem fyzického zatížení
      a ve stáří se jejich těla hrbila. Taekwondo také napomáhá upevnit zdraví, fyzickou i psychickou sílu
      a celkovou rovnováhu lidského těla.
    </p>
    <p>
      Člověk, který se věnuje Taekwondo se musí naučit potlačit vlastní ego, ovládat své nitro a být uctivý k druhým,
      čili dospět k harmonii duchovna a fyzické síly, protože se učí technikám pro vlastní obranu s použitím celého
      těla. Pro člověka, který se učí technikám Taekwondo, je jeho celé tělo zbraní, kterou lze lehce zneškodnit
      protivníkův útok za pomoci vlastních nohou, rukou, pěstí, loktů, kolen, hlavy, či jiné části svého těla.
    </p>
    <p>
      Taekwondista se nejdříve musí naučit ovládat sám sebe a vždy se musí zastat slabšího. Může se sice rovně postavit
      každému nepříteli, ale kodex zakazuje nepoctivý útok a použití nepřiměřené síly. Cvičení Taekwondo učí jednotlivce
      duševní skromnosti.
    </p>
    <p><strong>5 zásad taekwondo</strong></p>
    <p>
      Taekwondo je bojové umění, které vyžaduje i přísnou disciplínu. Proto by jeho pět zásad (taekwondo jeongsin) měl
      každý, kdo se věnuje taekwondo, nejenom znát, ale měl by i chápat jejich skutečný význam. Každý cvičenec
      taekwondo by se měl zásadami taekwondo řídit nejenom v tělocvične, ale i v běžném životě.
    </p>
    <p>
      <strong>Zdvořilost</strong> 예의 [ye-hwi] <br/>
      <strong>Čestnost</strong> 염치 [yeom-chi] <br/>
      <strong>Vytrvalost</strong> 인내 [in-nae] <br/>
      <strong>Sebeovládání</strong> 극기 [geuk-gi] <br/>
      <strong>Nezlomný duch</strong> 백절불굴 [baekjeol-bulgul]
    </p>
  </>
)

const PoomsaeContent = () => (
  <>
    <p>
      Poomsae (souborná cvičení) jsou závazná cvičení, vypracovaná mistry Taekwondo, za účelem předávání vědy o umění
      boje a vlastních interpretacích tohoto umění.
    </p>
    <p>Poomsae se dělí na <strong>základní</strong> a <strong>mistrovské</strong>.</p>
    <p>
      V poomsae vystupují harmonicky spjaté všechny techniky obrany a útoku se vzrůstajícím stupněm obtížnosti, které
      napomáhají k procvičení umění boje s jedním nebo více protivníky. Takto se můžou cvičit různé útočné a obrané
      techniky bez skutečného protivníka a bez nebezpečí zranění.
    </p>
    <p>
      Posloupnost pohybů je přesně vymezena a probíhá podle stanoveného diagramu kroku. Pohyby musí být silné,
      koncentrované, přesné a rytmické při zachování stabilní polohy těla.
    </p>
    <p>Poomsae stanoví základní prvek zkoušky pro další stupeň školení nebo mistrovství.</p>
    <p>Poomsae se dělí na <strong>8 základních</strong> (Taegeuk 1 – 8 Jang) a <strong>9 mistrovských</strong> (Yudanja
      Poomsae), které jsou pojmenovány podle posvátných míst v Koreji nebo názvy, které se vztahují
      ke <strong>korejským dějinám</strong> (Koryo, Keumgang, Taebaek, Pyongwon, Sipjin, Jitae, Cheonkwon, Hansoo
      a Ilyeo).
    </p>
  </>
)

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
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth={'xl'}>
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