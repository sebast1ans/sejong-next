import styles from './Coaches.module.scss'
import { DocumentData } from 'firebase/firestore'

interface Props {
  data: DocumentData[]
}
export default function Coaches({data}: Props) {
  console.log(data)
  return (
    <>
      <h1>Coaches</h1>
    </>
  )
}