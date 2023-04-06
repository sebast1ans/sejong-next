import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import styles from './Timeline.module.scss'
import { theme } from '../../styles/mui-theme'
import { Typography } from '@mui/material'

export default function Timeline() {
  const {t} = useTranslation('timeline')
  const years = Object.keys(t('years', {returnObjects: true}))
  const muiBreakpoints = theme.breakpoints.values
  const carouselBreakpoints = {
    [muiBreakpoints.md]: {
      slidesPerView: 4,
      initialSlide: 1
    },
    [muiBreakpoints.xl]: {
      slidesPerView: 6,
      initialSlide: 2
    },
  }

  const getEvents = (year: string): string[] => {
    return t(`years.${year}`, {returnObjects: true})
  }
  //TODO translate locales!
  return (
    <section id={'history'} className={styles.history}>
      <Heading text={t('our-story')}/>
      <Swiper
        className={styles.timeline}
        slidesPerView={2}
        centeredSlides={true}
        freeMode={true}
        initialSlide={0}
        grabCursor={true}
        breakpoints={carouselBreakpoints}
      >
        {years.map(year => (
          <SwiperSlide className={styles.event} key={year}>
            <div className={styles.point}></div>
            <Typography variant={'h2'} className={styles.year}>{year}</Typography>
            <ul>
              {getEvents(year).map((event, index) => (
                <li key={index}><p>{event}</p></li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}