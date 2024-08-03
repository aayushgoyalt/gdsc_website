import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center flex-col h-[80vh]'>
        <div className=" w-[80%] justify-center items-center flex flex-col">
            <h2 className='text-gray-600 font-semibold mb-4'>Google Developer Students Club Thapar University</h2>
            <h1 className='text-8xl text-center font-bold text-gray-900'>Empower Your Future With Innovation</h1>
            <button className='bg-black px-16 py-3 rounded-3xl mt-10 text-white hover:bg-white  hover:text-black transition-all hover:border-2 hover:border-black'>Learn More</button>
       </div>
    </div>
  )
}

export default HeroSection
