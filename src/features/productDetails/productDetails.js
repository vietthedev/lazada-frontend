import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchProduct } from '../productList/productSlice'

import styles from './productDetails.module.css'

const ProductDetails = () => {
  const { productId } = useParams()
  const { currentProduct } = useSelector(state => state.product)
  const [product, setProduct] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (product && currentProduct && product.itemId === currentProduct.itemId) {
      return
    }

    const getProduct = async () => {
      await dispatch(fetchProduct(productId))
      setProduct(currentProduct)
    }

    getProduct()
  }, [product, productId, currentProduct, dispatch])

  if (!product) return null

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.image}>
          <img alt={product.itemTitle} src={product.itemImg} />
        </div>
        <div className={styles.description}>
          <div>
            <h3 className={styles.title}>
              {product.itemTitle}
            </h3>
          </div>
          <div className={styles.review}>
            <div className={styles.score}>
              {product.itemRatingScore}/5
            </div>
            <a href='https://www.lazada.vn'>
              {product.itemReviews} Ratings
            </a>
          </div>
          <div className={styles.price}>
            <span className={styles.discountPrice}>{product.currency}{product.itemDiscountPrice}</span>
            <div>
              <span className={styles.originalPrice}>{product.itemPrice}</span>
              <span className={styles.discount}>{product.itemDiscount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
