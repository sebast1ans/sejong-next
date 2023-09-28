import { Button } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextRouter } from 'next/router'
import { auth } from '../lib/firebase'

interface SignOutButtonProps {
  router: NextRouter
}

export const SignOutButton = ({ router }: SignOutButtonProps) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut()
      auth.onAuthStateChanged(() => {
        router.push('/login')
      })
    } catch (error) {
      console.log(error)
    }
  }
  return <Button variant='contained' onClick={handleSignOut}>Sign Out</Button>
}


export default function Portal() {
  return (
    <>
      <h1>Admin</h1>
    </>
  )
}

Portal.displayName = 'Portal'

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
