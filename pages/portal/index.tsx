import { Container } from '@mui/material'
import Head from 'next/head'
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
        <Head>
          <title>Portal | Sejong Taekwondo</title>
          <meta name="description" content="Sejong Taekwondo – sportovní klub Taekwondo WT v Praze"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.png"/>
        </Head>
        <Container><h1>{`Hi ${user ? user.email : ''}`}</h1></Container>
      </>
    ) : null
}
