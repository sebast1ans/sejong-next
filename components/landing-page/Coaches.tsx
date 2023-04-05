import styles from './Coaches.module.scss'
import { DocumentData } from 'firebase/firestore'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import { Button, Card, CardContent, Container, Paper } from '@mui/material'
import convertHtmlToReact from '@hedgedoc/html-to-react'
import Image from 'next/image'

interface Props {
  data: DocumentData[]
}

export default function Coaches({data}: Props) {
  const {t} = useTranslation('coaches')

  return (
    <section id={'coaches'}>
      <Heading text={t('coaches')}/>
      <Container className={styles.coaches}>
        {data.reverse().map(coach => {
          if (coach.role === 'main') {
            return (
              <Card className={styles.coach} key={coach.id}>
                <CardContent sx={{width: '100%'}}>
                  <Paper className={styles.avatar} elevation={6}>
                    <Image src={coach.imageURL} alt={coach.name} fill sizes={'16rem'}/>
                  </Paper>
                  <h3>{coach.name}</h3>
                  <em>{coach.subtitle}</em>
                  <p>{convertHtmlToReact(coach.cardText)}</p>
                </CardContent>
                <Button className={styles.button} variant={'text'}>{t('more')}</Button>
              </Card>
            )
          }
        })}
      </Container>
    </section>
  )
}