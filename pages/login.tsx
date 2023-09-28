import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactElement, useContext, useEffect } from 'react'
import { UserContext } from '../lib/context'
import { auth, googleAuthProvider } from '../lib/firebase'
import { signInWithPopup } from '@firebase/auth'


export const SignInButton = (): ReactElement => {
  const signInWithGoogle = async () => {

    try {
      await signInWithPopup(auth, googleAuthProvider)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button variant='contained' onClick={signInWithGoogle}>
      Sign In
    </Button>
  )
}

export default function Login () {
  const router = useRouter()
  const user = useContext(UserContext)

  useEffect(() => {
    if (user) {
      void router.push('/portal')
    }
  }, [user]);

  return (
    <h1>Login Page</h1>
  )
}

Login.displayName = 'Login'
