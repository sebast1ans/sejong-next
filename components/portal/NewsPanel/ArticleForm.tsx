import { addDoc, updateDoc, collection, arrayUnion } from '@firebase/firestore'
import { doc, DocumentData } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { db } from '../../../lib/firebase'
import Replay from '@mui/icons-material/Replay'
import Save from '@mui/icons-material/Save'
import Cancel from '@mui/icons-material/Cancel'
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
  const articleForm = useForm<ArticleFormInputs>({
    defaultValues: {
      title: "",
      content: "<p></p>",
      isPublished: false
    },
    mode: 'onBlur'
  })

  useEffect(() => {
    if (editMode && articleData) {
      articleForm.setValue('title', articleData.title, { shouldDirty: true })
      articleForm.setValue('content', articleData.content, { shouldDirty: true })
      articleForm.setValue('isPublished', articleData.isPublished, { shouldDirty: true })
    }
  }, [editMode, articleData, articleForm]);

  const handleClose = (_event: React.SyntheticEvent | Event) => {
    setOpen(false);
  }

  const handleCancel = async () => {
    if (articleForm.formState.isDirty) {
      if (confirm('Opravdu chcete zrušit celý článek?')) {
        articleForm.reset()
        await push('/portal')
        return
      }
    } else {
      articleForm.reset()
      await push('/portal')
    }
  }

  const handleReset = () => {
    if (confirm('Opravdu chcete vymazat celý obsah článku a začít znovu?')) {
      articleForm.reset()
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
          onSubmit={articleForm.handleSubmit(onSubmit)}
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
            {...articleForm.register('title', {
              required: 'Vyplňte titulek'
            })}
          />
          <FormProvider {...articleForm}>
            <TipTapEditor isDirty={articleForm.formState.isDirty}/>
          </FormProvider>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap-reverse' }}>
            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                startIcon={<Cancel/>}
                variant='outlined'
                color='secondary'
                onClick={handleCancel}
              >
                Storno
              </Button>
              <Button
                startIcon={<Replay/>}
                variant='outlined'
                color='warning'
                onClick={handleReset}
                disabled={!articleForm.formState.isDirty}
              >
                Začít od znova
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <FormControlLabel
                label='Veřejný'
                control={
                  <Checkbox
                    checked={articleForm.watch('isPublished')}
                    {...articleForm.register('isPublished')}
                  />
                }
              />
              <Button
                startIcon={<Save/>}
                variant='contained'
                type='submit'
              >
                Uložit
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
