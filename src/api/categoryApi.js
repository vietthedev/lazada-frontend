import fetch from 'isomorphic-unfetch'

import { API_HOST } from '../common/constants'

export const getCategories = async (ids) => {
  const url = ids ? `${API_HOST}/categories/${ids.join(',')}` : `${API_HOST}/categories`
  const response = await fetch(url)

  return await response.json()
}
