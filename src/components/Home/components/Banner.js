import { Button } from 'antd'
import React from 'react'

const Banner = () => {
  return (
    <div className='d-flex justify-content-between'>
      <div>
        <div className='body-title mb-3'>Save your data storage here.</div>
        <div className='fs3 fw1 body-text '>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </div>
        <Button className='header-button mt-5'>Learn more</Button>
      </div>
      <div className=''>
        <img src={require('../../../img/image1.jpg')} />
      </div>
    </div>
  )
}

export default Banner
