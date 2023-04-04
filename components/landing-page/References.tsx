import { Card, CardContent } from '@mui/material'
import { Grade } from '@mui/icons-material'
import Image from 'next/image'
import { times } from 'lodash'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DocumentData } from 'firebase/firestore'
import styles from './References.module.scss'
import { theme } from '../../lib/mui-theme'


interface ReferenceCardProps {
  text: string,
  avatarImage?: string,
  name: string
}

const ReferenceCard = ({text, avatarImage, name}: ReferenceCardProps) => (
  <>
    <Card className={styles.reference}>
      <CardContent sx={{paddingBottom: '3rem'}}>
        <p>{text}</p>
      </CardContent>
      <div className={styles.avatar}>
        {avatarImage &&
          <Image className={styles.image} src={avatarImage} fill={true} alt={'world taekwondo'}/>
        }
      </div>
      <div className={styles.name}>
        <strong>{name}</strong>
      </div>
      <div className={styles.rating}>
        {times(5, () => (
          <Grade sx={{color: '#FFC107', fontSize: '1.7rem'}}/>
        ))}
      </div>
    </Card>
  </>
)

interface Props {
  data: DocumentData[]
}

export default function References({data}: Props) {
  const muiBreakpoints = theme.breakpoints.values
  const carouselBreakpoints = {
    [muiBreakpoints.md]: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    [muiBreakpoints.lg]: {
      slidesPerView: 4,
      spaceBetween: 30,
      initialSlide: 1
    },
  }

  return (
    <section id={'references'} className={styles.references}>
      <h2 className={styles.smallHeading}>Reference</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        initialSlide={0}
        centeredSlides={true}
        freeMode={true}
        breakpoints={carouselBreakpoints}
      >
        {data && data.map(reference => (
          <SwiperSlide>
            <ReferenceCard
              key={reference.id}
              text={reference.text}
              avatarImage={reference.photoURL}
              name={reference.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}