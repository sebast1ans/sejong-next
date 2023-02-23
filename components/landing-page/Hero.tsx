import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Hero.module.scss'
import 'swiper/swiper.css'

export default function Hero() {
  return (
    <Swiper
      slidesPerView={1}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}
