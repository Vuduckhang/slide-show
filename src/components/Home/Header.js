import { Button } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { ButtonEnum } from '../../constants/common-constants'
import { useAppDispatch, useTypedSelector } from '../../stores'
import { postLogoutUser } from '../../stores/slices/auth-slice'
import IconPage from '../IconPage'

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isLoadingLogout, setIsLoadingLogout] = useState(false)
  const user = useTypedSelector((state) => state.authStore.user)

  const logoutUser = async () => {
    setIsLoadingLogout(true)
    await dispatch(postLogoutUser())
    setIsLoadingLogout(false)
  }

  const onclick = (value) => {
    switch (value) {
      case ButtonEnum.SignIn:
        navigate('/login')
        break
      case ButtonEnum.Profile:
        navigate('/profile')
        break
      case ButtonEnum.Logout:
        logoutUser()
        break
      default:
        break
    }
  }

  return (
    <div className='header-card d-flex justify-content-between'>
      <IconPage />
      {!!user ? (
        <div>
          <Button
            className='header-button'
            onClick={() => {
              onclick(ButtonEnum.Profile)
            }}
          >
            {ButtonEnum.Profile}
          </Button>
          <Button
            className='header-button ml-4'
            onClick={() => {
              onclick(ButtonEnum.Logout)
            }}
            loading={isLoadingLogout}
          >
            {ButtonEnum.Logout}
          </Button>
        </div>
      ) : (
        <Button
          className='header-button'
          onClick={() => {
            onclick(ButtonEnum.SignIn)
          }}
        >
          {ButtonEnum.SignIn}
        </Button>
      )}
    </div>
  )
}

export default Header
