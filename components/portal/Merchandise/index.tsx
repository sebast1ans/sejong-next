import { Item } from '@/types/Item'
import { Add } from '@mui/icons-material'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useMerchCollection } from '../../../hooks/useMerchCollection'
import { ItemRow } from './ItemRow'

export function Merchandise () {
  const [merchandiseSnapshot, loading, error] = useMerchCollection()

  if (error) {
    return (
      <>
        <Typography>Nepodařilo se načíst seznam zboží :(</Typography>
        <Typography>Error zpráva: {error.message}</Typography>
      </>
    )
  }

  if (loading) {
    return (
      <>
        <Typography>Načítání...</Typography>
      </>
    )
  }

  return (
    <>
      <Button
        startIcon={<Add/>}
        variant='contained'
      >
        Přidat merch
      </Button>
      <TableContainer component={Paper} variant={'outlined'} sx={{mt: 2}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Název</TableCell>
              <TableCell>Cena</TableCell>
              <TableCell>Dostupnost</TableCell>
              <TableCell>Viditelnost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {merchandiseSnapshot &&
            !merchandiseSnapshot.empty ?
              merchandiseSnapshot.docs.map(item =>
                <ItemRow key={item.id} item={item.data() as Item}/>
              ) : (
                <Typography>Seznam je prázdný</Typography>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

