import { collection, DocumentData, getDocs } from 'firebase/firestore'
import { db } from './firebase'

export const getIntroductionData = async () => {
  let introductionData: DocumentData = []

  try {
    const querySnapshot = await getDocs(collection(db, 'who-are-we'))
    querySnapshot.forEach(doc => {
      introductionData.push({ id: doc.id, ...doc.data() })
    })
  } catch (err) {
    console.error(err)
  }

  return introductionData
}
