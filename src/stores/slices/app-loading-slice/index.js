import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAppLoading: false,
}

export const appLoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setAppLoading: (state, action) => {
      state.isAppLoading = action.payload
    },
  },
})

const appLoadingReducer = appLoadingSlice.reducer
const { setAppLoading } = appLoadingSlice.actions

export { appLoadingReducer, setAppLoading }
