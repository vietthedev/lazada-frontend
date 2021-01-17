import { Link } from 'react-router-dom'

import styles from './Logo.module.css'

const Logo = () => (
  <div>
    <Link to='/'>
      <img
        className={styles.logo}
        alt='logo'
        src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png'
      />
    </Link>
  </div>
)

export default Logo
