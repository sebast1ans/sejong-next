import { Box, Container, Paper, TextField, Typography } from '@mui/material'
import TipTapEditor from './TipTapEditor'

interface Props {
  editMode?: boolean
}

export default function ArticleForm ({ editMode }: Props) {

  return (
    <Container sx={{ my: '2rem' }}>
      <Paper elevation={2}>
        <Box
          component='form'
          sx={{
            p: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <Typography variant='h2'>{editMode ? 'Upravit článek' : 'Nový článek'}</Typography>
          <TextField
            type='text'
            color='info'
            label='Titulek'
            sx={{
              minWidth: '40rem'
            }}
          />
          <TipTapEditor />
        </Box>
      </Paper>
    </Container>
  )
}
