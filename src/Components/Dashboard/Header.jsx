import React from 'react'
import rounded from '../../assets/rounded.svg'
import bgtest from '../../assets/bgtest.png'
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import companyLogo from '../../assets/companyLogo.svg'
import advert from '../../assets/adver.png'
import dash from '../../assets/dashSample.svg'
import bg from '../../assets/phonebg.svg'
import phone from '../../assets/phone.svg'
import wavebg from '../../assets/wavebg.svg'
import dashazi from '../../assets/dashazi.svg'
import { FaBell } from 'react-icons/fa'
import { BiBell } from 'react-icons/bi'
const Header = () => {
  return (
    <div className='dashhead bg-white flex items-center justify-between px-10 h-[80px] max-w-screen overflow-hidden'>
        <div className="">
            <img src={companyLogo} alt="" className="" />

        </div>
        <div className="flex space-x-7 items-center flex-1 justify-end p-[100px]">
            <div className="relative">
                <p className="text-3xl"><BiBell className=''/></p>
                <span className='h-[20px] w-[20px] rounded-full text-white flex items-center justify-center bg-red-500 absolute -top-2 -right-2'>7</span>
            </div>
            <div className="w-[60px] h-[60px] rounded-full flex space-x-3">
                <img src={avatar} alt="" className='w-full h-full rounded-full' />
                <div className="">
                    <h1 className="font-black text-gray-950">Kalu Abaslama</h1>
                    <p className="text-gray-500">Admin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header