import { collection, DocumentData, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from './firebase'

export const getIntroductionData = async () => {
  let introductionData: DocumentData = []

  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, 'who-are-we'),
        orderBy("order", "asc")
      )
    )

    querySnapshot.forEach(doc => {
      introductionData.push({ id: doc.id, ...doc.data() })
    })
  } catch (err) {
    console.error(err)
  }

  return introductionData
}
