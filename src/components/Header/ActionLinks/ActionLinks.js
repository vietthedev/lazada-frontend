import ActionLinksItem from './ActionLinksItem'

import styles from './ActionLinks.module.css'

const items = [
  {
    text: 'Save more on app',
    highlight: true
  },
  {
    text: 'Sell on Lazada',
    highlight: true
  },
  {
    text: 'Customer care'
  },
  {
    text: 'Track my order'
  },
  {
    text: 'Login'
  },
  {
    text: 'Sign up'
  },
  {
    text: 'Change language'
  }
]

const ActionLinks = () => (
  <div className={styles.actionLinks}>
    {items.map(item => (
      <ActionLinksItem key={`action_links_item_${item.text}`} {...item} />
    ))}
  </div>
)

export default ActionLinks
