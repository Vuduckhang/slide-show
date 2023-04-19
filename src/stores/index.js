import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'

import createWebStorage from 'redux-persist/es/storage/createWebStorage'
import { checkClientSide } from '../ultils/common-utils'
import { rootReducer } from './rootReducer'

const setupStore = () => {
  let reduxStore, persistStores

  if (!checkClientSide()) {
    reduxStore = configureStore({
      reducer: rootReducer,
    })
  } else {
    const persistConfig = {
      key: 'root',
      whitelist: ['authStore'],
      storage: createWebStorage('local'),
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    reduxStore = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    })
    persistStores = persistStore(reduxStore)
  }

  return { reduxStore, persistStores }
}

const { reduxStore, persistStores } = setupStore()
export const store = reduxStore
export const persistor = persistStores

export const useAppDispatch = () => useDispatch()
export const useTypedSelector = useSelector
