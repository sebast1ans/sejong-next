import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/effect-fade'
import styles from './Hero.module.scss'

interface Props {
  heroImages: string[]
}

export default function Hero ({ heroImages }: Props) {
  const [swiperLoaded, setSwiperLoaded] = useState(false)

  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{delay: 3000}}
        loop={true}
        effect={'fade'}
        speed={1000}
        allowTouchMove={false}
        onAfterInit={() => setTimeout(() => setSwiperLoaded(true), 200)}
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
      {swiperLoaded && (
        <div className={styles.heroLogo}></div>
      )}
    </>
  )
}

