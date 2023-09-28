import { createContext } from 'react'
import { AuthStateHook } from 'react-firebase-hooks/auth'

export const UserContext = createContext<AuthStateHook>([null, false, undefined])
