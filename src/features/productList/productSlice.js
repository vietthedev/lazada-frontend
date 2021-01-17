import { createSlice } from '@reduxjs/toolkit'

import { getProducts, getProductsByCategory, getProduct } from '../../api/productApi'

const initialState = {
  products: [],
  currentProduct: null,
  isLoading: false,
  error: null
}

const startLoading = state => {
  state.isLoading = true
}

const loadingFailed = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductStart: startLoading,
    getProductsStart: startLoading,
    getProductSuccess (state, { payload }) {
      state.currentProduct = payload
      state.isLoading = false
      state.error = null
    },
    getProductsSuccess (state, { payload }) {
      state.products = payload
      state.isLoading = false
      state.error = null
    },
    getProductFailure: loadingFailed,
    getProductsFailure: loadingFailed
  }
})

export const {
  getProductStart,
  getProductsStart,
  getProductSuccess,
  getProductsSuccess,
  getProductFailure,
  getProductsFailure
} = productSlice.actions

export default productSlice.reducer

export const fetchProduct = id => async dispatch => {
  try {
    dispatch(getProductStart())
    const product = await getProduct(id)
    dispatch(getProductSuccess(product))
  } catch (ex) {
    dispatch(getProductFailure(ex))
  }
}

export const fetchProducts = categoryId => async dispatch => {
  try {
    dispatch(getProductsStart())

    const products = categoryId
      ? await getProductsByCategory(categoryId)
      : await getProducts()

    dispatch(getProductsSuccess(products))
  } catch (ex) {
    dispatch(getProductsFailure(ex))
  }
}
