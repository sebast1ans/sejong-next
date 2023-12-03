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
        <meta property="og:title" content={`${articleData?.title} | Sejong Taekwondo`}/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sejong-web.appspot.com/o/images%2FogImg.png?alt=media&token=d38e0436-e425-4218-8223-e157ba171bdd"/>
        <meta name="og:image:alt" content="Sejong Taekwondo"/>
        <meta property="og:url" content="http://www.sejong.cz"/>
        <meta property="og:description" content="Sejong Taekwondo – sportovní klub Taekwondo WT v Praze"/>
        <meta property="og:site_name" content="Sejong Taekwondo"/>
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
