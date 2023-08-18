import React from 'react'
import Main from '../../Components/Dashboard/Main'
import Navbar from '../../Components/Dashboard/Navbar'
import Header from '../../Components/Dashboard/Header'

const Dashboard = () => {
  return (
    <div className='dashcont'>
      <Header />
      <Navbar />
      <Main />
    </div>
  )
}

export default Dashboard