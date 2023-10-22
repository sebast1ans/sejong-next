import { addDoc, updateDoc, collection, arrayUnion } from '@firebase/firestore'
import { doc, DocumentData } from 'firebase/firestore'
import { useEffect } from 'react'
import { db } from '../../../lib/firebase'
import { Save, Publish, DeleteOutline } from '@mui/icons-material'
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import TipTapEditor from './TipTapEditor'
import slugify from 'slugify'
import { useRouter } from 'next/router'

export type ArticleFormInputs = {
  title: string
  content: string
}

interface Props {
  articleData?: DocumentData | null
  editMode?: boolean
}

export default function ArticleForm ({ articleData, editMode }: Props) {
  const { query, push } = useRouter()

  const methods = useForm<ArticleFormInputs>({
    defaultValues: {
      title: "",
      content: ""
    },
    mode: 'onBlur'
  })

  useEffect(() => {
    if (editMode && articleData) {
      methods.setValue('title', articleData.title, {shouldDirty: true})
      methods.setValue('content', articleData.content, {shouldDirty: true})
    }
  }, [editMode, articleData, methods]);

  const onSubmit: SubmitHandler<ArticleFormInputs>
    = async (data) => {
    try {
      if (editMode && articleData) {
        await updateDoc(doc(db, "news", query.id as string), {
          ...data,
          slug: encodeURI(slugify(data.title, {lower: true, strict: true})),
          updatesTimestamp: arrayUnion(Date.now())
        })
      } else {
        await addDoc(collection(db, 'news'), {
          ...data,
          slug: encodeURI(slugify(data.title, {lower: true, strict: true})),
          timestamp: Date.now()
        })
      }
      await push('/portal')

    } catch (error) {
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
                onClick={() => methods.reset({
                  title: "",
                  content: ""
                })}
              >
                Zahodit
              </Button>
            <Box sx={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Button
              startIcon={<Save/>}
              variant='outlined'
              // onClick={() => push(`${pathname}/create-article`)}
            >
              Uložit
            </Button>
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
    </Container>
  )
}
