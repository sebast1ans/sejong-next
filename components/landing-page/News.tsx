import { Card, CardContent, Container, Paper, useMediaQuery } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useContext } from 'react'
import { NewsContext } from '../../lib/context'
import { Heading } from './Heading'
import styles from './News.module.scss'
import { theme } from '../../styles/mui-theme'

const NewsPanel = () => {
  const articles = useContext(NewsContext)
  const lessThanSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Paper
      elevation={2}
      className={styles.newsPanel}
    >
      {articles.slice(lessThanSm ? 1 : undefined).map(article => (
        <Card elevation={0}>
          <CardContent>
            {article.title}
          </CardContent>
        </Card>
      ))}
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
