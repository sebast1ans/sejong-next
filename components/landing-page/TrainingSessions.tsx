import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import styles from './TrainingSessions.module.scss'
import { Place, Schedule, Commute } from '@mui/icons-material'
import { Box, Container, Grid, Typography } from '@mui/material'

export default function TrainingSessions () {
  const { t } = useTranslation(['training-sessions', 'common'])

  const locations = [
    {
      name: 'Horáčkova',
      address: 'Horáčkova 1100',
      city: `${t('prague', { ns: 'common' })} 4 - Pankrác`,
      groups: [
        {
          name: t('children-6-9', { ns: 'common' }),
          time: `${t('wednesday', { ns: 'common' })} 16:30 - 17:30`,
        },
        {
          name: t('children-10-15', { ns: 'common' }),
          time: `${t('tuesday-and-thursday', { ns: 'common' })} 17:30 - 18:30`,
        },
        {
          name: t('juniors-and-adults', { ns: 'common' }),
          time: `${t('tuesday-and-thursday', { ns: 'common' })} 18:00 - 19:30`,
        }
      ],
      metro: [`C – Pankrác (5 min ${t('by-foot')})`],
      bus: ['Krčský hřbitov (193, 148)']
    },
    {
      name: 'Smolkova',
      address: 'Smolkova 565/8',
      city: `${t('prague', { ns: 'common' })} 12 - Kamýk`,
      groups: [
        {
          name: t('children-6-9', { ns: 'common' }),
          time: `${t('friday', { ns: 'common' })} 15:00 - 16:00`,
        },
        {
          name: t('youth-and-adults', { ns: 'common' }),
          time: `${t('wednesday', { ns: 'common' })} 18:30 - 20:00`,
        }
      ],
      bus: ['Sídliště Libuš (165)', 'Pavlíkova (197, 215)']
    }
  ]

  return (
    <section id={'training-sessions'} className={styles.trainingSessions}>
      <Heading text={t('training-sessions')}/>
      <div className={styles.greyBackground}>
        <Container>
          <Grid container spacing={2}>
            {locations.map(location => (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={location.name} className={styles.location}>
                <Place className={`${styles.icon} ${styles.iconMap}`}/>
                <div className={styles.address}>
                  <Typography
                    variant={'h2'}
                    className={styles.name}
                  >
                    {`${t('primary-school', { ns: 'common' })} ${location.name}`}
                  </Typography>
                  <Typography variant={'body1'} sx={{ fontWeight: '600' }}>{location.address}</Typography>
                  <Typography variant={'body1'}>{location.city}</Typography>
                </div>
                <Schedule className={`${styles.icon} ${styles.iconClock}`}/>
                <div className={styles.time}>
                  {location.groups.map(group => (
                    <Box sx={{ padding: '.1rem 0' }} key={group.name}>
                      <Typography variant={'body1'} sx={{ fontWeight: '600' }}>{group.name}</Typography>
                      <Typography variant={'body1'}>{group.time}</Typography>
                    </Box>
                  ))}
                </div>
                <Commute className={`${styles.icon} ${styles.iconTransport}`}/>
                <div className={styles.transport}>
                  {location.metro && (
                    <Box sx={{ padding: '.1rem 0' }}>
                      <Typography variant={'body1'} sx={{ fontWeight: '600' }}>Metro:</Typography>
                      {location.metro.map(station => (
                        <Typography variant={'body1'} key={station}>{station}</Typography>
                      ))}
                    </Box>)}
                  {location.bus && (
                    <Box sx={{ padding: '.1rem 0' }}>
                      <Typography variant={'body1'} sx={{ fontWeight: '600' }}>Bus:</Typography>
                      {location.bus.map(station => (
                        <Typography variant={'body1'} key={station}>{station}</Typography>
                      ))}
                    </Box>
                  )}
                </div>
                <div className={styles.map}></div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </section>
  )
}