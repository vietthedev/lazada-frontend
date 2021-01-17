import { Route } from 'react-router-dom'

import ProductList from '../features/productList/productList'

const CategoryRoute = () => (
  <Route path='/category/:categoryId-:slug' component={ProductList} />
)

export default CategoryRoute
