import convertHtmlToReact from '@hedgedoc/html-to-react'
import { DocumentData } from 'firebase/firestore'

interface Props {
  article: DocumentData
}

export const Article = ({ article }: Props) => {
  return (
    <>
      <h1>{article.title}</h1>
      <div>{convertHtmlToReact(article.content)}</div>
    </>
  )
}
