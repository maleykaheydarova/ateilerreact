import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../../../Helpers/helper'

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenExpired()) {
      navigate('/login')
    }
  }, [])
  return (
    <h1 className='h-100 w-100'>You are welcome to admin panel</h1>
  )
}

export default Admin