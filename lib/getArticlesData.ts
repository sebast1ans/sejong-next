import { collection, DocumentData, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from './firebase'

export const getArticlesData = async () => {
  let newsArticlesData: DocumentData[] = []

  try {
    const q = query(
      collection(db, 'news' ),
      orderBy('timestamp', 'desc')
    )

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      newsArticlesData.push({ id: doc.id, ...doc.data() })
    })
  } catch (err) {
    console.error(err)
  }

  return newsArticlesData
}
