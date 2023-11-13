import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { DocumentData } from 'firebase/firestore'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import convertHtmlToReact from '@hedgedoc/html-to-react'
import { theme } from '../../styles/mui-theme'
import { Heading } from './Heading'
import styles from './Introduction.module.scss'
import { getPropertyWithSuffix } from '../../lib/getPropertyWithSuffix'

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true
  }
}

const SwiperNavigationButtons = () => {
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))
  const buttonsPosition = {
    top: '50%',
    transform: 'translateY(-50%)',
    margin: lessThanMd ? '.5rem' : '1.5rem',
    zIndex: 2
  }

  return (
    <>
      <IconButton
        className='introduction-nav-prev'
        size='large'
        color='white'
        sx={{
          position: 'absolute',
          top: buttonsPosition.top,
          transform: buttonsPosition.transform,
          left: buttonsPosition.margin,
          zIndex: buttonsPosition.zIndex,
        }}
      >
        <ArrowBackIosNewIcon/>
      </IconButton>
      <IconButton
        className='introduction-nav-next'
        size='large'
        color='white'
        sx={{
          position: 'absolute',
          top: buttonsPosition.top,
          right: buttonsPosition.margin,
          transform: buttonsPosition.transform,
          zIndex: buttonsPosition.zIndex
        }}
      >
        <ArrowForwardIosIcon/>
      </IconButton>
    </>
  )
}

interface Props {
  slidesData: DocumentData[]
}

export default function Introduction ({ slidesData }: Props) {
  const { locale } = useRouter()
  const { t } = useTranslation('introduction')

  return (
    <section id='about-us' className={styles.introduction}>
      <Heading text={t('who-are-we')}/>
      <Box position='relative'>
        <Swiper
          className={styles.slider}
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            prevEl: '.introduction-nav-prev',
            nextEl: '.introduction-nav-next'
          }}
          loop={true}
          autoplay={{ delay: 15000 }}
          pagination={{ clickable: true }}
        >
          {slidesData && slidesData.map(slideData => (
            <SwiperSlide
              style={{ backgroundColor: 'black', background: `url(${slideData.backgroundURL})` }}
              className={styles.slide}
              key={slideData.id}
            >
              <div className={styles.backdropFilter}>
                <Container className={styles.slideTextContainer}>
                  <Typography variant={'h2'}>
                    {convertHtmlToReact(
                      slideData[getPropertyWithSuffix('title', locale)]
                      ?? slideData[getPropertyWithSuffix('title', 'cs')]
                    )}
                  </Typography>
                  <Typography variant={'body1'}>
                    {convertHtmlToReact(
                      slideData[getPropertyWithSuffix('text', locale)]
                      ?? slideData[getPropertyWithSuffix('text', 'cs')]
                    )}
                  </Typography>
                </Container>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNavigationButtons/>
      </Box>
    </section>
  )
}
