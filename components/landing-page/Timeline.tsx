import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'

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
    <section id={'history'}>
      <Heading text={t('our-story')}/>
      <ul>
        {years.map(year => (
          <li key={year}>
            <h3>{year}</h3>
            <EventsList year={year}/>
          </li>
        ))}
      </ul>
    </section>
  )
}