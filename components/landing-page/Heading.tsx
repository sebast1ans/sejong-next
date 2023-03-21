import styles from './Heading.module.scss'

interface Props {
  text: string
}
export const Heading = ({ text }: Props) => (
  <>
    <h1 className={styles.heading}>{text}</h1>
    <div className={styles.accentLine}></div>
  </>
)
