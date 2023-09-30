import { Logout } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'

export const SignOutButton = () => {
  const [signOut, loading, error] = useSignOut(auth)

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoadingButton
      variant='contained'
      loading={loading}
      loadingPosition="start"
      startIcon={<Logout />}
      onClick={handleSignOut}
    >
      Odhlásit&nbsp;se
    </LoadingButton>
  )
}

export default function Portal () {
  const { push } = useRouter()
  const [user] = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      void push('/login')
    }
  }, [user, push]);

    return user ? (
      <>
        <Container><h1>{`Hi ${user ? user.email : ''}`}</h1></Container>
      </>
    ) : null
}

Portal.displayName = 'Portal'

