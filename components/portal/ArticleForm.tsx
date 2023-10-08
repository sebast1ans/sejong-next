import { Save, Publish, DeleteOutline } from '@mui/icons-material'
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import TipTapEditor from './TipTapEditor'

export type ArticleFormInputs = {
  title: string
  content: string
}

interface Props {
  editMode?: boolean
}

export default function ArticleForm ({ editMode }: Props) {
  const methods = useForm<ArticleFormInputs>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<ArticleFormInputs> = (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(methods.watch())
  return (
    <Container sx={{ my: '2rem' }}>
      <Paper elevation={2}>
        <Box
          component='form'
          onSubmit={methods.handleSubmit(onSubmit)}
          sx={{
            p: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <Typography variant='h2' fontWeight='bold'>{editMode ? 'Upravit článek' : 'Nový článek'}</Typography>
          <TextField
            type='text'
            color='info'
            label='Titulek'
            {...methods.register('title', {
              required: 'Vyplňte titulek'
            })}
          />
          <FormProvider {...methods}>
            <TipTapEditor/>
          </FormProvider>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap-reverse' }}>
              <Button
                startIcon={<DeleteOutline/>}
                variant='outlined'
                color='warning'
                // onClick={() => push(`${pathname}/create-article`)}
              >
                Zahodit
              </Button>
            <Box sx={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Button
              startIcon={<Save/>}
              variant='outlined'
              type='submit'
              // onClick={() => push(`${pathname}/create-article`)}
            >
              Uložit
            </Button>
              <Button
                startIcon={<Publish/>}
                variant='contained'
                // onClick={() => push(`${pathname}/create-article`)}
              >
                Publikovat
              </Button>
            </Box>
          </Box>

        </Box>
      </Paper>
    </Container>
  )
}
