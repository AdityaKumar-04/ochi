import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
export default function Landing() {

  return (
    <div data-scroll data-scroll-speed='-.3' data-scroll-section className='w-full pb-24 bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {['we create', 'eye opning', 'PRESENTATIONS'].map((items, index) => {
          return (
            <div className='masker ' key={index}>

              <div className='w-fit flex items-center'>
                {index === 1 && (<motion.div 
                initial={{width:0}} 
                animate={{width:"9vw"}} 
                transition={{ease:[0.76,0,0.24,1],duration:1}}
                
                className='w-[9vw] h-[6vw] bg-red-500 relative top-2 rounded-md '></motion.div>)}
                <h1 className='font-semibold text-[9vw] uppercase leading-[7vw] tracking-tighter '>{items}</h1>
              </div>

            </div>

          )
        })}


      </div>
      <div className='border-t-2 border-zinc-800 mt-20 flex justify-between py-5 px-20'>
        {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => {
          return (
            <p className='text-md font-light tracking-tight leading-none '>{item}</p>
          )
        })}
        <div className='Start flex gap-5 items-center'>
          <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full cursor-pointer font-light text-md capitalize'>Start the Project</div>
          <div className=' rounded-full border-[2px] border-zinc-500 w-10 h-10 flex items-center justify-center'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
