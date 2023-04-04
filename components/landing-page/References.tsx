import { Card, CardContent, Container } from '@mui/material'
import { times } from 'lodash'
import Image from 'next/image'
import { Grade } from '@mui/icons-material'
import styles from './References.module.scss'
import wt from '../../public/logos/footer/wt.png'
export default function References() {
  return (
    <section id={'references'}>
      <Container>
        <h2 className={styles.smallHeading}>Reference</h2>
        <Card className={styles.reference}>
          <CardContent sx={{paddingBottom: '3rem'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium consectetur dolorum ea eius eligendi, expedita facere minima natus, nostrum numquam omnis quae qui quidem quisquam, quos sequi sit tenetur.</p>
          </CardContent>
          <div className={styles.avatar}>
            <Image className={styles.image} src={wt} width={50} height={50} alt={'world taekwondo'}/>
          </div>
          <div className={styles.name}>
            <strong>Pepa Horak</strong>
          </div>
          <div className={styles.rating}>
            {times(5, () => (
              <Grade sx={{color: '#FFC107', fontSize: '1.7rem'}}/>
            ))}
          </div>
        </Card>
      </Container>

    </section>
  )
}