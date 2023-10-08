import { Typography } from '@mui/material'
import styles from './Heading.module.scss'

interface Props {
  text: string
}
// TODO Maybe move this to a 'features' folder
export const Heading = ({ text }: Props) => (
  <>
    <Typography variant='h1' fontWeight='800' className={styles.heading} >{text}</Typography>
    <div className={styles.accentLine}></div>
  </>
)
