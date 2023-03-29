import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import styles from './Timeline.module.scss'

export default function Timeline() {
  const {t} = useTranslation('timeline')
  const years = Object.keys(t('years', {returnObjects: true}))

  const getEvents = (year: string): string[] => {
    return t(`years.${year}`, {returnObjects: true})
  }

  const EventsList = ({year}: { year: string }): JSX.Element => (
    <ul>
      {getEvents(year).map((event, index) => (
        <li key={index}><p>{event}</p></li>
      ))}
    </ul>
  )

  return (
    <section id={'history'} className={styles.history}>
      <Heading text={t('our-story')}/>
      <Swiper
        style={{overflow: 'visible'}}
        slidesPerView={2}
        centeredSlides={true}
        freeMode={true}
        initialSlide={0}
        grabCursor={true}
        breakpoints={{
          900: {
            slidesPerView: 4,
            initialSlide: 1
          },
          1400: {
            slidesPerView: 6,
            initialSlide: 2
          }
        }}
      >
      {years.map(year => (
        <SwiperSlide className={styles.event} key={year}>
          <div className={styles.point}></div>
          <h3>{year}</h3>
          <EventsList year={year}/>
        </SwiperSlide>
      ))}
    </Swiper>
</section>
)
}