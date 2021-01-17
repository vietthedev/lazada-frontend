import styles from './SearchBox.module.css'

const SearchBox = () => (
  <div className={styles.container}>
    <input placeholder='Search in Lazada' />
    <button>&nbsp;</button>
  </div>
)

export default SearchBox
