import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../lib/context'


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

