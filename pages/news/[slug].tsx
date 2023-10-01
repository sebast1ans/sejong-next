import { Container } from '@mui/material'
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { Article } from '../../components/news/Article'
import { getArticlesData } from '../../lib/getArticlesData'

export default function ArticleView ({ articleData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Article article={articleData}/>
    </Container>
  )
}

export const getStaticPaths = (async ({ locales }) => {
  const articles = await getArticlesData()
  const paths =
    locales!.map(locale =>
      articles.map(article => ({
          params: {
            slug: article.slug
          },
          locale: locale
        })
      )).flat()

  return {
    paths,
    fallback: false
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params }) => {
  const articlesData = await getArticlesData()

  return {
    props: {
      articleData: articlesData.filter(article => { return article.slug === params?.slug})[0]
    },
  }
}) satisfies GetStaticProps
