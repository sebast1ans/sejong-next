import { storage } from './firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'

export const getHeroImageURLs = async () => {
  const heroImagesFolderHref = ref(storage, 'images/hero')
  let heroImageURLs = []

  try {
    const heroImageRefs = (await listAll(heroImagesFolderHref)).items

    const heroImageUrlPromises = heroImageRefs.map(async ref => {
      return await getDownloadURL(ref)
    })

    for await (let url of heroImageUrlPromises) {
      heroImageURLs.push(url)
    }
  } catch (err) {
    console.error(err)
  }

  return heroImageURLs
}
