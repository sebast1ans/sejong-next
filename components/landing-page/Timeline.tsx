import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
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
        <li key={index}>{event}</li>
      ))}
    </ul>
  )

  return (
    <section id={'history'} className={styles.history}>
      <Heading text={t('our-story')}/>
      <ul className={styles.timeline}>
        {years.map(year => (
          <li className={styles.event} key={year}>
            <div className={styles.point}></div>
            <h3>{year}</h3>
            <EventsList year={year}/>
          </li>
        ))}
      </ul>
    </section>
  )
}