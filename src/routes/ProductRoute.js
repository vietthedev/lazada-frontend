import { Route } from 'react-router-dom'

import ProductDetails from '../features/productDetails/productDetails'

const ProductRoute = () => (
  <Route path='/products/:productId-:slug' component={ProductDetails} />
)

export default ProductRoute
