import { Container } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Heading } from '../../components/landing-page/Heading'
import { ArticlesList } from '../../components/news/ArticlesList'

export default function News () {
  const { t } = useTranslation('news')

  return (
    <>
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
