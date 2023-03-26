import { Container } from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper.css'
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
    <section id='about-us'>
      <Heading text={t('who-are-we')}/>
      <Swiper
        className={styles.slider}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 15000 }}
        pagination={{ clickable: true }}
      >
        {slidesData && slidesData.map(slideData => (
          <SwiperSlide className={styles.slide} key={slideData.id}>
            <Container className={styles.textContainer}>
                <h1>{convertHtmlToReact(slideData.title)}</h1>
                <p>{convertHtmlToReact(slideData.text)}</p>
              </Container>
              <img
                src={slideData.backgroundURL}
                className={styles.slideImage}
                alt={slideData.title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}
