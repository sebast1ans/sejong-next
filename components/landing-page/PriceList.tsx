import { Heading } from './Heading'
import { Container, Grid } from '@mui/material'
import { useTranslation } from 'next-i18next'
import styles from './PriceList.module.scss'

export default function PriceList() {
  const {t} = useTranslation('price-list')

  return (
    <section id={'price-list'} className={styles.priceList}>
      <Heading text={t('price-list')}/>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <h2>ZS Horackova</h2>
            <table>
              <tbody>
              <tr>
                <td><strong>Děti 6 - 9 let:</strong></td>
                <td>1 800,-/pololetí</td>
              </tr>
              <tr>
                <td><strong>Děti 10 - 15 let:</strong></td>
                <td>2 300,-/pololetí</td>
              </tr>
              <tr>
                <td><strong>Dorost a dospělí:</strong></td>
                <td>2 800,-/pololetí</td>
              </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>ZS Smolkova</h2>
            <table>
              <tbody>
              <tr>
                <td><strong>Děti 6 - 9 let:</strong></td>
                <td>1 800,-/pololetí</td>
              </tr>
              <tr>
                <td><strong>Děti 10 - 15 let:</strong></td>
                <td>2 300,-/pololetí</td>
              </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
        <hr/>
        <p><strong>Platbu můžete provést bankovním převodem na účet:</strong> 154282135/0300</p>
        <strong></strong>
        <p><strong>Zpráva příjemci:</strong> jméno a příjmení cvičence
        </p>
        <p><strong>Variabilní symbol:</strong> rodné číslo bez lomítka
        </p>
        <small>U vybraných zdravotních pojišťoven lze zažádat o příspěvek v rámci jednotlivých preventivních
          programů (příspěvek na sportovní kroužek, pohybové aktivity apod.). Klub vystaví potvrzení o
          platbě, které pojišťovně předložíte. Konkrétní informace o podmínkách získáte u své zdravotní
          pojišťovny.</small>
      </Container>
    </section>
  )
}