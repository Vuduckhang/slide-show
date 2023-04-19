import { createAsyncThunk } from '@reduxjs/toolkit'

import { notification } from 'antd'
import { ApiClient } from '../../../services/api-client'
import { clearAuthStoreAction, setAuthStoreAction } from './index'

const postSignInUser = createAsyncThunk(
  'auth/postSignInUser',
  async (payload, { dispatch }) => {
    try {
      const response = await ApiClient.post(`auth/login`, {
        username: payload.username,
      })
      const { accessToken, refreshToken } = response.data

      dispatch(
        setAuthStoreAction({
          accessToken,
          refreshToken,
          user: { name: payload.username },
        })
      )
      notification.success({
        message: 'Sign In account successfully',
      })
      return true
    } catch (error) {
      console.log('error.......', error)
      notification.error({
        message: 'Sign In account failed',
      })
    }
  }
)

const postLogoutUser = createAsyncThunk(
  'auth/postLogoutUser',
  async (payload, { dispatch }) => {
    try {
      const response = await ApiClient.delete(`auth/logout`)
      dispatch(clearAuthStoreAction())

      notification.success({
        message: 'Logout account successfully',
      })
      return false
    } catch (error) {
      console.log('error.......', error)
      notification.error({
        message: 'Logout account failed',
      })
      return true
    }
  }
)

export { postSignInUser, postLogoutUser }
