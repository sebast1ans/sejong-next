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
import { Box, Typography } from '@mui/material'

const SwiperNavigationButtons = () => {
  const buttonsPosition = {
    margin: '.5rem',
    zIndex: 2
  }

  return (
    <Box display='flex' justifyContent='space-between'>
      <IconButton
        className='swiper-nav-prev'
        size='large'
        color='primary'
        sx={{
          left: buttonsPosition.margin,
          zIndex: buttonsPosition.zIndex,
        }}
      >
        <ArrowBackIosNewIcon/>
      </IconButton>
      <IconButton
        className='swiper-nav-next'
        size='large'
        color='primary'
        sx={{
          right: buttonsPosition.margin,
          zIndex: buttonsPosition.zIndex
        }}
      >
        <ArrowForwardIosIcon/>
      </IconButton>
    </Box>
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
      <SwiperNavigationButtons/>
      <Swiper
        className={styles.timeline}
        navigation={{
          prevEl: '.swiper-nav-prev',
          nextEl: '.swiper-nav-next'
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
    </section>
  )
}
