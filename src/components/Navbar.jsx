import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
    const navigate = useNavigate()
    

  return (
    <div className="flex w-full justify-center mt-10">
    <div className='flex justify-between w-[80%] rounded-3xl border-2 pl-10 pr-20 py-4 h-[10vh] items-center bg-white'>
        <div className="flex gap-4">
            <img src={logo} onClick={() => {navigate('/')}} alt="asd" className='h-6 cursor-pointer' />
            <h2 className='font-bold text-gray-800'>GDSC Thapar</h2>
        </div>
        <div className="flex gap-14 items-center">
            <div className=" cursor-pointer text-gray-600 font-semibold" onClick={() => {navigate('/projects')}}>Projects</div>
            <div className=" cursor-pointer text-gray-600 font-semibold" onClick={() => {navigate('/trial')}}>TESTING</div>
            <div className=" cursor-pointer text-gray-600 font-semibold" onClick={() => {navigate('/events')}}>Events</div>
            <div className=" cursor-pointer text-gray-600 font-semibold" onClick={() => {navigate('/team')}}>Team</div>
            <button className='bg-black text-white px-8 py-2 rounded-3xl hover:text-black hover:bg-white transition-all hover:border-2 hover:border-black'>Form Link</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar