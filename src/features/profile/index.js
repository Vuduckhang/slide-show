import { Table } from 'antd'
import React, { useState } from 'react'
import MenuLayout from '../../components/MenuLayout'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false)
  // const productsList = useAppSelector((state) => state.productStore.products);
  const productsList = []

  const columns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      key: 'ID',
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
    },
    {
      title: 'Tags',
      dataIndex: 'Tags',
      key: 'Tags',
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
  ]

  return (
    <div>
      <MenuLayout>
        <div className='profile-grid'>
          <Table
            className='pr-0.5 rounded-lg'
            loading={isLoading}
            columns={columns}
            dataSource={productsList}
          />
        </div>
      </MenuLayout>
    </div>
  )
}

export default Profile
