import styles from './Heading.module.scss'
// import { Typography } from '@mui/material'

interface Props {
  text: string
}
// TODO Maybe move this to a 'features' folder
export const Heading = ({ text }: Props) => (
  <>
    <h1 className={styles.heading}>{text}</h1>
    <div className={styles.accentLine}></div>
  </>
)
