import React, { useEffect } from 'react'
import Footer from '../../components/Home/Footer'
import { useAppDispatch, useTypedSelector } from '../../stores'
import { getGalleries } from '../../stores/slices/home-slice'
import Header from '../../components/Home/Header'
import Body from '../../components/Home/Body'

const Home = () => {
  const dispatch = useAppDispatch()
  const galleries = useTypedSelector((state) => state.homeStore.galleries)

  const loadData = async () => {
    await dispatch(getGalleries())
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='home-background'>
      <div className='home-card'>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Home
