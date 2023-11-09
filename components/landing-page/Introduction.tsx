import { Container, Typography } from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import convertHtmlToReact from '@hedgedoc/html-to-react'
import { Heading } from './Heading'
import styles from './Introduction.module.scss'
import { getPropertyWithSuffix } from '../../lib/getPropertyWithSuffix'

interface Props {
  slidesData: DocumentData[]
}

export default function Introduction ({ slidesData }: Props) {
  const { locale } = useRouter()
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
    </section>
  )
}
