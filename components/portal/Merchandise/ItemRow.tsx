import { Item } from '@/types/Item'
import { TableCell, TableRow, Typography } from '@mui/material'
import Image from 'next/image'

interface ItemPreviewCardProps {
  item: Item
}

export function ItemRow({item}: ItemPreviewCardProps) {
  const {name, image, price, available, visible } = item

  return (
    <TableRow>
      <TableCell>
        <Image src={image[0]} width={50} height={50} alt={name}/>
      </TableCell>
      <TableCell>
        <Typography>{name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{price}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{available}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{visible}</Typography>
      </TableCell>
    </TableRow>
  )
}
