import { Route } from 'react-router-dom'

import ProductList from '../features/productList/productList'

const HomeRoute = () => (
  <Route exact path='/' component={ProductList} />
)

export default HomeRoute
