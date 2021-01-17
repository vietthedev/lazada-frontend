import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCategories } from './categorySlice'

import styles from './categoryMenu.module.css'

const DropdownMenu = ({ items, root }) => {
  const renderMenuItem = menuItem => menuItem.subCategories.length
    ? (
      <li key={`menuItem_${menuItem.id}`}>
        <Link to={`/category/${menuItem.id}-${menuItem.slug}`}>
          <span>{menuItem.name}</span>
        </Link>
        <DropdownMenu items={menuItem.subCategories} />
      </li>
      )
    : (
      <li key={`menuItem_${menuItem.id}`}>
        <Link to={`/category/${menuItem.id}-${menuItem.slug}`}>
          <span>{menuItem.name}</span>
        </Link>
      </li>
      )

  return root
    ? (
      <ul className={`${styles.dropdown} ${styles.dropdownMenu}`}>
        {items.map(item => renderMenuItem(item))}
      </ul>
      )
    : (
      <ul className={styles.dropdown}>
        {items.map(item => renderMenuItem(item))}
      </ul>
      )
}

const CategoryMenu = () => {
  const dispatch = useDispatch()
  const { categoryTree } = useSelector(state => state.category)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.label}>
          <span>Categories</span> <i className={styles.arrow} />
        </button>
        <div className={styles.menu}>
          <div className={styles.dropdown}>
            <DropdownMenu items={categoryTree} root />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryMenu
