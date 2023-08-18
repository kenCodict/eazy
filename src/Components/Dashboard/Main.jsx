import React from 'react'
import dashbanner from '../../assets/dashbanner.png'
import { FaCalendar, FaMoneyBillAlt, FaRegEye } from 'react-icons/fa'
import { HiSquares2X2 } from "react-icons/hi2";
import { LuBookOpen, LuCopyCheck } from "react-icons/lu";
import { TbWallet } from "react-icons/tb";
import { BiUserPlus } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaChevronDown, FaCog } from 'react-icons/fa';
import { BsTelephoneForward } from 'react-icons/bs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
// #072B24
const Card = ({icon, title, className, className2}) => {
    return (
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-5">
            <div className={`${className} rounded-2xl p-5`}>{icon}</div>
            <div className={`${className2}`}>{title}</div>
        </div>
    )
}
const Main = () => {
  return (
    <div className='dashmain px-[100px]'>
        <h1 className="font-bold text-3xl">Welcome Abasiama</h1>
            <p className="text-gray-500 text-xl mb-10">Pay and manage your employee in minutes</p>
      <div className="flex space-x-5">
        {/* left */}
        <div className="flex-1">
            
        <div className="relative h-[200px] w-full flex items-center ">
            <div className="pl-10 z-10">
            <h1 className="text-2xl text-[#e0f8f3]">Wallet Balance</h1>
            <h1 className="text-5xl font-extrabold my-4 text-[#e0f8f3] flex gap-4">N12,560,078.00 <FaRegEye /></h1>
            </div>
            <button className="rounded-full px-5 py-4 text-xl right-5 bg-[#e0f8f3] absolute z-10">Fund Wallet</button>
      <div className="absolute w-full h-full top-0 left-0 z-0">
       <img src={dashbanner} alt="" className="h-full w-full" />
       </div>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full mt-5">
        <Card  icon={<BiUserPlus />} title={"Add Employee"} className={`bg-red-200 text-red-600 text-xl`}/>
        <Card  icon={<FaMoneyBillAlt />} title={"Pay Salarie"} className={`bg-green-200 green-red-600 text-xl`}/>
        <Card  icon={<BsTelephoneForward />} title={"Pay Compliance"} className={`bg-green-200 text-green-600 text-xl`}/>
        <Card  icon={<GiReceiveMoney />} title={"Quick Loan"} className={`bg-blue-200 text-blue-600 text-xl`}/>
      </div>
        </div>
        {/* right */}
        <div className="w-[250px] px-4">
            <div className="rounded-2xl shadow-2xl bg-white w- pb-5 w-full">
               <div className="pb-[50px] border-b-2 border-gray-400">
               <h1 className="bg-green-200 rounded-t-2xl text-center py-3 shadow-xl text-xl font-black mb-4">Next Payroll</h1>
                <div className="flex gap-4 text-xl justify-center items-center mb-4"><FaCalendar /> Friday</div>
                <h2 className="font-bold text-xl text-center">09/11/2022</h2>
               </div>
               <div className="px-4">
               <h2 className="font-bold text-lg">Total Employee</h2>
               <h2 className="font-bold text-4xl">64</h2>
               <div className="grid grid-cols-2">
                <p className="bg-green-700 w-full h-2"></p>
                <p className="bg-red-700 w-full h-2"></p>
               </div>
               <div className="grid grid-cols-2">
                <p className="grid"><span>Male</span> <span>32</span></p>
                <p className="grid"><span>Female</span> <span>32</span></p>
               </div>
               </div>
               
            </div>
        </div>
      </div>
      <div className="bg-white w-full h-[800px] my-10 p-5">
        <div className="flex justify-between items-center">
            <div className="p-10">
                <p className='text-xl'>Inflow</p>
                <h1 className="text-green-500  font-bold text-2xl">1,567,552</h1>
            </div>
            <div className="">
                <p className='text-xl'>Outflow</p>
                <h1 className="text-red-500 font-bold text-2xl">1,567,552</h1>
            </div>
            <select name="outflow" id="inflow" className='focus:outline-none p-4 text-xl'>
                <option value="inflow/Outflow">Inflow/Outflow</option>
               </select>
        </div>
      <div className="p-4 my-10 h-[500px] w-full flex items-center justify-center mx-auto">
      <Line options={options} data={data}  />
      </div>
      </div>
    </div>
  )
}

export default Main




ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
 const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Inflow/Outflow Visual Representation',
    },
  },
  scales: {
    y: {
      type: 'linear' ,
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', "AUG", "SEPT","OCT","NOV", "DEC"];

const data = {
  labels,
  datasets: [
    {
      label: 'Outflow',
      data: labels.map(() => faker.datatype.number({ min: 1000000, max: 1567552 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Inflow',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1567552 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

