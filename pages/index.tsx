import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { DocumentData } from 'firebase/firestore'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getArticlesData } from '../lib/getArticlesData'
import { getIntroductionData } from '../lib/getIntroductionData'
import { getReferencesData } from '../lib/getReferencesData'
import { getCoachesData } from '../lib/getCoachesData'
import { getHeroImageURLs } from '../lib/getHeroImageURLs'
import Hero from '../components/landing-page/Hero'
import Introduction from '../components/landing-page/Introduction'
import Timeline from '../components/landing-page/Timeline'
import References from '../components/landing-page/References'
import Coaches from '../components/landing-page/Coaches'
import AboutTaekwondo from '../components/landing-page/AboutTaekwondo'
import TrainingSessions from '../components/landing-page/TrainingSessions'
import PriceList from '../components/landing-page/PriceList'
import Contact from '../components/landing-page/Contact'
import { shuffle } from 'lodash'

export default function Home ({
  heroImageURLs,
  introductionData,
  referencesData,
  coachesData,
  gMapsApiKey
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Sejong Taekwondo</title>
        <meta name="description" content="Sejong Taekwondo – sportovní klub Taekwondo WT v Praze"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Hero heroImages={heroImageURLs}/>
      <Introduction slidesData={introductionData}/>
      <References data={referencesData} />
      <Coaches data={coachesData}/>
      <Timeline />
      <AboutTaekwondo />
      <TrainingSessions gMapsApiKey={gMapsApiKey!} />
      <PriceList />
      <Contact />
    </>
  )
}

export async function getStaticProps (context: { locale: string }) {
  const { locale } = context
  const heroImageURLs = await getHeroImageURLs()
  const newsArticlesData = await getArticlesData()
  const introductionData = await getIntroductionData()
  const referencesData = await getReferencesData()
  const coachesData = await getCoachesData()

  return {
    props: {
      heroImageURLs,
      newsArticlesData: newsArticlesData as DocumentData[],
      introductionData: introductionData as DocumentData[],
      referencesData: shuffle(referencesData) as DocumentData[],
      coachesData: coachesData as DocumentData[],
      ...(await serverSideTranslations(locale, [
        'common',
        'home-page-navigation',
        'introduction',
        'timeline',
        'coaches',
        'about-taekwondo',
        'training-sessions',
        'price-list',
        'contact'
      ])),
      gMapsApiKey: process.env.GMAPS_API_KEY
    }
  }
}
