import { Avatar } from 'antd'
import React from 'react'
import IconPage from '../IconPage'

const Footer = () => {
  const aboutList = [
    { name: 'Profile', link: '/' },
    { name: 'Features', link: '/' },
    { name: 'Careers', link: '/' },
    { name: 'DW News', link: '/' },
  ]
  const helpList = [
    { name: 'Support', link: '/' },
    { name: 'Sign up', link: '/' },
    { name: 'Guide', link: '/' },
    { name: 'Reports', link: '/' },
    { name: 'Q&A', link: '/' },
  ]

  const linkList = (list) => {
    return list.map((item, index) => {
      return (
        <div key={index} className='mb-3 fw0'>
          {item.name}
        </div>
      )
    })
  }

  const card = (name, list) => {
    return (
      <div className='mr-5'>
        <div className='mb-4 dark-color fs2 fw5'>{name}</div>
        {linkList(list)}
      </div>
    )
  }

  const AvatarList = [1, 2, 3]

  return (
    <div className='form-footer position-sticky'>
      <div className='footer-card'>
        <div className='d-flex justify-content-between'>
          <div className='mr-5 max-width-250'>
            <div className='d-flex justify-content-start'>
              <IconPage />
              <div className='ml-3 mb-4 dark-color fs4 fw5'>DataWarehouse</div>
            </div>
            <div className='mb-3 fw1'>
              Warehouse Society, 234 Bahagia Ave Street PRBW 29281
            </div>
            <div className='fw0'>info@warehouse.project 1-232-3434 (Main)</div>
          </div>
          {card('About', aboutList)}
          {card('Help', helpList)}
          <div>
            <div className='mb-4 dark-color fs2 fw5'>Social Media</div>
            <div>
              {AvatarList.map(() => (
                <Avatar className='mr-2 footer-avatar' />
              ))}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            <div>© Datawarehouse™, 2020. All rights reserved.</div>
            <div className={`mb-3`}>Company Registration Number: 21479524.</div>
          </div>

          <div className='footer-chat'>
            <img src={require('../../img/Group 64.jpg')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
