import { Button } from '@mui/material'
import { NextRouter } from 'next/router'
import { ReactElement } from 'react'
import { auth, googleAuthProvider } from '../lib/firebase'
import { signInWithPopup } from '@firebase/auth'


interface SignInButtonProps {
  router: NextRouter
}

export const SignInButton = ({ router }: SignInButtonProps): ReactElement => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider)
      auth.onAuthStateChanged(user => {
        user ? router.push('/portal') : router.reload
      })
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
  return (
    <h1>Login Page</h1>
  )
}

Login.displayName = 'Login'
