import { addDoc, updateDoc, collection, arrayUnion } from '@firebase/firestore'
import { doc, DocumentData } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { db } from '../../../lib/firebase'
import { Publish, DeleteOutline } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import TipTapEditor from './TipTapEditor'
import slugify from 'slugify'

export type ArticleFormInputs = {
  title: string
  content: string
  isPublished: boolean
}

interface Props {
  articleData?: DocumentData | null
  editMode?: boolean
}

export default function ArticleForm ({ articleData, editMode }: Props) {
  const { push } = useRouter()
  const [open, setOpen] = useState(false)
  const methods = useForm<ArticleFormInputs>({
    defaultValues: {
      title: "",
      content: "",
      isPublished: false
    },
    mode: 'onBlur'
  })

  useEffect(() => {
    if (editMode && articleData) {
      methods.setValue('title', articleData.title, { shouldDirty: true })
      methods.setValue('content', articleData.content, { shouldDirty: true })
      methods.setValue('isPublished', articleData.isPublished, { shouldDirty: true })
    }
  }, [editMode, articleData, methods]);

  const handleClose = (_event: React.SyntheticEvent | Event) => {
    setOpen(false);
  }

  const handleReset = () => {
    if (confirm('Opravdu chcete vymazat celý obsah článku a začít znovu?')) {
      methods.reset({
        title: "",
        content: "",
        isPublished: false
      })
    }

    return
  }

  const onSubmit: SubmitHandler<ArticleFormInputs> = async (data: ArticleFormInputs) => {
    try {
      if (editMode && articleData) {
        await updateDoc(doc(db, "news", articleData.id), {
          ...data,
          slug: encodeURI(slugify(data.title, { lower: true, strict: true })),
          updatesTimestamp: arrayUnion(Date.now())
        })
      } else {
        await addDoc(collection(db, 'news'), {
          ...data,
          slug: encodeURI(slugify(data.title, { lower: true, strict: true })),
          timestamp: Date.now()
        })
      }

      setOpen(true)

      setTimeout(() => {
        push('/portal')
      }, 1500)

    } catch (error) {
      console.log('error')
      console.log(error)
    }
  }

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
            <TipTapEditor isDirty={methods.formState.isDirty}/>
          </FormProvider>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap-reverse' }}>
            <Button
              startIcon={<DeleteOutline/>}
              variant='outlined'
              color='warning'
              onClick={handleReset}
            >
              Zahodit
            </Button>
            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <FormControlLabel
                label='Veřejný'
                control={
                  <Checkbox
                    checked={methods.watch('isPublished')}
                    {...methods.register('isPublished')}
                  />
                }
              />
              <Button
                startIcon={<Publish/>}
                variant='contained'
                type='submit'
              >
                Publikovat
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={handleClose}
      >
        <Alert severity='success' onClose={handleClose}>Článek je uložen</Alert>
      </Snackbar>
    </Container>
  )
}
