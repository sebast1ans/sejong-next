import { createContext } from 'react'

interface User {
  user: {} | null
}

export const UserContext = createContext<User>({user: null})
