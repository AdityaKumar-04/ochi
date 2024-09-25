import React, { useEffect, useState } from 'react'

export default function Eyes() {
    const [Rotate,setRotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerWidth/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
            
            setRotate(angle -180)

        })
    })
    return (
        <div className='w-full h-screen overflow-hidden '>
            <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]  '>
                <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '>
                            <div className='w-full h-10 absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 ' style={{transform:`translate(-50%, -50% ) rotate(${Rotate}deg)`}}>
                                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '>
                            <div className='w-full h-10 absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 ' style={{transform:`translate(-50%, -50%) rotate(${Rotate}deg)`}}>
                                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    


                </div>
            </div>
        </div>
    )
}
