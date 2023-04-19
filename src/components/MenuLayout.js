import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Layout, Menu as MenuNavBar } from 'antd'

import { checkShowNavBar } from '../ultils/common-utils'
import IconPage from './IconPage'

const { Sider, Content } = Layout

const MenuLayout = ({ children }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [selectedKeys, setSelectedKeys] = useState()
  const showMenu = checkShowNavBar(selectedKeys)

  const NavBarList = [
    {
      icon: <IconPage />,
    },
    {
      key: 'Posts',
      label: 'Posts ',
    },
    {
      key: 'Logout',
      label: 'Logout',
    },
  ]
  const handleNavigation = (e) => {
    switch (e.key) {
      case 'Posts':
        console.log('first')
        break
      case 'Logout':
        break
      default:
        break
    }
  }

  useEffect(() => {
    setSelectedKeys(pathname)
  }, [])

  return showMenu ? (
    <Layout>
      <Sider className='sider-nav-bar'>
        <MenuNavBar
          className='menu-nav-bar'
          selectedKeys={selectedKeys}
          onClick={handleNavigation}
          items={NavBarList}
        />
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  ) : (
    <>{children}</>
  )
}

export default MenuLayout
