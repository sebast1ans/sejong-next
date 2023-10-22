import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import ArticleForm from '../../../components/portal/NewsPanel/ArticleForm'
import { getArticleData } from '../../../lib/getArticleData'

export default function EditArticle ({ articleData }: InferGetStaticPropsType<typeof getServerSideProps>) {

  return (
    <ArticleForm articleData={articleData} editMode />
  )
}

export const getServerSideProps = (async ({ params }) => {
  const articleData = await getArticleData(params!.id as string)

  return {
    props: {
      articleData: articleData || null,
    }
  }
}) satisfies GetServerSideProps
