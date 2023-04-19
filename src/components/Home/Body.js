import React from 'react'
import { useAppDispatch } from '../../stores'
import Banner from './components/Banner'
import Features from './components/Features'

const Body = () => {
  const dispatch = useAppDispatch()

  return (
    <div className='body-card'>
      <Banner />
      <Features />
    </div>
  )
}

export default Body
