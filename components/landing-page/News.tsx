import { ArticleOutlined, Newspaper } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Paper,
  Typography,
  useMediaQuery
} from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { NewsContext } from '../../lib/context'
import formatDate from '../../utils/formatDate'
import textClamper from '../../utils/textClamper'
import { Heading } from './Heading'
import styles from './News.module.scss'
import { theme } from '../../styles/mui-theme'

const NewsPanel = () => {
  const { t } = useTranslation('news')
  const { locale, push } = useRouter()
  const articles = useContext(NewsContext)
  const lessThanSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Paper
      elevation={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box className={styles.newsPanel}>
        {articles ? articles.slice(0, lessThanSm ? 2 : 4).map(article => (
          <Card
            elevation={0}
            key={article.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: '1.1rem', textWrap: 'balance', cursor: 'pointer' }}
                onClick={() => push(`/news/${article.slug}`)}
              >
                {textClamper(article.title, 68)}
              </Typography>
              <Typography variant={'body2'} sx={{ color: 'dimgray', mb: '1rem' }}>
                <em>{formatDate(article.updatesTimestamp.slice(-1), locale)}</em>
              </Typography>
              <Typography
                variant={'body2'}
                sx={{ color: 'dimgray', }}
              >
                {textClamper(article.content.replace(/<\/?[^>]+(>|$)|&nbsp;/g, " "), 222)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='small'
                onClick={() => push(`/news/${article.slug}`)}
                startIcon={<ArticleOutlined/>}
              >
                {t('fullArticle')}
              </Button>
            </CardActions>
          </Card>
        )) : null}
      </Box>
      <Button
        sx={{ margin: '1rem', alignSelf: 'end' }}
        onClick={() => push(`/news`)}
        startIcon={<Newspaper/>}
      >
        {t('allArticles')}
      </Button>
    </Paper>
  )
}

export default function News () {
  const { t } = useTranslation('news')
  return (
    <section id='news'>
      <Heading text={t('news')}/>
      <Container>
        <NewsPanel/>
      </Container>
    </section>
  )
}
