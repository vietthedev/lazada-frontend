import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <h3 className={styles.title}>CONTACT US</h3>
        <ul className={styles.list}>
          <li><a href='https://www.lazada.vn'>Hotline &amp; Online chat (24/7)</a></li>
          <li><a href='https://www.lazada.vn'>Help Center</a></li>
          <li><a href='https://www.lazada.vn'>How to Buy</a></li>
          <li><a href='https://www.lazada.vn'>Shipping &amp; Delivery</a></li>
          <li><a href='https://www.lazada.vn'>International Product Policy</a></li>
          <li><a href='https://www.lazada.vn'>How to Return</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>LAZADA VIETNAM</h3>
        <ul className={styles.list}>
          <li><a href='https://www.lazada.vn'>About Lazada</a></li>
          <li><a href='https://www.lazada.vn'>Sell on Lazada</a></li>
          <li><a href='https://www.lazada.vn'>Affiliate Program</a></li>
          <li><a href='https://www.lazada.vn'>Careers</a></li>
          <li><a href='https://www.lazada.vn'>Terms &amp; Conditions</a></li>
          <li><a href='https://www.lazada.vn'>Privacy Policy</a></li>
          <li><a href='https://www.lazada.vn'>Press &amp; Media</a></li>
          <li><a href='https://www.lazada.vn'>Intellectual Property Protection</a></li>
          <li><a href='https://www.lazada.vn'>Operating Regulation</a></li>
          <li><a href='https://www.lazada.vn'>Procedure of claim and dispute handling</a></li>
        </ul>
      </div>
      <div className={styles.download}>
        <div className={styles.icon} />
        <div className={styles.downloadText}>
          <div className='title'>Go where your heart beats</div>
          <div className='text'>Download the App</div>
        </div>
        <a className={styles.appStore} href='https://www.lazada.vn'>&nbsp;</a>
        <a className={styles.playStore} href='https://www.lazada.vn'>&nbsp;</a>
      </div>
    </div>
  </footer>
)

export default Footer
