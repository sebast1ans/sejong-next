import convertHtmlToReact from '@hedgedoc/html-to-react'
import { ArticleOutlined } from '@mui/icons-material'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { useRouter } from 'next/router'
import formatDate from '../../utils/formatDate'
import styles from './Article.module.scss'


interface Props {
  article: DocumentData
  inDialog?: boolean
}

export const ArticleCard = ({ article, inDialog }: Props) => {
  const { locale } = useRouter()

  return (
    <Card elevation={2} sx={{ maxWidth: '50rem' }}>
      {!inDialog ? (
        <Typography
          sx={{
            textAlign: 'right',
            mb: '-1rem',
            mt: '1rem',
            mr: '1rem'
          }}
        >
          <ArticleOutlined fontSize='large' sx={{ color: 'lightgray' }}/>
        </Typography>
      ) : null}
      <CardContent className={styles.article}>
        <Typography
          variant='h1'
          className={styles.title}
        >
          {article?.title}
        </Typography>
        <Box className={styles.date}>
          <em>{formatDate(article?.updatesTimestamp?.slice(-1), locale)}</em>
        </Box>
        <Box sx={{ mb: '1rem' }}>
          {convertHtmlToReact(article?.content)}
        </Box>
      </CardContent>
    </Card>
  )
}
