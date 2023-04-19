import axios from 'axios'
import { HttpStatusCodes } from '../constants/common-constants'
import { store } from '../stores'
import {
  clearAuthStoreAction,
  setAuthStoreAction,
} from '../stores/slices/auth-slice'

const API_BASE_URL = 'https://test-react.agiletech.vn/'
const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || API_BASE_URL,
})

const requestHandler = (config) => {
  const accessToken = store.getState().authStore.accessToken
  config.headers = {
    Authorization: `Bearer ${accessToken}`,
    ...config.headers,
  }
  config.params = {
    ...config.params,
  }
  return config
}

const responseErrorHandler = async (err) => {
  const originalRequest = err.config
  if (
    err?.response?.status === HttpStatusCodes.UNAUTHORIZED &&
    !originalRequest._retry
  ) {
    try {
      originalRequest._retry = true
      const refreshToken = store.getState().authStore.refreshToken
      console.log('refreshToken.........', refreshToken)
      const { data } = await axios({
        baseURL: process.env.API_BASE_URL || API_BASE_URL,
        url: '/auth/refresh-token',
        data: { refreshToken },
      })

      store.dispatch(setAuthStoreAction(data))
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.accessToken}`
      return axiosInstance(originalRequest)
    } catch (e) {
      store.dispatch(clearAuthStoreAction())
      return Promise.reject(e?.response?.data ? e?.response?.data : e)
    }
  }

  return Promise.reject(err)
}

axiosInstance.interceptors.request.use(requestHandler, (err) =>
  Promise.reject(err)
)
axiosInstance.interceptors.response.use(
  (response) => response,
  responseErrorHandler
)

export { axiosInstance as ApiClient }
