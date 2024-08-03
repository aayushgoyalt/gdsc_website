import React from 'react'
import Carousel from '../Carousel'

const OurTeam = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <button className=' bg-gdsc-yellow px-10 py-2 rounded-3xl text-white'>Our Team</button>
        <h1 className='text-7xl font-bold mt-6'>Team of GDSC Thapar</h1>
        <p className='w-[60%] text-gray-500 text-center mt-6 mb-10'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates numquam quis iste vitae autem accusantium asperiores, aperiam laborum nemo perspiciatis a laudantium ?</p>
        <Carousel />    

    </div>
  )
}

export default OurTeam