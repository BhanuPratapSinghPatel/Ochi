import React, { useState } from 'react'
import { useEffect } from 'react'

export const Eyes = () => {

    const [rotate,setRotate]=useState(0);

    useEffect(()=>{
       window.addEventListener("mousemove",(e)=>{
        let mouseX=e.clientX;
        let mouseY=e.clientY;

        let delX=mouseX-window.innerWidth/2;
        let delY=mouseY-window.innerHeight/2;

        var angle=Math.atan2(delY,delX)*(180/Math.PI);
        setRotate(angle-180);
       })
    })

  return (
    <div className='eye w-full h-screen overflow-hidden'>
    <div className='relative h-full w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
      <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex items-center justify-center h-[15vw] w-[15vw] rounded-full bg-slate-100'>
          <div className='relative h-[10vw] w-[10vw] rounded-full bg-black'>
            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'>
              <div className='h-10 w-10 rounded-full bg-white'></div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center h-[15vw] w-[15vw] rounded-full bg-slate-100'>
          <div className='relative h-[10vw] w-[10vw] rounded-full bg-black'>
            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'>
              <div className='h-10 w-10 rounded-full bg-white'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
