import { combineReducers } from '@reduxjs/toolkit'

import { authReducer } from './slices/auth-slice'
import { appLoadingReducer } from './slices/app-loading-slice'
import { homeReducer } from './slices/home-slice'

export const rootReducer = combineReducers({
  homeStore: homeReducer,
  authStore: authReducer,
  appLoadingStore: appLoadingReducer,
})
