import { LoadingButton } from '@mui/lab'
import { Done, Login } from '@mui/icons-material'
import { Box, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactElement, useContext, useEffect } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'

type LoginFormInputs = {
  email: string
  password: string
}

export const LoginWindow = (): ReactElement => {
  const {
    register,
    handleSubmit,
  } = useForm<LoginFormInputs>({mode: 'onChange'})

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data)=> {
    try {
      await signInWithEmailAndPassword(data.email, data.password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='1rem'
    >
      <TextField size='small' type='email' {...register('email')} label='E-mail'/>
      <TextField size='small' type='password' {...register('password')} label='Heslo'/>
      <LoadingButton
        type='submit'
        variant='outlined'
        loading={loading}
        loadingPosition="start"
        startIcon={!user ? <Login/> : <Done/>}
      >
        Přihlásit se
      </LoadingButton>
      {error && <p>{error.message}</p>}
    </Box>
  )
}

export default function LoginPage () {
  const { push } = useRouter()
  const [user] = useContext(UserContext)

  useEffect(() => {
    if (user) {
      void push('/portal')
    }
  }, [user, push]);

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <h1>Vítejte na portálu Sejong Dojang</h1>
        <LoginWindow/>
      </Box>
    </>
  )
}

LoginPage.displayName = 'Login'
