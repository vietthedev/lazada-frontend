import styles from './Content.module.css'

const Content = ({ children }) => (
  <main className={styles.container}>
    {children}
  </main>
)

export default Content
