import { Logout } from '@mui/icons-material'
import { Button, Container } from '@mui/material'
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
  return <Button variant='contained' startIcon={<Logout />} onClick={handleSignOut}>Odhlásit&nbsp;se</Button>
}

export default function Portal () {
  const router = useRouter()
  const [user, loading, error] = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      void router.push('/login')
    }
  }, [user]);

    return user ? (
      <>
        <Container><h1>{`Hi ${user ? user.displayName : ''}`}</h1></Container>
      </>
    ) : null
}

Portal.displayName = 'Portal'

