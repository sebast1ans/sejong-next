import { Create } from '@mui/icons-material'
import { Button } from '@mui/material'

export default function NewsPortalPanel () {
  return (
    <Button startIcon={<Create />} variant='contained' >Napsat článek</Button>
  )
}
