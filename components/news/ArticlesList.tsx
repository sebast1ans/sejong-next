import { DocumentData } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  articles: DocumentData[]
}

export const ArticlesList = ({articles}: Props) => {
  const {pathname} = useRouter()
  return (
    <>
      {articles.map(article => (
        <>
          <Link href={`${pathname}/${article.slug}`}><h1>{article.title}</h1></Link>
          <p>{article.content}</p>
        </>
      ))}

    </>
  )
}
