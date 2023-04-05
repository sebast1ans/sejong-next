import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebase'

export const getCoachesData = async () => {
  const coachesData: DocumentData = []

  try {
    const q = query(
      collection(db, 'coaches'),
      where('role', '==', 'main'),
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      coachesData.push({ id: doc.id, ...doc.data() })
    })
  } catch (err) {
    console.error(err)
  }

  return coachesData
}