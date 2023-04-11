import styles from './AboutTaekwondo.module.scss'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'

export default function AboutTaekwondo() {
  const { t } = useTranslation('about-taekwondo')

  return (
    <>
      <Heading text={t('what-is-taekwondo')} />
    </>
  )
}