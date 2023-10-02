import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { ArticleCard } from './ArticleCard'


interface Props {
  article: DocumentData
}

export const Article = ({ article }: Props) => {
  const { push } = useRouter()
  const { t } = useTranslation('news')

  return (
    <Box sx={{mb: '4rem'}}>
      <Button
        onClick={() => push('/news')}
        sx={{ mt: '3rem', mb: '1rem' }}
        startIcon={<ArrowBack/>}
      >
        {t('backToArticlesList')}
      </Button>
      <ArticleCard article={article}/>
    </Box>
  )
}
