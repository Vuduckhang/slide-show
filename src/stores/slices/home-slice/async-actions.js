import { createAsyncThunk } from '@reduxjs/toolkit'
import { notification } from 'antd'
import { ApiClient } from '../../../services/api-client'

const getGalleries = createAsyncThunk('home/getGalleries', async () => {
  try {
    const { data } = await ApiClient.get(`/galleries`)
    return data
  } catch (error) {
    console.log('error.......', error)
    notification.error({
      message: 'Loading galleries failed',
    })
  }
})

export { getGalleries }
