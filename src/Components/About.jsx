import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

export default function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black'>
            <h1 className='text-[4vw] leading-[3.7rem] font-serif tracking-tight'>
                Ochi is a strategic partner for
                fast-grow­ing tech businesses that need to raise
                funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className='w-full border-t-[1px] border-t-[#647132] mt-20 pt-10 flex gap-5'>
                <div className='w-1/2'>
                    <h1 className='text-7xl'>Our approach:</h1>
                    <button className='flex items-center gap-10 px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full uppercase'>
                            {/* <span className='rotate-[45deg]'><FaArrowUpLong /></span> */}
                        </div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] bg-[#8e9a65d8] rounded-lg'>

                </div>
            </div>
        </div>
    )
}
