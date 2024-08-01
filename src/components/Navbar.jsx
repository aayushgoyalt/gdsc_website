import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
    const navigate = useNavigate()
    

  return (
    <div className='flex justify-between w-full pl-10 pr-20 py-4 h-[10vh] items-center bg-white shadow-2xl'>
        <div className="">
            <img src={logo} onClick={() => {navigate('/')}} alt="asd" className='h-10 cursor-pointer' />
        </div>
        <div className="flex gap-20">
            <div className=" cursor-pointer text-gray-600 font-semibold" onClick={() => {navigate('/projects')}}>Projects</div>
            <div className=" cursor-pointer text-gray-600 font-semibold" onClick={() => {navigate('/trial')}}>TESTING</div>
            <div className=" cursor-pointer text-gray-600 font-semibold" onClick={() => {navigate('/events')}}>Events</div>
            <div className=" cursor-pointer text-gray-600 font-semibold" onClick={() => {navigate('/team')}}>Team</div>
        </div>
    </div>
  )
}

export default Navbar