import AuthCheck from '../../../components/portal/AuthCheck'
import ArticleForm from '../../../components/portal/NewsPanel/ArticleForm'

export default function CreateArticle () {
  return (
    <AuthCheck>
      <ArticleForm />
    </AuthCheck>
  )
}
