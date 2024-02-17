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
        <meta property="og:title" content={` ${t('news')} | Sejong Taekwondo`}/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sejong-web.appspot.com/o/images%2FogImg.png?alt=media&token=d38e0436-e425-4218-8223-e157ba171bdd"/>
        <meta name="og:image:alt" content="Sejong Taekwondo"/>
        <meta property="og:url" content="https://www.sejong.cz"/>
        <meta property="og:description" content="Sejong Taekwondo – sportovní klub Taekwondo WT v Praze"/>
        <meta property="og:site_name" content="Sejong Taekwondo"/>
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
