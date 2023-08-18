import React, { useState } from 'react'
import NavLinks from '../../NavLinks'
import { FaBars } from 'react-icons/fa'
import logo from "../../../assets/logo.png";
import ResponsiveNavLink from '../../ResponsiveNavLink';
import { Link } from 'react-router-dom';
const Index = () => {
    const [showNave, setShowNav] = useState(false)
  return (
    <header className='backit flex h-[80px] w-[100%-200px]  right-0 justify-between p-10 items-center px-[200px] bg-white z-50' >
        <div className="">
            <Link to={'/'}><img src={logo} alt="azipay logo" className='h-[50px]'/></Link>
        </div>
        <div className="text-2xl text-[#072B24] lg:hidden block" onClick={() => setShowNav(!showNave)}>
        <FaBars />
        </div>
        <nav className="flex items-center justify-between flex-1">
        <div className="flex-1 flex justify-evenly items-center">
            <NavLinks className='text-2xl' to='/'>Individual</NavLinks>
            <NavLinks className='text-2xl' to='/'>Business</NavLinks>
            <NavLinks className='text-2xl' to='/'>Pricing</NavLinks>
            <NavLinks className='text-2xl' to='dashboard'>Set Your PayRoll</NavLinks>
            
        </div>
        <div className="flex">
            <ResponsiveNavLink className='border-2 border-[#072B24]' to='dashboard'>Login</ResponsiveNavLink>
            <ResponsiveNavLink className='bg-[#072B24] text-white' to='dashboard'>Dashboard</ResponsiveNavLink>
            
        </div>
        </nav>
    </header>
  )
}

export default Index