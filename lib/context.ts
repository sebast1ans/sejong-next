import { createContext } from 'react'
import { AuthStateHook } from 'react-firebase-hooks/auth'
import { CollectionHook } from 'react-firebase-hooks/firestore'

export const UserContext = createContext<AuthStateHook>([null, false, undefined])
export const NewsContext = createContext<CollectionHook>([undefined, false, undefined])
