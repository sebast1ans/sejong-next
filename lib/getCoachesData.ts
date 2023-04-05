import { collection, DocumentData, getDocs } from 'firebase/firestore'
import { db } from './firebase'

export const getCoachesData = async () => {
  const coachesData: DocumentData = []

  try {
    const querySnapshot = await getDocs(collection(db, 'coaches'))
    querySnapshot.forEach(doc => {
      coachesData.push({ id: doc.id, ...doc.data() })
    })
  } catch (err) {
    console.error(err)
  }

  return coachesData
}