import React from 'react'
import { HiSquares2X2 } from "react-icons/hi2";
import { LuBookOpen, LuCopyCheck } from "react-icons/lu";
import { TbWallet } from "react-icons/tb";
import { BiUserPlus } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import rounded from '../../assets/rounded.svg'
import bgtest from '../../assets/bgtest.png'
import logo from '../../assets/logo.png'
import advert from '../../assets/adver.png'

import dash from '../../assets/dashSample.svg'
import bg from '../../assets/phonebg.svg'
import phone from '../../assets/phone.svg'
import wavebg from '../../assets/wavebg.svg'
import dashazi from '../../assets/dashazi.svg'
import { Link } from 'react-router-dom';
import { FaChevronDown, FaCog } from 'react-icons/fa';
import { BsTelephoneForward } from 'react-icons/bs';

const LinkItem = ({icon, title,active, chevron}) => {
    return (
        <Link to="/" className={`p-4 text-md grid grid-cols-3 border-b border-b-gray-300 items-center gap-4 relative ${active && "border-l-8 border-[#072B24] text-[#072B24] bg-[#d5ebe6]"}`}>
            <p className="w-fit">{icon}</p>
            <p className="w-[200px] text-left -ml-14">{title}</p>
            {chevron && <p className='text-md w-fit absolute right-4'><FaChevronDown /></p>}
        </Link>
    )
}
const Navbar = () => {

  return (
    <div className='dashnav bg-white h-full fixed w-[300px]'>
        <div className="  text-gray-900">
            <img src={dashazi} alt="" className='w-full'/>
        </div>
        <div className="py-10 overflow-auto">
            <LinkItem icon={<HiSquares2X2 />} title="Dashboard" active="true" />
            <LinkItem icon={<TbWallet />} title="Wallet"  />
            <LinkItem icon={<BiUserPlus />} title="Employee Management" chevron="true" />
            <LinkItem icon={<FiFileText />} title="Payroll" chevron="true" />
            <LinkItem icon={<LuCopyCheck />} title="Compliance" chevron="true" />
            <LinkItem icon={<GiReceiveMoney />} title="Quick Loan" chevron="true" />
            <LinkItem icon={<LuBookOpen />} title="Book Keeping" chevron="true" />
            <LinkItem icon={<BsTelephoneForward />} title="Support"  />
            <LinkItem icon={<FaCog />} title="Setting"  />
        </div>
    </div>
  )
}

export default Navbar