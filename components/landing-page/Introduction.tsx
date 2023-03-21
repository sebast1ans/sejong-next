import { Container } from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/pagination'
import ReactHtmlParser from 'react-html-parser'
import { Heading } from './Heading'
import styles from './Introduction.module.scss'

interface Props {
  slidesData: DocumentData[]
}

export default function Introduction ({ slidesData }: Props) {
  return (
    <>
      <Heading text='Kdo jsme'/>
      <Swiper
        className={styles.slider}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{delay: 15000}}
        pagination={{ clickable: true }}
      >
        {slidesData && slidesData.map(slideData => (
            <SwiperSlide className={styles.slide} key={slideData.id}>
              <Container className={styles.textContainer}>
                <h1>{ReactHtmlParser(slideData.title)}</h1>
                <p>{ReactHtmlParser(slideData.text)}</p>
              </Container>
              <img
                src={slideData.backgroundURL}
                className={styles.slideImage}
                alt={slideData.title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
