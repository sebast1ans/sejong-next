import { Create } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'

export default function NewsPortalPanel () {
  const { push, pathname } = useRouter()

  return (
    <>
      <Button
        startIcon={<Create/>}
        variant='contained'
        onClick={() => push(`${pathname}/create-article`)}
      >
        Napsat článek
      </Button>
    </>
  )
}
