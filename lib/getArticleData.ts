import { doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'

export const getArticleData = async (slug: string) => {

  try {
    const docRef = doc(db, 'news', slug)
    return await getDoc(docRef)

  } catch (err) {
    console.error(err)
  }

}
