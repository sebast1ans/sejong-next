import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import styles from './TrainingSessions.module.scss'
import { Container, Grid } from '@mui/material'

export default function TrainingSessions() {
  const {t} = useTranslation(['training-sessions', 'common'])

  const locations = [
    {
      name: 'Horáčkova',
      address: 'Horáčkova 1100',
      city: `${t('prague', {ns: 'common'})} 4 - Pankrác`,
      groups: [
        {
          name: t('children-6-9', {ns: 'common'}),
          time: `${t('wednesday', {ns: 'common'})} 16:30 - 17:30`,
        },
        {
          name: t('children-10-15', {ns: 'common'}),
          time: `${t('tuesday-and-thursday', {ns: 'common'})} 17:30 - 18:30`,
        },
        {
          name: t('youth-and-adults', {ns: 'common'}),
          time: `${t('tuesday-and-thursday', {ns: 'common'})} 18:00 - 19:30`,
        }
      ],
      metro: `C – Pankrác (5 min ${t('by-foot')})`,
      bus: 'Krčský hřbitov (193, 148)'
    },
    {
      name: 'Smolkova',
      address: 'Smolkova 565/8',
      city: `${t('prague', {ns: 'common'})} 12 - Kamýk`,
      groups: [
        {
          name: t('children-6-9', {ns: 'common'}),
          time: `${t('friday', {ns: 'common'})} 15:00 - 16:00`,
        },
        {
          name: t('youth-and-adults', {ns: 'common'}),
          time: `${t('wednesday', {ns: 'common'})} 18:30 - 20:00`,
        }
      ],
      bus: ['Sídliště Libuš (165)', 'Pavlíkova (197, 215)']
    }
  ]

  return (
    <section id={'training-sessions'}>
      <Heading text={t('training-sessions')}/>
      <Container>
        <Grid container>
          {locations.map(location => (
            <Grid item sm={12} md={6} key={location.name}>
              <p>{location.name}</p>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}