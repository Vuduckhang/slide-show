import { createSlice } from '@reduxjs/toolkit'
import { postLogoutUser, postSignInUser } from './async-actions'

const initialState = {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStoreAction: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    clearAuthStoreAction: () => initialState,
  },
  extraReducers: (builder) => {},
})

const authReducer = authSlice.reducer
const { setAuthStoreAction, clearAuthStoreAction } = authSlice.actions

export {
  authReducer,
  setAuthStoreAction,
  clearAuthStoreAction,
  postSignInUser,
  postLogoutUser,
}
