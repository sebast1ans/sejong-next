import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebase'

export const getArticleData = async (slug: string | string [] | undefined) => {

  try {
    let article!: DocumentData | null

    const newsRef = collection(db, 'news')
    const q = query(newsRef, where("slug", "==", slug))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach(doc => {
      article = doc ? doc.data() : null
    })

    return article

  } catch (err) {
    console.log(err)
    return null
  }

}
