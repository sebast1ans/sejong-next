import Link from 'next/link'
import { ReactNode, useContext } from 'react'
import { UserContext } from '../../lib/context'

export default function AuthCheck ({ children }: { children: ReactNode }) {
  const [user, loading] = useContext(UserContext)

  return (
    !loading
      ? user
        ? <>{children}</>
        : <><Link href='/login'>You must be logged in</Link></>
      : <p>Loading...</p>)
}
