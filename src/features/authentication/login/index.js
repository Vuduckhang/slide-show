import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import IconPage from '../../../components/IconPage'
import { ButtonEnum } from '../../../constants/common-constants'
import { useAppDispatch } from '../../../stores'
import { postSignInUser } from '../../../stores/slices/auth-slice'

const Login = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onFinish = async (values) => {
    setIsLoading(true)
    const { payload: isSignInSuccess } = await dispatch(postSignInUser(values))
    if (isSignInSuccess) navigate('/')
    setIsLoading(false)
  }

  return (
    <div className='login-background'>
      <div className='login-card'>
        <IconPage />
        <div className='d-flex justify-content-center mt311'>
          <div>
            <h3 className='text-center'>Sign In</h3>
            <Form form={form} onFinish={onFinish}>
              <span className='fs2 fw0'>Username</span>
              <Form.Item
                className='mb-4'
                rules={[
                  { required: true, message: 'Please confirm User Name!' },
                ]}
                name={'username'}
              >
                <Input className='login-input' />
              </Form.Item>
              <Form.Item
                className='flex items-center justify-center'
                shouldUpdate
              >
                <Button
                  className='login-submit'
                  type='primary'
                  htmlType='submit'
                  loading={isLoading}
                >
                  {ButtonEnum.SignIn}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
