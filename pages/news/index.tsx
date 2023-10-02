import { Container } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Heading } from '../../components/landing-page/Heading'
import { ArticlesList } from '../../components/news/ArticlesList'

export default function News () {
  const { t } = useTranslation('news')

  return (
    <>
      <Head>
        <title>{`${t('news')} | Sejong Taekwondo`}</title>
        <meta name="description" content="Sejong Taekwondo – sportovní klub Taekwondo WT v Praze"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Heading text={t('news')}/>
      <Container>
        <ArticlesList />
      </Container>
    </>
  )
}

export async function getStaticProps ( { locale }: {locale: string}) {

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'news',
      ])),
    }
  }
}
