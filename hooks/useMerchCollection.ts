import { collection } from 'firebase/firestore'
import { CollectionHook, useCollection } from "react-firebase-hooks/firestore"
import { db } from '../lib/firebase'

export const useMerchCollection = (): CollectionHook => {
  return useCollection(collection(db, 'merch'))
}
