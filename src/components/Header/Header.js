import ActionLinks from './ActionLinks'
import LogoBar from './LogoBar'
import Nav from './Nav'

import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div>
      <ActionLinks />
      <LogoBar />
      <Nav />
    </div>
  </header>
)

export default Header
