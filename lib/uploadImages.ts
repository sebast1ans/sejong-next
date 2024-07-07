import { storage } from './firebase'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { v4 as uuid} from 'uuid'

export const uploadImages = (file: File, articleSlug: string) => {
    const imageRef = ref(storage, `images/articles/${articleSlug}/${uuid()}.${file.type.split('/')[1]}`)

    return uploadBytesResumable(imageRef, file)
}
