import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useMerchCollection } from '../../../hooks/useMerchCollection'

export function Merchandise () {
  const [merchandiseSnapshot, loading] = useMerchCollection()

  console.log(merchandiseSnapshot?.docs.map(doc => doc.data()),loading)
  return (
    <>
      <Button
        startIcon={<Add/>}
        variant='contained'
      >
        Přidat merch
      </Button>
    </>
  )
}

