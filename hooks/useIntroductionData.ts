import { collection, DocumentData, getDocs } from 'firebase/firestore'
import { db } from '../lib/firebase'

export const useIntroductionData = async () => {
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
