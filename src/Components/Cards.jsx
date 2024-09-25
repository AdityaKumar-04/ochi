import React from 'react'

export default function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-100 flex gap-5 items-center px-20'>
            <div className='w-1/2 h-[50vh]'>
                <div className='w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""  className='w-32'/>
                    <button className='absolute left-10 bottom-10 px-6 py-1 border-2 rounded-full'>©2019–2022</button>
                </div>
            </div>
            <div className='w-1/2 h-[50vh] flex gap-5'>
                <div className='w-full h-full bg-[#2e423f] rounded-xl flex items-center justify-center relative'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" className='w-32'/>
                    <button className='absolute left-10 bottom-10 px-6 py-1 border-2 rounded-full'>©2019–2022</button>
                </div>
                <div className='w-full h-full bg-[#2c3f3d] rounded-xl flex items-center justify-center relative'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className='w-32'/>
                    <button className='absolute left-10 bottom-10 px-6 py-1 border-2 rounded-full'>©2019–2022</button>
                </div>
            </div>


        </div>
    )
}
