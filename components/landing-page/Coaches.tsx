import { DocumentData } from 'firebase/firestore'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import {
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Paper
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import convertHtmlToReact from '@hedgedoc/html-to-react'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Coaches.module.scss'

type CoachDialogData = {
  name: string,
  subtitle: string,
  image: string,
  details: string
}

interface CoachDetailsDialogProps {
  open: boolean,
  onClose: () => void
  coachData?: CoachDialogData
}

const CoachDetailsDialog = ({open, onClose, coachData}: CoachDetailsDialogProps) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      {coachData &&
        <>
          <DialogContent className={styles.dialogTitle}>
            <div className={styles.dialogAvatar}>
              <Image
                src={coachData.image}
                className={styles.dialogImage}
                fill
                sizes={'100px'}
                alt={coachData.name}
              />
            </div>
            <div>
              <div><strong>{coachData.name}</strong></div>
              <small><em>{coachData.subtitle}</em></small>
            </div>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{marginLeft: 'auto'}}
            >
              <CloseIcon/>
            </IconButton>
          </DialogContent>
          <DialogContent dividers>
            {/*{convertHtmlToReact(coachData.details)}*/}
          </DialogContent>
        </>
      }
    </Dialog>
  )
}

interface Props {
  data: DocumentData[]
}

export default function Coaches({data}: Props) {
  const {t} = useTranslation('coaches')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [coachDialogData, setCoachDialogData] = useState<CoachDialogData>()

  const handleClickOpen = ({name, subtitle, image, details}: CoachDialogData) => {
    setCoachDialogData({name, subtitle, image, details})
    setDialogOpen(true)
  }

  const handleClose = () => {
    setCoachDialogData(undefined)
    setDialogOpen(false)
  }

  return (
    <section id={'coaches'}>
      <Heading text={t('coaches')}/>
      <Container>
        <div className={styles.coaches}>
        {data.map(coach => (
              <Card className={styles.coach} key={coach.id}>
                <CardContent sx={{width: '100%'}}>
                  <Paper className={styles.avatar} elevation={6}>
                    <Image src={coach.imageURL} alt={coach.name} fill sizes={'16rem'}/>
                  </Paper>
                  <h3>{coach.name}</h3>
                  {/*<em>{coach.subtitle}</em>*/}
                  {/*<div>{convertHtmlToReact(coach.cardText)}</div>*/}
                </CardContent>
                <Button
                  className={styles.detailButton}
                  variant={'text'}
                  onClick={() => handleClickOpen({
                    name: coach.name,
                    subtitle: coach.subtitle,
                    image: coach.imageURL,
                    details: coach.dialogText
                  })}
                >
                  {t('more')}
                </Button>
              </Card>
        ))}
        </div>
      </Container>
      {/*<CoachDetailsDialog*/}
      {/*  open={dialogOpen}*/}
      {/*  onClose={handleClose}*/}
      {/*  coachData={coachDialogData}*/}
      {/*/>*/}
    </section>
  )
}