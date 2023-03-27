import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Admin () {
  return (
    <>
      <h1>Admin</h1>
    </>
  )
}

// export async function getStaticProps (context: { locale: string }) {
//   const { locale } = context
//
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'common',
//         'home-page-navigation',
//       ]))
//     }
//   }
// }
