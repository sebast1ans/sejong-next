import convertHtmlToReact from '@hedgedoc/html-to-react'
import { ArrowBack, ArticleOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import formatDate from '../../utils/formatDate'
import styles from './Article.module.scss'

interface Props {
  article: DocumentData
}

export const ArticleComponent = ({ article }: Props) => {
  const { locale, push } = useRouter()
  const { t } = useTranslation('news')

  return (
    <>
      <Button
        onClick={() => push('/news')}
        sx={{mt: '3rem', mb: '1rem'}}
        startIcon={<ArrowBack />}
      >
        {t('backToArticlesList')}
      </Button>
      <Card elevation={2} sx={{mb: '4rem', maxWidth: '50rem'}}>
        <CardContent className={styles.article}>
          <Typography sx={{textAlign: 'right'}}>
            <ArticleOutlined fontSize='large' sx={{color: 'lightgray'}}/>
          </Typography>
          <Typography
            variant='h1'
            sx={{fontWeight: '600', fontSize: '2.5rem', mb: '1.2rem', mt: '-1rem'}}
          >
            {article.title}
          </Typography>
          <Box className={styles.date}>
            <em>{formatDate(article.updatesTimestamp.slice(-1), locale)}</em>
          </Box>
          <Box sx={{ mb: '1rem'}}>
            { convertHtmlToReact(article.content)}
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
