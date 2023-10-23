import { Box } from '@mui/material'
import Link from 'next/link'
import { ReactNode, useContext } from 'react'
import { UserContext } from '../../lib/context'

export default function AuthCheck ({ children }: { children: ReactNode }) {
  const [user, loading] = useContext(UserContext)

  return (
    !loading ?
      user ? (
        <>{children}</>
      ) : (
        <>
          <Box textAlign='center'>
            <h1>Unauthorized access</h1>
            <p>This part of the website is only available to logged in users.</p>
            <Link href='/login'>
              Log in here
            </Link>
          </Box>
        </>
      )
      : <p>Loading...</p>)
}
