import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'
import styles from './TrainingSessions.module.scss'

export default function TrainingSessions() {
  const {t} = useTranslation('training-sessions')

  return (
    <section id={'training-sessions'}>
      <Heading text={t('training-sessions')} />
    </section>
  )
}