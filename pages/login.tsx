import { Google } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactElement, useContext, useEffect } from 'react'
import { UserContext } from '../lib/context'
import { auth, googleAuthProvider } from '../lib/firebase'
import { signInWithPopup } from '@firebase/auth'


export const LoginWindow = ({loading}: {loading: boolean}): ReactElement => {

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button startIcon={<Google />} onClick={signInWithGoogle}>
      {`${loading ? 'Loading...' : 'Přihlásit se přes Google'}`}
    </Button>
  )
}

export default function Login () {
  const router = useRouter()
  const [user, loading, error] = useContext(UserContext)

  useEffect(() => {
    if (user) {
      void router.push('/portal')
    }
  }, [user]);

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <h1>Vítejte na portálu Sejong Dojang</h1>
        <LoginWindow loading={loading} />
      </Box>
    </>
  )
}

Login.displayName = 'Login'
