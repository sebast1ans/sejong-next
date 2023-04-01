import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Container, Grid } from '@mui/material'
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
            <h2>{t('primary-school')} Horáčkova</h2>
            <table>
              <tbody>
              <tr>
                <td><strong>{t('children-6-9')}:</strong></td>
                <td>{`${priceInCZK(1800)}/${t('term')}`}</td>
              </tr>
              <tr>
                <td><strong>{t('children-10-15')}:</strong></td>
                <td>{`${priceInCZK(2300)}/${t('term')}`}</td>
              </tr>
              <tr>
                <td><strong>{t('juniors-and-adults')}:</strong></td>
                <td>{`${priceInCZK(2800)}/${t('term')}`}</td>
              </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>{t('primary-school')} Smolkova</h2>
            <table>
              <tbody>
              <tr>
                <td><strong>{t('children-6-9')}:</strong></td>
                <td>{`${priceInCZK(1800)}/${t('term')}`}</td>
              </tr>
              <tr>
                <td><strong>{t('children-10-15')}:</strong></td>
                <td>{`${priceInCZK(2300)}/${t('term')}`}</td>
              </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
        <hr/>
        <p>
          <strong>{t('you-can-pay-by-bank-transfer')}:</strong>
          &nbsp;154282135/0300</p>
        <strong></strong>
        <p>
          <strong>{t('message-to-recipient')}:</strong>
          &nbsp;{t('name-and-surname-of-exerciser')}
        </p>
        <p>
          <strong>{t('variable-symbol')}:</strong>
          &nbsp;{t('ni-number')}
        </p>
        <small>{t('insurance-note')}</small>
      </Container>
    </section>
  )
}