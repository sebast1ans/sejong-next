import { Box, Container, Skeleton } from '@mui/material'
import Link from 'next/link'
import { ReactNode, useContext } from 'react'
import { UserContext } from '../../lib/context'

export default function AuthCheck ({ children }: { children: ReactNode }) {
  const [user, loading] = useContext(UserContext)

  const ComponentSkeleton = () => {
    return (
      <Container sx={{ display: 'flex', flexDirection: 'column', mt: '3rem', height: '100%' }}>
        <Box sx={{ display: 'flex', gap: '1rem', mb: '1rem' }}>
          <Skeleton variant='rounded' height='3rem' width='7rem'/>
          <Skeleton variant='rounded' height='3rem' width='7rem'/>
        </Box>
        <Skeleton variant='rounded' height='40vh'/>
      </Container>
    )
  }

  if (loading) {
    return <ComponentSkeleton/>
  }

  return (
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
  )
}
