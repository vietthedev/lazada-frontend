import styles from './ActionLinksItem.module.css'

const ActionLinksItem = ({ text, highlight }) => (
  <div className={`${styles.item} ${highlight ? styles.itemHighlight : ''}`}>
    <span>{text}</span>
  </div>
)

export default ActionLinksItem
