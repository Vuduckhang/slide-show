import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import AdminArea from './areas/Admin'
import { persistor, store } from './stores'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AdminArea />
      </PersistGate>
    </Provider>
  )
}

export default App
