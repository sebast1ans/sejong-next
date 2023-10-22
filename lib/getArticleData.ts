import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getArticleData = async (id: string) => {
  try {
    const docSnap = await getDoc(doc(db, "news", id));

    if (docSnap.exists()) {
      return {id: docSnap.id, ...docSnap.data()}
    } else {
     return null
    }
  } catch (err) {
    console.log(err)
  }
}

