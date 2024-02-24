import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-black pt-1 '>
        <div className='textstructure mt-40 px-20'>
            {["we create","eye opening","presentation"].map((item,index)=>{
                return (
                    <div className='master'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                <div className='mr-[1vw] w-[8vw] rounded-md h-[5.5vw] -top-[1vw] relative bg-green-500'></div>
                            )}
                            <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-semibold '>{item}</h1>
                        </div>
                    </div>
                );
            })}
            
        </div>
        <div className='border-t-[2px] border-zinc-800 mt-20 flex justify-between items-center'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
        <p className=' tracking-tighter leading-none mt-4 px-20'>{item}</p>))}
        <div className='start flex justify item-center gap-5'>
          <div className='border-[2px] border-white rounded-full mt-4 px-4 py-2'>START THE PROJECT</div>
          <div className='border-[2px] border-white rounded-full mt-4 w-10 h-10 flex item-center justify-center mr-40'>
            <span className='rotate-[45deg] flex items-center'>
            <FaArrowUpLong />
            </span>
           </div>
          </div>
        </div>
    </div>
  ) 
}
export default LandingPage;
