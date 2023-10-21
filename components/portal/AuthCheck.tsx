import Link from 'next/link'
import { ReactNode, useContext } from 'react'
import { UserContext } from '../../lib/context'

export default function AuthCheck ({ children }: {children: ReactNode}) {
  const [ user] = useContext(UserContext)

  return user ? <>{children}</> : <><Link href='/login'>You must be logged in</Link></>
}
