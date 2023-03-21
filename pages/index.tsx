import { storage } from '../lib/firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import Head from 'next/head'
import Hero from '../components/landing-page/Hero'

interface Props {
  heroImageUrls: string[]
}
export default function Home ({ heroImageUrls }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Hero heroImages={heroImageUrls}/>
    </>
  )
}

export async function getServerSideProps () {
  const heroImagesFolderHref = ref(storage, 'images/hero')
  let heroImageUrls = []

  try {
    const heroImageRefs = (await listAll(heroImagesFolderHref)).items

    const heroImageUrlPromises = heroImageRefs.map(async ref => {
        return await getDownloadURL(ref)
    })

    for await (let heroImageUrl of heroImageUrlPromises) {
      heroImageUrls.push(heroImageUrl)
    }

  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      heroImageUrls
    }
  }
}
