import React from 'react'
import { motion } from "framer-motion"
export default function Marque() {
  return (
    <div data-scroll data-scroll-speed='.1' data-scroll-section className='w-full py-10 bg-[#004D43] rounded-t-3xl z-[9999]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden items-center'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: 'linear', repeat:Infinity,duration:10}} className='text-[17vw] leading-none font-semibold uppercase  pt-10 pb-10'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: 'linear', repeat:Infinity,duration:10}} className='text-[17vw] leading-none font-semibold uppercase  pt-10 pb-10'>We are Ochi</motion.h1>
        </div>
    </div>  
  )
}
