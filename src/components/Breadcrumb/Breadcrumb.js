import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import styles from './Breadcrumb.module.css'

const renderBreadcrumb = (categoryId, categories) => {
  const category = categories.find(c => c.id === parseInt(categoryId, 10))
  const categoryNames = category.path.split(',')
  const breadcrumbCategories = categories.filter(c => categoryNames.indexOf(c.name) > -1)

  breadcrumbCategories.sort((a, b) => a.path.length - b.path.length)

  return breadcrumbCategories.map((c, index) => (
    <li key={`breadcrumb_item_${c.id}`}>
      <span>
        <Link to={`/category/${c.id}-${c.slug}`}>
          <span>{c.name}</span>
        </Link>
      </span>
      {index < breadcrumbCategories.length - 1 && <div className={styles.arrow} />}
    </li>
  ))
}

const Breadcrumb = () => {
  const [breadcrumb, setBreadcrumb] = useState()
  const { categoryId, productId } = useParams()
  const { categories } = useSelector(state => state.category)
  const { products, currentProduct } = useSelector(state => state.product)

  useEffect(() => {
    if (!productId || (!products.length && !currentProduct)) return

    const product = products.find(p => p.itemId === productId) || currentProduct

    setBreadcrumb(renderBreadcrumb(product.categoryId, categories))
  }, [productId, categoryId, categories, products, currentProduct])

  useEffect(() => {
    if (!categoryId || !categories.length) return

    setBreadcrumb(renderBreadcrumb(categoryId, categories))
  }, [categoryId, categories])

  return (
    <div className={styles.container}>
      <ul className={styles.breadcrumb}>
        {breadcrumb}
      </ul>
    </div>
  )
}

export default Breadcrumb
