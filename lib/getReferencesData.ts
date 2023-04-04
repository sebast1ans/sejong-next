import { db } from './firebase'
import { collection, DocumentData, getDocs } from 'firebase/firestore'
export const getReferencesData = async () => {
  const referencesData: DocumentData = []

  try {
    const querySnapshot = await getDocs(collection(db, 'references'))
    querySnapshot.forEach(doc => {
      referencesData.push({ id: doc.id, ...doc.data() })
    })
  } catch (err) {
    console.error(err)
  }

  return referencesData
}