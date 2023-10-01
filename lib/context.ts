import { createContext } from 'react'
import { AuthStateHook } from 'react-firebase-hooks/auth'
import { DocumentData } from 'firebase/firestore'

export const UserContext = createContext<AuthStateHook>([null, false, undefined])
export const NewsContext = createContext<DocumentData[]>([])
