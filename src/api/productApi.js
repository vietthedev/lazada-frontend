import fetch from 'isomorphic-unfetch'

import { API_HOST } from '../common/constants'

export const getProducts = async () => {
  const response = await fetch(`${API_HOST}/products`)

  return await response.json()
}

export const getProduct = async id => {
  const response = await fetch(`${API_HOST}/products/${id}`)

  return await response.json()
}

export const getProductsByCategory = async categoryId => {
  const response = await fetch(`${API_HOST}/categories/${categoryId}/products`)

  return await response.json()
}
