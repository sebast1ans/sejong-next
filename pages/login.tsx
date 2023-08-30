import { auth, googleAuthProvider } from '../lib/firebase'
import { signInWithPopup } from '@firebase/auth'


const SignInButton = (): JSX.Element => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
  }

  return (
    <button onClick={signInWithGoogle}>
      Sign In
    </button>
  )
}

export default function Login () {
  return (
    <>
      <SignInButton/>
    </>
  )
}
