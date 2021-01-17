import Logo from './Logo'
import SearchBox from './SearchBox'
import Cart from './Cart'

import styles from './LogoBar.module.css'

const LogoBar = () => (
  <div className={styles.logoBar}>
    <Logo />
    <SearchBox />
    <Cart />
  </div>
)

export default LogoBar
