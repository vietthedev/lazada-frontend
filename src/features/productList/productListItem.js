import { Link } from 'react-router-dom'

import styles from './productListItem.module.css'

const ProductListItem = ({
  itemId,
  itemTitle,
  itemImg,
  itemPrice,
  itemDiscountPrice,
  itemDiscount,
  itemRatingScore,
  itemReviews,
  currency,
  slug
}) => (
  <div className={styles.itemWrapper}>
    <Link to={`/products/${itemId}-${slug}`} title={itemTitle}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img alt={itemTitle} src={itemImg} />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <span>{itemTitle}</span>
          </div>
          <div className={styles.price}>
            <div>
              <span>{currency + ' '}</span>
              <span>{itemDiscountPrice}</span>
            </div>
            <div>
              {itemDiscount && (
                <>
                  <span style={{ textDecoration: 'line-through' }}>{currency}</span>
                  <span style={{ textDecoration: 'line-through' }}>{itemPrice}</span>
                  <span>{itemDiscount}</span>
                </>
              )}
            </div>
          </div>
          {itemReviews > 0 && (
            <div className={styles.footer}>
              <div className={styles.ratings}>
                <span>{itemRatingScore}/5</span>
              </div>
              <div className={styles.ratingsComment}>
                ({itemReviews})
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  </div>
)

export default ProductListItem
