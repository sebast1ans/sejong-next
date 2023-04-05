import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebase'

export const getCoachesData = async () => {
  const coachesData: DocumentData = []

  try {
    const querySnapshot = await getDocs(query(collection(db, 'coaches'), where('role', '==', 'main')))
    querySnapshot.forEach(doc => {
      coachesData.push({ id: doc.id, ...doc.data() })
    })
  } catch (err) {
    console.error(err)
  }

  return coachesData
}