import styles from './Coaches.module.scss'
import { DocumentData } from 'firebase/firestore'
import { Heading } from './Heading'
import { useTranslation } from 'next-i18next'

interface Props {
  data: DocumentData[]
}
export default function Coaches({data}: Props) {
  const {t} = useTranslation('coaches')
  console.log(data)
  return (
    <section id={'coaches'}>
      <Heading text={t('coaches')}/>
    </section>
  )
}