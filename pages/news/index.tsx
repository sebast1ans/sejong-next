import { Container } from '@mui/material'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Heading } from '../../components/landing-page/Heading'
import { ArticlesList } from '../../components/news/ArticlesList'
import { getArticlesData } from '../../lib/getArticlesData'

export default function News({articlesData}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Heading text='Novinky' />
      <ArticlesList articles={articlesData} />
    </Container>
  )
}

export const getStaticProps = (async () => {
  const articlesData = await getArticlesData()

  return {
    props: {
      articlesData
    },
  }
}) satisfies GetStaticProps
