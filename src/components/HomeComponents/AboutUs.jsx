import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-full flex justify-center'>
        <div className="w-[80%] bg-gray-100 justify-center  rounded-3xl px-20 py-10">
                <div className="grid grid-cols-5 items-center gap-36">
                    <div className="col-span-3">
                        <button className='bg-red-500 px-4 py-2 rounded-3xl text-white mb-6'>TL:DR</button>
                        <h1 className='text-6xl font-bold mb-4'>ABOUT</h1>
                        <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio hic delectus nemo blanditiis repudiandae. Vel distinctio ducimus blanditiis quos minima provident hic obcaecati sequi voluptate quas, sed nam nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia natus? Nulla, veniam vero inventore fugiat distinctio consequatur quas eveniet maiores, sunt nisi vel? Dolore, rem minima! Id, deleniti veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis recusandae nihil beatae ut id dolores. Culpa deserunt ullam quam eius tempore hic quibusdam expedita ad fuga. Ipsum, a quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis suscipit, neque voluptate expedita odio doloremque ullam dolores et. Quam ad beatae pariatur expedita voluptates sunt delectus debitis itaque, natus voluptas?</p>
                        <div className="COUNTER mt-10 flex w-full gap-8">
                            <div className="flex flex-col">
                                <h1 className='text-4xl font-bold'>60</h1>
                                <p className='font-semibold text-gray-700'>Members</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className='text-4xl font-bold'>8+</h1>
                                <p className='font-semibold text-gray-700'>Projects</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className='text-4xl font-bold'>12+</h1>
                                <p className='font-semibold text-gray-700'>Departments</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        IMAGE TO BE PLACED
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AboutUs