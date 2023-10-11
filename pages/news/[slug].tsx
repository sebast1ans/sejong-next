import { Container } from '@mui/material'
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Article } from '../../components/news/Article'
import { getArticlesData } from '../../lib/getArticlesData'

export default function ArticleView ({ articleData }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>{`${articleData.title} | Sejong Taekwondo`}</title>
        <meta name="description" content="Sejong Taekwondo – sportovní klub Taekwondo WT v Praze"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Container>
        <Article article={articleData}/>
      </Container>
    </>
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

  console.log(paths)
  return {
    paths,
    fallback: true
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params, locale }) => {
  const articlesData = await getArticlesData()

  return {
    props: {
      articleData: articlesData.filter(article => { return article.slug === params?.slug})[0],
      ...(await serverSideTranslations(locale!, [
        'news',
      ])),
    },
  }
}) satisfies GetStaticProps
