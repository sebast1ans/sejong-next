import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Heading } from './Heading'
import { Button, Typography } from '@mui/material'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import styles from './Contact.module.scss'

export default function Contact () {
  const { t } = useTranslation('contact')
  const { locale }  = useRouter()

  const czPhonePrefix = locale !== 'cs' ? '+420' : ''

  return (
    <section id={'contact'}>
      <Heading text={t('contact')}/>
      <div className={styles.contactInfo}>
        <Typography variant={'body1'}>
          <span>Sejong Taekwondo Dojang, z. s.</span>
        </Typography>
        <Typography variant={'body1'}>
          <span>{t('email')}: </span>
          <Link href={'mailto:info@sejong.cz'} target={'_top'}>info@sejong.cz</Link>
        </Typography>
        <Typography variant={'body1'}>
          <span>{t('business-id')}: </span> 68403518
        </Typography>
        <Typography variant={'body1'}>
          <span>{t('cus-number')}: </span>3107729
        </Typography>
        <Typography variant={'body1'}>
          <span>{t('bank-account-number')}: </span> 154282135/0300
        </Typography>
        <Link href={'#training-sessions'}>
          <Button
            variant={'outlined'}
            sx={{margin: '1rem 0'}}
          >
            {t('training-sessions')}&nbsp;<ArrowUpwardIcon/>
          </Button>
        </Link>
        <Typography variant={'body1'}>
          <PermContactCalendarIcon/>
          <span> Mgr. Ondřej Havlíček</span>
        </Typography>
        <Typography variant={'body1'}>
          <span>{t('telephone')}: </span>
          {czPhonePrefix} 604 541 100 (WhatsApp)
        </Typography>
        <Typography variant={'body1'}>
          <span>{t('email')}: </span>
          <Link href={'mailto:ondra@sejong.cz'} target={'_top'}>ondra@sejong.cz</Link></Typography>
        {/*<br/>*/}
        {/*<Typography variant={'body1'}>*/}
        {/*  <PermContactCalendarIcon/>*/}
        {/*  <span>Bc. Phuong Nhung Havlíčková</span>*/}
        {/*</Typography>*/}
        {/*<Typography variant={'body1'}>*/}
        {/*  <span>{t('telephone')} (Tiếng Việt): </span>*/}
        {/*  {czPhonePrefix} 774 545 777 </Typography>*/}
        {/*<Typography variant={'body1'}>*/}
        {/*  <span>{t('email')}: </span>*/}
        {/*  <a href={'mailto:hoang.pnhung@gmail.com'} target={'_top'}>hoang.pnhung@gmail.com</a>*/}
        {/*</Typography>*/}
      </div>
    </section>
  )
}
