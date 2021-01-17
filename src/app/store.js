import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/categoryMenu/categorySlice'
import productReducer from '../features/productList/productSlice'

export default configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer
  }
})
