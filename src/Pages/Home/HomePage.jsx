import React, { useState } from 'react'


import rounded from '../../assets/rounded.svg'
import bgtest from '../../assets/bgtest.png'
import logo from '../../assets/logo.png'
import advert from '../../assets/adver.png'
import howitworks from '../../assets/howItworks.svg'
import dash from '../../assets/dashSample.svg'
import bg from '../../assets/phonebg.svg'
import phone from '../../assets/phone.svg'
import wavebg from '../../assets/wavebg.svg'
import dashazi from '../../assets/dashazi.svg'
import PrimaryButton from '../../Components/PrimaryButton'
import { FaFacebook, FaFacebookF, FaGooglePlay, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsApple, BsSend } from "react-icons/bs";
import { Link } from 'react-router-dom'
import TextInput from '../../Components/TextInput'



const Card = ({title, text, className}) => {
  return(
    <div className={`flex flex-col justify-center duration-1000 w-[500px] h-[300px] bg-[#072B24] rounded-xl shadow-2xl text-white px-5 py-4 absolute top-0 ${className}`}>
      <h1 className="text-2xl text-center font-black font-sans mb-10">{title}</h1>
      {text.map(item => <p className='text-lg mb-2'>{item}</p>)}
    </div>
    )
}
const Banner = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2 pl-[200px] relative">
    <div className="">
      <h1 className='font-primary text-[5rem] font-black mb-10 leading-[100px]'>Run your <span className="text-green-800">payroll</span> <span className="text-yellow-800">easily</span> in <span className="text-red-600">seconds</span></h1>
      <p className="text-4xl mb-10 font-serif text-gray-500">we have built an all-inclusive simple solution for individual and business to manage staff, pay salaries,bills, and relevant taxes all at once.</p>
      <PrimaryButton className="py-5 px-10 rounded-full text-2xl mb-10">Start Using Free, Forever</PrimaryButton>
      <p className="text-3xl mb-10 font-serif text-black font-bold ">Download the Eazypay App</p>
      <div className="flex gap-4">
        <Link to={'/'} className="flex gap-2 bg-white shadow-lg rounded-lg p-5 justify-center items-center w-[300px]">
          <p className="p-5 rounded-full text-4xl bg-gray-200 w-fit"><BsApple /></p>
          <p className="flex flex-col">Download on <span className="font-black">Play Store</span></p>
        </Link>
        <Link to={'/'} className="flex gap-2 bg-white shadow-lg rounded-lg p-5 justify-center items-center w-[300px]">
          <p className="p-5 rounded-full text-4xl bg-gray-200 w-fit"><FaGooglePlay /></p>
          <p className="flex flex-col">Get on <span className="font-black">Google Play</span></p>
        </Link>

      </div>
    </div>
    <div className="relative overflow-x-hidden overflow-y-visible ">
      <div className="border-[20px] border-[#11332c] rounded-2xl absolute z-20 h-[70%] w-[90%] left-[30%] top-[15%] ">
        <img src={dash} alt="" className='rounded-lg h-full w-full object-cover' />
      </div>
      <div className='w-[100%] h-[100%] rounded-full relative'>
        <img src={rounded} alt="" className="w-full h-full rounded-full -z-50" />
        <div className="w-full h-full rounded-full absolute z-10 top-0 left-0">
          <img src={wavebg} alt="" className="w-full h-full rounded-full" />
        </div>
      </div>
    </div>
  </div>
}

const HowItWorks = () => {
return (
  <div className="bg-white min-h-screen w-full px-[200px] pt-[200px] pb-[100px] ">
    <h1 className='text-[#072B24] font-primary text-[3rem] font-black mb-10 leading-[20px] text-center'>
      How Eazipay Works
    </h1>
    <p className="text-center text-2xl mb-10 font-serif text-gray-700">Get Started in 3 Simple Steps</p>
  <div className="relative flex gap-20 items-center">
<div className="relative">
  <div className="w-[500px] h-[500px] relative">
  <p className="rounded-full w-full h-full  bg-[#bdf1e7] bg-opacity-50 absolute border border-dashed border-[#072B24]"></p>
  <p className="rounded-full w-[90%] h-[90%] top-[5%] left-[5%] bg-[#a7eb8c] bg-opacity-60 absolute z-10"></p>
  <p className="rounded-full w-[80%] h-[80%] top-[10%] left-[10%]  bg-[#072B24] absolute z-20"></p>
  </div>
  <div className="absolute -top-[50px] left-[100px] z-30 h-[600px] w-[300px]">
    <img src={phone} alt="How it works demo" className='w-full h-full' />
  </div>
</div>
<div className="">
  <img src={howitworks} alt="How it works steps" className="" />
</div>
  </div>
  </div>
)
}
const ForInd = () => {
return (
  <div className="h-screen w-full px-[200px] relative">
<div className="h-full w-full absolute top-0 left-0 -z-40">
  <img src={bgtest} alt="" className='w-full h-full'/>
</div>
<div className="pt-[100px] mt-[200px]">
  <h1 className="font-primary text-[#072B24] text-[4rem] text-center">For Individuals and Businesses</h1>
  <p className="font-sans text-center text-2xl text-black my-10">Join 200+ businesses Using Eazipay's solution</p>
  <div className="flex relative justify-center items-center w-[500px] mx-auto">
    <Card 
    title={`Tamper-proof Payroll for Life`}
    text={['Your Staff Payroll history is kept in one place forever.', 'No More excel sheet or manual records. Download your payroll history anytime you need it.']}
    className={`peer/first -left-[250px]`}
    />
    <Card 
    title={`All Payroll, Anytime Anywhere`}
    text={['Wherever you are, Eazypay have get you covered on all your Payroll tasks.', 'Whether it is Taxes, Pension insurancesHMOs, Trustfunds, Eazipay handle all your compliances in one place and easily, in seconds.']}
    className={`left-[0px] peer-hover/first:left-[230px] hover:left-[-150px] peer/sec`}
    />
    <Card 
    title={`Payroll in Seconds`}
    text={['Never Spend more 2 minutes on payroll.', 'Just click on your staff and bulk-pay them at once.','payment is done permanently' ]}
    className={`left-[250px] peer-hover/sec:left-[330px] hover:left-[150px]`}
    />
  </div>
</div>
</div>
)
}
const FreeForever = () => {
  return (
    <div className='bg-pink-200 min-h-screen w-full relative py-[200px] pl-[200px]'>
      <Dotted number={28} className={`absolute left-[200px] top-0 grid-cols-4 w-fit h-fit gap-x-4 gap-y-3`} className2={`w-[7px] h-[7px] bg-pink-700 text-white`} />
      <div className="w-full h-full absolute top-0 left-0">
        <img src={wavebg} alt="" className='w-full h-full object-cover object-center ' />
      </div>
      <div className="flex items-center justify-center gap-5 pr-10">
     <div className="">
     <h1 className='font-primary text-[4rem] mb-20 leading-[50px]'>Free forever for your <span className="text-red-600">salary  payment</span></h1>
      <p className="font-sans text-2xl text-black my-10">Join 200+ businesses Using Eazipay's solution</p>
      <div className="flex gap-4">
        <Link to={'/'} className="flex gap-2 bg-white shadow-lg rounded-lg p-5 justify-center items-center w-[300px]">
          <p className="p-5 rounded-full text-4xl bg-gray-200 w-fit"><BsApple /></p>
          <p className="flex flex-col">Download on <span className="font-black">Play Store</span></p>
        </Link>
        <Link to={'/'} className="flex gap-2 bg-white shadow-lg rounded-lg p-5 justify-center items-center w-[300px]">
          <p className="p-5 rounded-full text-4xl bg-gray-200 w-fit"><FaGooglePlay /></p>
          <p className="flex flex-col">Get on <span className="font-black">Google Play</span></p>
        </Link>

      </div>
     </div>
     <div className="">
<img src={advert} alt="" className="" />
     </div>
      </div>
    </div>
  )
}
const Dotted = ({className, number,className2}) => {
  let y = [];
  for (let index = 1; index <= number; index++) {
     y.push(index);
  }
  
  return (
    <div className={`grid ${className}`}>
      {y.map(item => <p className={` rounded-full ${className2}`}></p>)}
    </div>
  );
  }


const HomePage = () => {
  return (
 <section className="h-screen mt-[80px] pt-10">
      <Banner />
      <ForInd />
      <HowItWorks />
      <FreeForever />
      <GetExclusive />
      <Footer />
 </section>
  )

}

export default HomePage

const GetExclusive = () => {
  const [isActive, setisActive] = useState(false)
  return (
    <div className="min-h-screen w-full bg-[#d7ebe7] relative px-[200px] py-[100px]">
      <Dotted number={27} className={`absolute top-[200px] left-0 grid-cols-9 w-fit h-fit gap-x-4 gap-y-5`} className2={`w-[10px] h-[10px] bg-[#072B24] text-white`} />
      <div className="grid grid-cols-2 gap-5 pt-[200px]">
     <div className="">
     <h1 className='font-primary text-[3rem] text-[#072B24] mb-10 leading-[50px]'>Get an Exclusive Demo of Eazipay</h1>
      <p className="font-sans text-2xl text-black my-10 w-[80%]">Our greatest priority is to put your business first. Let's show you how wa can help.</p>
     </div>
    <div className="">
    <h1 className='font-sans text-[2rem] font-extrabold text-center mb-5 leading-[30px]'>First things first</h1>
      <p className="font-sans text-2xl text-black text-center my-10">We want to serve you better. Tell us a bit about yourself or company</p>
      <div className="flex justify-center items-center gap-4 border-2 rounded-2xl border-[#21413a]">
        <button className={`w-full py-3 duration-1000 rounded-lg shadow-2xl ${!isActive ? "bg-[#072B24] text-white" :"bg-transparent text-gray-900"}`} onClick={() => setisActive(false)}>Individual</button>
        <button className={`w-full py-3 rounded-lg duration-1000 shadow-2xl ${isActive ? "bg-[#072B24] text-white" :"bg-transparent text-gray-900"}`} onClick={() => setisActive(true)}>Company</button>
      </div>
    <form action="" method="post">
      <TextInput placeholder="First Name" className='w-full rounded-xl my-5 py-3 px-4'  name="name" id="name" />
      <TextInput placeholder="Last Name" className='w-full rounded-xl my-5 py-3 px-4'  name="lname" id="lname" />
      <TextInput placeholder="Email" className='w-full rounded-xl my-5 py-3 px-4'  name="email" id="email" />
      <TextInput placeholder="Job Title" className='w-full rounded-xl my-5 py-3 px-4'  name="job" id="job" />
      <TextInput placeholder="Company Size" className='w-full rounded-xl my-5 py-3 px-4'  name="size" id="size" />
    <button className={`w-full py-3 rounded-full duration-1000 shadow-xl bg-[#113a32] text-white`} >Request Demo</button>
      </form>
    </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='grid grid-cols-5 min-h-[300px] gap-5 border-t-2 border-gray-500 bg-white px-[200px] py-[100px]'>
      <div className="flex flex-col gap-7 text-lg">
        <img src={logo} alt="" className="h-[50px] max-w-[150px]" />
        <p className="">Copyright &copy; {new Date().getFullYear()} Eazipay.</p>
        <p className="">All rights reserved</p>
       <div className="flex space-x-2">
       <p className="text-2xl bg-slate-200 rounded-full p-2"><FaInstagram /></p>
       <p className="text-2xl bg-slate-200 rounded-full p-2"><FaTwitter /></p>
       <p className="text-2xl bg-slate-200 rounded-full p-2"><FaLinkedinIn /></p>
       <p className="text-2xl bg-slate-200 rounded-full p-2"><FaFacebookF /></p>
       </div>
      </div>
      <div className="text-lg flex flex-col gap-7 ">
        <h1 className="font-bold">Product</h1>
        <p>Individual</p>
        <p>Businesses</p>
        <p>Request demo</p>
        <p>Pricing</p>
      </div>
      <div className="flex flex-col gap-7 text-lg">
        <h1 className="font-bold">Legal</h1>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="flex flex-col gap-7 text-lg">
        <h1 className="font-bold">Resources</h1>
        <p>FAQS</p>
        <p>Blog</p>
        <p>Career</p>
        <p>Customer Stories</p>
      </div>
      <div className="flex flex-col gap-7 text-lg">
        <h1 className="font-bold">Contact Us</h1>
        <p>eazipay@gmail.com</p>
        <p>+234 816 878 9518</p>
        <div className="bg-slate-200 rounded-full py-1 px-4 flex items-center justify-center w-[80%] relative">
        <input type="text" className="bg-transparent text-lg px-4 w-full focus:outline-none" placeholder='Your email address'/>
        <button className="text-lg absolute top-1 right-3 bg-transparent"><BsSend /></button>
        </div>
      </div>
    </footer>
  )
}