import { createSlice } from '@reduxjs/toolkit'

import { getCategories } from '../../api/categoryApi'
import { countOccurrence } from '../../common/utils'

const getCategoryDepth = category => countOccurrence(category.path, ',')

const generateCategoryTree = categories => {
  const newCategories = [...categories]

  newCategories.forEach(category => {
    const depth = getCategoryDepth(category)

    category.subCategories = newCategories.filter(
      subCategory =>
        subCategory.path.startsWith(category.path) &&
        getCategoryDepth(subCategory) === depth + 1
    )
  })

  return newCategories.filter(category => getCategoryDepth(category) === 1)
}

const initialState = {
  categories: [],
  categoryTree: [],
  error: null
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategoriesSuccess (state, { payload }) {
      state.categories = payload
      state.categoryTree = generateCategoryTree(payload)
      state.error = null
    },
    getCategoriesFailure (state, { payload }) {
      state.error = payload
    }
  }
})

const { getCategoriesSuccess, getCategoriesFailure } = categorySlice.actions

export default categorySlice.reducer

export const fetchCategories = ids => async dispatch => {
  try {
    const categories = await getCategories(ids)

    dispatch(getCategoriesSuccess(categories))
  } catch (ex) {
    dispatch(getCategoriesFailure(ex))
  }
}
