import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'

export const SignOutButton = () => {
  const handleSignOut = async () => {

    try {
      await auth.signOut()
    } catch (error) {
      console.log(error)
    }
  }
  return <Button variant='contained' onClick={handleSignOut}>Sign Out</Button>
}

export default function Portal () {
  const router = useRouter()
  const user = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      void router.push('/login')
    }
  }, [user]);

    return (
      <>
        <h1>{`Hi ${user ? user.displayName : ''}`}</h1>
      </>
    )
}

Portal.displayName = 'Portal'

