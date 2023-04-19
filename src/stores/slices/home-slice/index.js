import { createSlice } from '@reduxjs/toolkit'
import { getGalleries } from './async-actions'

const initialState = {
  products: [],
}

export const homeSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGalleries.fulfilled, (state, action) => {
      state.galleries = action.payload
    })
  },
})

const homeReducer = homeSlice.reducer

export { homeReducer, getGalleries }
