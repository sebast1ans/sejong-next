import { Container, Typography } from '@mui/material'
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths, GetStaticPathsContext,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Article } from '../../components/news/Article'
import { getArticleDataWithSlug } from '../../lib/getArticleDataWithSlug'
import { getArticlesData } from '../../lib/getArticlesData'

export default function ArticleView ({ articleData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`${articleData?.title} | Sejong Taekwondo`}</title>
        <meta name="description" content="Sejong Taekwondo – sportovní klub Taekwondo WT v Praze"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Container>
        {articleData ? <Article article={articleData}/> : <Typography variant="h1">Článek neexistuje :(</Typography>}
      </Container>
    </>
  )
}

export const getStaticPaths = (async ({ locales }: GetStaticPathsContext) => {
  const articles = await getArticlesData()
  const paths =
    locales!.map(locale =>
      articles.map(article => ({
          params: {
            slug: article.slug
          },
          locale
        })
      )).flat()

  return {
    paths,
    fallback: 'blocking',
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params, locale }) => {
  const articleData = await getArticleDataWithSlug(params?.slug)

  return {
    props: {
      articleData: articleData || null,
      ...(await serverSideTranslations(locale!, [
        'news',
      ])),
      revalidate: 10
    },
  }
}) satisfies GetStaticProps
