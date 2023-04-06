import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Container, Grid, Typography } from '@mui/material'
import { Heading } from './Heading'
import styles from './PriceList.module.scss'

export default function PriceList() {
  const {t} = useTranslation('price-list')
  const { locale } = useRouter()
  const priceInCZK = (price: number) =>
    Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0
    }).format(price)

  return (
    <section id={'price-list'} className={styles.priceList}>
      <Heading text={t('price-list')}/>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant={'h2'}>{t('primary-school')} Horáčkova</Typography>
            <table>
              <tbody>
              <tr>
                <td><span>{t('children-6-9')}:</span></td>
                <td>{`${priceInCZK(1800)}/${t('term')}`}</td>
              </tr>
              <tr>
                <td><span>{t('children-10-15')}:</span></td>
                <td>{`${priceInCZK(2300)}/${t('term')}`}</td>
              </tr>
              <tr>
                <td><span>{t('juniors-and-adults')}:</span></td>
                <td>{`${priceInCZK(2800)}/${t('term')}`}</td>
              </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'h2'}>{t('primary-school')} Smolkova</Typography>
            <table>
              <tbody>
              <tr>
                <td><span>{t('children-6-9')}:</span></td>
                <td>{`${priceInCZK(1800)}/${t('term')}`}</td>
              </tr>
              <tr>
                <td><span>{t('children-10-15')}:</span></td>
                <td>{`${priceInCZK(2300)}/${t('term')}`}</td>
              </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
        <hr/>
        <p>
          <span>{t('you-can-pay-by-bank-transfer')}:</span>&nbsp;154282135/0300
        </p>
        <p>
          <span>{t('message-to-recipient')}:</span>&nbsp;{t('name-and-surname-of-exerciser')}
        </p>
        <p>
          <span>{t('variable-symbol')}:</span>&nbsp;{t('ni-number')}
        </p>
        <small>{t('insurance-note')}</small>
      </Container>
    </section>
  )
}