import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Heading } from './Heading'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import styles from './Contact.module.scss'

export default function Contact () {
  const { t } = useTranslation('contact')
  const { locale }  = useRouter()

  const czPhonePrefix = locale !== 'cs' ? '+420' : ''

  return (
    <section id={'contact'}>
      <Heading text={t('contact')}/>
      <div className={styles.contactInfo}>
        <p><strong>Sejong Taekwondo Dojang, z. s.</strong></p>
        <p><strong>{t('email')}: </strong><Link href={'mailto:info@sejong.cz'} target={'_top'}>info@sejong.cz</Link></p>
        <p><strong>{t('business-id')}: </strong> 68403518</p>
        <p><strong>{t('cus-number')}: </strong>3107729</p>
        <p><strong>{t('bank-account-number')}: </strong> 154282135/0300</p>
        <br/>
        <p>
          <PermContactCalendarIcon/>
          <strong> Mgr. Ondřej Havlíček</strong>
        </p>
        <p><strong>{t('telephone')}: </strong> {czPhonePrefix} 604 541 100</p>
        <p><strong>{t('email')}: </strong> <Link href={'mailto:ondra@sejong.cz'} target={'_top'}>ondra@sejong.cz</Link></p>
        <br/>
        <p>
          <PermContactCalendarIcon/>
          <strong>Bc. Phuong Nhung Havlíčková</strong>
        </p>
        <p><strong>{t('telephone')} (Tiếng Việt): </strong> {czPhonePrefix} 774 545 777 </p>
        <p>
          <strong>{t('email')}: </strong>
          <a href={'mailto:hoang.pnhung@gmail.com'} target={'_top'}>hoang.pnhung@gmail.com</a>
        </p>
      </div>
    </section>
  )
}
