import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import IconButton from '@mui/material/IconButton'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Timeline.module.scss'
import { theme } from '../../styles/mui-theme'
import { Typography, useMediaQuery } from '@mui/material'

const SwiperNavigationButtons = () => {
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))
  const buttonsPosition = {
    top: `${lessThanMd ? '14.6rem' : '16.2rem'}`,
    margin: '.5rem',
    zIndex: 2
  }

  return (
    <>
      <IconButton
        className='timeline-nav-prev'
        size='large'
        color='primary'
        sx={{
          position: 'absolute',
          top: buttonsPosition.top,
          left: buttonsPosition.margin,
          zIndex: buttonsPosition.zIndex,
        }}
      >
        <ArrowBackIosNewIcon/>
      </IconButton>
      <IconButton
        className='timeline-nav-next'
        size='large'
        color='primary'
        sx={{
          position: 'absolute',
          top: buttonsPosition.top,
          right: buttonsPosition.margin,
          zIndex: buttonsPosition.zIndex
        }}
      >
        <ArrowForwardIosIcon/>
      </IconButton>
    </>
  )
}

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
        navigation={{
          prevEl: '.timeline-nav-prev',
          nextEl: '.timeline-nav-next'
        }}
        slidesPerView={2}
        centeredSlides={true}
        freeMode={true}
        initialSlide={0}
        grabCursor={true}
        breakpoints={carouselBreakpoints}
        modules={[Navigation]}
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
      <SwiperNavigationButtons/>
    </section>
  )
}
