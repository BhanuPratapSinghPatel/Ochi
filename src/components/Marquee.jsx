import React from 'react'

function marquee() {
  return (
    <div className="bg-[#004d43] w-full rounded-tl-2xl rounded-tr-2xl py-20">
      <div className='border-t-2 border-b-2 flex gap-10 overflow-hidden whitespace-nowrap'>
        <h1 className='text-[15vw] leading-none pt-4 mb-4 font-semibold'>WE ARE OCHI</h1>
        <h1 className='text-[15vw] leading-none pt-4 mb-4 font-semibold'>WE ARE OCHI</h1>
      </div>
    </div>
  )
}

export default marquee