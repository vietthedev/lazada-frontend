import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchProducts } from './productSlice'

import Spinner from '../../components/Spinner'
import ProductListItem from './productListItem'

import styles from './productList.module.css'

const ProductList = () => {
  const { categoryId } = useParams()
  const dispatch = useDispatch()
  const { products, isLoading, error } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts(categoryId))
  }, [categoryId, dispatch])

  return (
    <div className={styles.container}>
      {isLoading && <Spinner />}
      {error && <h3>Something went wrong...</h3>}
      <div className={styles.products}>
        {!isLoading && !products.length && (
          <div className={styles.info}>
            <span>There is currently no product in this category.</span>
          </div>
        )}
        {!isLoading && !error && products.map(product => (
          <ProductListItem key={`product_list_item_${product.itemId}`} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
