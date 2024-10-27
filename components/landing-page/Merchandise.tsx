import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { Heading } from './Heading'
import style from './Merchandise.module.scss'

interface Item {
  name: string
  image: string
  price: number
}

interface ItemProps {
  item: Item
}

const Item = ({ item }: ItemProps) => {
  const { name, image, price } = item

  return (
    <>
      <Box className={style.item}>
        <div className={style.image}>
          <Image src={image} alt={name}/>
        </div>
        <Typography>{name}</Typography>
        <Typography>{price}</Typography>
      </Box>
    </>
  )
}
export function Merchandise() {
  const {t} = useTranslation('merchandise')

  const items: Item[] = [
    {
      image: '',
      name: 'Klicenka',
      price: 10
    },
    {
      image: '',
      name: 'Nalepky',
      price: 50
    },
    {
      image: '',
      name: 'Mikina',
      price: 350
    },
  ]

  return (
    <section id="merchandise" className={style.merchandise}>
      <Heading text={t('merchandise')}/>
      <Container>
        <Box className={style.list}>
          {items.map((item, i) => (<Item key={i} item={item}/>))}
        </Box>
      </Container>
    </section>
  )
}
