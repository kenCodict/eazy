import React from 'react'
import Header from '../../Components/Welcome/Header/Index'
import { Outlet } from 'react-router'
const Index = () => {
  return (
    <div className=''>
    <Header />
    <Outlet />
    </div>
  )
}

export default Index