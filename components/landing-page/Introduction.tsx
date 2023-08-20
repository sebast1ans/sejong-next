import { Container, Typography } from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import convertHtmlToReact from '@hedgedoc/html-to-react'
import { Heading } from './Heading'
import styles from './Introduction.module.scss'

interface Props {
  slidesData: DocumentData[]
}

export default function Introduction ({ slidesData }: Props) {
  const { t } = useTranslation('introduction')

  return (
    <section id='about-us' className={styles.introduction}>
      <Heading text={t('who-are-we')}/>
      <Swiper
        className={styles.slider}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 15000 }}
        pagination={{ clickable: true }}
      >
        {slidesData && slidesData.map(slideData => (
          <SwiperSlide
            style={{ background: `url(${slideData.backgroundURL})` }}
            className={styles.slide}
            key={slideData.id}
          >
            <div className={styles.backdropFilter}>
              <Container className={styles.slideTextContainer}>
                <Typography variant={'h2'}>{convertHtmlToReact(slideData.title)}</Typography>
                <Typography variant={'body1'}>{convertHtmlToReact(slideData.text)}</Typography>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
