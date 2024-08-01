import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center h-[90vh]'>
        <div className="grid grid-cols-2 gap-40 items-center">
            <div className="">
                <h1 className='text-9xl font-extrabold flex'>
                    <div className="text-[#4884ed]">G</div>
                    <div className="text-[#f4c20c]">D</div>
                    <div className="text-[#db3236]">S</div>
                    <div className="text-[#3dba54]">C</div>
                </h1>
                <h1 className='text-6xl font-extrabold ml-3'>TIET</h1>
                <h1 className='text-4xl font-extrabold ml-3'>LEARN CODE COLLABORATE</h1>
            </div>
            <div className="">
                IMAGE
            </div>
        </div>
    </div>
  )
}

export default HeroSection