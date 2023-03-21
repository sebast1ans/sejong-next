import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import styles from './Hero.module.scss'
import 'swiper/swiper.css'
import 'swiper/css/effect-fade'

interface Props {
  heroImages: string[]
}
export default function Hero ({ heroImages }: Props) {

  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{delay: 3000}}
        loop={true}
        effect={'fade'}
        speed={1000}
        allowTouchMove={false}
      >
        {heroImages.map(heroImage => (
          <SwiperSlide key={heroImage}>
            <div
              style={{background: `url(${heroImage}) no-repeat center`}}
              className={styles.background}
            >
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

