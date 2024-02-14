import React from 'react'

function About() {
  return (
    <div className='bg-[#cdea68] w-full py-20 rounded-tl-2xl rounded-tr-2xl text-[3.5vw]'>
        <h1 className='mr-[15vw] px-10 text-black leading-[3.5vw] '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='border-t-[2.5px] mt-16 border-[#86a418]'>
            <div className='w-1/2 px-10'>
                <h1 className='text-black'>Our Approach</h1>
                <button className=' flex items-center gap-8  rounded-full text-[1.5vw] bg-black  px-7 py-2'>Read More
                <div className='w-2 h-2 rounded-full bg-white'></div>
                </button>
            </div>
        </div>
    </div>
  )};

export default About